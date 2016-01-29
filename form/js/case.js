var g = {};
g.INNER_WIDTH = 960 + "px";
g.INNER_HEIGHT = 570 + "px";
g.OVERLAY_WIDTH = 100 + "%";
g.OVERLAY_HEIGHT = 450 + "px";
g.OPEN_OVERLAY_HEIGHT = 600 + "px";
g.MOVE_TOP = 592;
g.MOVE_LEFT = 986;
g.SCROLL_SPEED = 500;
g.SLIDE_SPEED = 250;
g.SEARCH_TEXT_WIDTH = 250 + "px";
g.ONE_MINUTE = (1000 * 60);
g.INTERVAL_ID = null;
g.ORIGIN_URL = "http://wakasa.nc-service.biz/ajax/atmosphere";
g.elem = {};
g.elem.row = 1;
g.elem.col = 1;
g.elem.row_col = g.elem.row + "_" + g.elem.col;
g.auto = {};
g.touch = {};
g.touch.swing = 50;
$(document).ready(function() {
        $("body").show();
        "use strict";
        $.fn.hasRight = function() {
                return !$(this).hasClass("right-end");
        };
        $.fn.hasBottom = function() {
                return !$(this).hasClass("bottom-end");
        };
        var moveWindow = function(lf, tp) {
                $(".sectionWindow").scrollTo({
                        left: lf,
                        top: tp
                }, g.SCROLL_SPEED, "normal");
        };
        var toggleBtn = function() {
                (g.elem.row === 1 || $("div.slide-out-overlay:visible").length) ? $(".section-nav.top").hide(): $(".section-nav.top").show();
                (g.elem.col === 1 || $("div.slide-out-overlay:visible").length) ? $(".section-nav.left").hide(): $(".section-nav.left").show();
                (!$("#" + g.elem.row_col).hasRight() || $("div.slide-out-overlay:visible").length) ? $(".section-nav.right").hide(): $(".section-nav.right").show();
                (!$("#" + g.elem.row_col).hasBottom() || $("div.slide-out-overlay:visible").length) ? $(".section-nav.bottom").hide(): $(".section-nav.bottom").show();
                (!$("#" + (g.elem.row + 1) + "_" + g.elem.col).length || $("div.slide-out-overlay:visible").length) ? $(".section-nav.bottom").hide(): $(".section-nav.bottom")
                        .show();
                (!$("#" + (g.elem.row - 1) + "_" + g.elem.col).length || $("div.slide-out-overlay:visible").length) ? $(".section-nav.top").hide(): $(".section-nav.top").show();
        };
        var loadSpreadSheet = function() {
                var js = {};
                _.each(g.data, function(d) {
                        var ir = d.Industry;
                        if (typeof js[ir] === "undefined") {
                                js[ir] = [];
                        }
                        js[ir].push(d);
                });
                var n = 1;
                _.each(_.keys(js), function(ir) {
                        var tp = $("#industry-data").text();
                        var cp = _.template(tp);
                        $("ul.nav.navbar-nav").append(cp({
                                no: n++,
                                name: ir,
                                lower_style: (ir.toLowerCase().replace(/\s+/g, "_"))
                        }));
                });
                $("ul.nav.navbar-nav li a:eq(0)").addClass("active");
                var i = 1;
                var src = [];
                _.each(js, function(ar, ir) {
                        ir = (ir.toLowerCase().replace(/\s+/g, "_"));
                        var tpl1 = $("#section-wrapper").text();
                        var cpl1 = _.template(tpl1);
                        $("div.sections-wrapper").append(cpl1({
                                id: ir
                        }));
                        var j = 1;
                        _.each(ar, function(d) {
                                var tpl2 = $("#section-data").text();
                                var cpl2 = _.template(tpl2);
                                $("#" + ir + " div.clear").append(cpl2({
                                        url: d.Url,
                                        name: d.Name,
                                        comment: d.Comment,
                                        filepath: d.Filepath,
                                        right: (ar.length === j) ? "right-end" : "not-right-end",
                                        bottom: (_.size(js) === i) ? "bottom-end" : "not-bottom-end",
                                        section: i + "_" + j
                                }));
                                src.push(d.Name);
                                g.auto[d.Name] = i + "_" + j;
                                j++;
                        });
                        i++;
                });
                $(".material-text-input").autocomplete({
                        source: src,
                        minLength: 2,
                        delay: 300,
                        select: function(ev, ui) {
                                if (typeof ui.item.value !== "undefined" && typeof g.auto[ui.item.value] !== "undefined") {
                                        var sl = g.auto[ui.item.value];
                                        $(".sectionWindow").scrollTo($("#" + sl), g.SCROLL_SPEED, "normal");
                                        toggleBtn();
                                }
                        }
                });
        };
        var autoPlay = function() {
                if ($("#" + g.elem.row_col).hasRight()) {
                        $(".rightnav").click();
                } else if ($("#" + g.elem.row_col).hasBottom()) {
                        $("a.active").closest("li").next().find("a").click();
                } else {
                        $("div.container-fluid ul.nav li a:eq(0)").click();
                }
                toggleBtn();
                return false;
        };
        $(document).on("click", ".header-action-button", function(ev) {
                ev.preventDefault();
                $(".slide-out-overlay").fadeIn(g.SLIDE_SPEED);
                $(".slide-out").addClass("open");
                $(".section-nav.top,.section-nav.bottom,.section-nav.left,.section-nav.right").hide();
                var el = $("#" + g.elem.row_col);
                $("div.slide-out span.name").text(el.find("span.name").text());
                $("div.slide-out a.url").attr("href", el.find("span.url").text());
                $("div.slide-out p.comment").text(el.find("span.comment").text());
                clearInterval(g.INTERVAL_ID);
                return false;
        });
        $(document).on("click", ".iframeOpen", function(ev) {
                ev.preventDefault();
                $(".slide-out-close").removeClass("half").addClass("open");
                $(".slide-out.open").addClass("iframeArea");
                $(".contentBox,.section-nav.top,.section-nav.bottom,.section-nav.left,.section-nav.right,.btn.iframeOpen.btn-default,.slide-out-widget").hide();
                $(".slide-out-widgetFrame").show();
                var im = document.createElement("iframe");
                im.src = $("#" + g.elem.row_col).find("span.url").text();
                im.height = g.OPEN_OVERLAY_HEIGHT;
                im.width = g.OVERLAY_WIDTH;
                $("div.slide-out-widgetFrame").append(im);
                return false;
        });
        $(document).on("click", "a.slide-out-close,div.slide-out-overlay", function(ev) {
                ev.preventDefault();
                if ($(".slide-out-close").hasClass("open")) {
                        $(".slide-out.open").removeClass("iframeArea");
                        $(".slide-out-widget,.contentBox").show();
                        $(".slide-out-widgetFrame").hide();
                        $(".slide-out-close").removeClass("open");
                        setTimeout(function() {
                                $(".slide-out-close").addClass("half");
                        }, 1);
                } else {
                        $(".slide-out-overlay").hide();
                        $(".slide-out").removeClass("open").removeClass("half");
                        g.INTERVAL_ID = window.setInterval(autoPlay, g.ONE_MINUTE);
                }
                $(".btn.iframeOpen.btn-default").show();
                $("div.slide-out-widgetFrame").empty();
                toggleBtn();
                return false;
        });
        $(document).on("click", ".glyphicon", function(ev) {
                ev.preventDefault();
                $(".group").animate({
                        width: g.SEARCH_TEXT_WIDTH
                }, g.SLIDE_SPEED).show();
                return false;
        });
        $(document).on("click", "div.container-fluid ul.nav li a", function(ev) {
                var r = $(this).data("row");
                if (!$("#" + r + "_1").length) {
                        return false;
                }
                g.elem.row = r;
                g.elem.col = 1;
                g.elem.row_col = g.elem.row + "_" + g.elem.col;
                toggleBtn();
                $("a.active").removeClass("active");
                $(this).addClass("active");
                $(".sectionWindow").scrollTo($("#" + g.elem.row_col), g.SCROLL_SPEED, "normal");
                return false;
        });
        $(document).on("click", "div.section-nav", function(ev) {
                var lf = "-=0";
                var tp = "-=0";
                if ($(this).hasClass("top") || $(this).hasClass("bottom")) {
                        g.elem.row = $(this).hasClass("top") ? (g.elem.row - 1) : (g.elem.row + 1);
                        tp = $(this).hasClass("top") ? "-=" + g.MOVE_TOP : "+=" + g.MOVE_TOP;
                        var r = $("a.active").data("row");
                        var s = "ul.nav li a[data-row='" + ($(this).hasClass("top") ? r - 1 : r + 1) + "']";
                        $("ul.nav li a.active").removeClass("active");
                        $(s).addClass("active");
                } else if ($(this).hasClass("left") || $(this).hasClass("right")) {
                        g.elem.col = $(this).hasClass("left") ? (g.elem.col - 1) : (g.elem.col + 1);
                        lf = $(this).hasClass("left") ? "-=" + g.MOVE_LEFT : "+=" + g.MOVE_LEFT;
                }
                g.elem.row_col = g.elem.row + "_" + g.elem.col;
                moveWindow(lf, tp);
                toggleBtn();
        });
        $(document).on("touchstart", "body", function(ev) {
                ev.preventDefault();
                g.touch.startX = ev.pageX;
                g.touch.startY = ev.pageY;
        });
        $(document).on("touchmove", "body", function(ev) {
                ev.preventDefault();
                g.touch.moveX = ev.pageX;
                g.touch.moveY = ev.pageY;
        });
        $(document).on("touchend", "body", function(ev) {
                if (Math.abs(g.touch.startX - g.touch.moveX) >= g.touch.swing) {
                        if (g.touch.startX > g.touch.moveX) {
                                if (g.touch.startX > (g.touch.moveX + g.touch.swing) && $("a.rightnav:visible").length) {
                                        $("a.rightnav").click();
                                }
                        } else if (g.touch.startX < g.touch.moveX) {
                                if ((g.touch.startX + g.touch.swing) < g.touch.moveX && $("a.leftnav:visible").length) {
                                        $("a.leftnav").click();
                                }
                        }
                } else if (Math.abs(g.touch.startY - g.touch.moveY) >= g.touch.swing) {
                        if (g.touch.startY > g.touch.moveY) {
                                if (g.touch.startY > (g.touch.moveY + g.touch.swing) && $("a.bottomnav:visible").length) {
                                        $("a.bottomnav").click();
                                }
                        } else if (g.touch.startY < g.touch.moveY) {
                                if ((g.touch.startY + g.touch.swing) < g.touch.moveY && $("a.topnav:visible").length) {
                                        $("a.topnav").click();
                                }
                        }
                }
        });
        g.INTERVAL_ID = window.setInterval(autoPlay, g.ONE_MINUTE);
        $(document).on("mousemove", "body", function(ev) {
                if (g.INTERVAL_ID) {
                        clearInterval(g.INTERVAL_ID);
                }
                if (!$("div.slide-out-overlay:visible").length) {
                        g.INTERVAL_ID = window.setInterval(autoPlay, g.ONE_MINUTE);
                }
        });
        $.getJSON(g.ORIGIN_URL, {}, function(data) {
                g.data = data;
                console.log(g.data);
                loadSpreadSheet();
                toggleBtn();
        });
});