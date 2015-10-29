var g = {
        elem: {
                row: 1,
                col: 1,
                row_col: "1_1"
        },
        auto: {},
        row: {},
        touch: {
                swing: 50
        },
        move: {
                top: false,
                bottom: false,
                right: false,
                left: false,
        },
        ALL_COUNT: 0,
        READ_COUNT: 0,
        SCROLL_WIDTH: 20,
        SCROLL_SPEED: 500,
        SLIDE_SPEED: 250,
        SEARCH_TEXT_WIDTH: 250 + "px",
        FIVE_SECOND: (1000 * 5),
        FIFTEEN_SECOND: (1000 * 15),
        INTERVAL_ID: null,
        INTERVAL_TIME: 0,
        INTERVAL_DELAY: 0,
        ORIGIN_URL: "http://wakasa.nc-service.biz/nc/load?f=/files/nagagutsu.json",
        DELAY_SECTION_ELEMENT: {},
        LOADING_QUEUE: ["1_1"],
        LOADING_ELEM: [],
        ALREADY_LOADED: [],
        PERMISSION_AGENT: [],
        existNextQueue: function(el) {
                g.READ_COUNT++;
                var s = g.LOADING_QUEUE.shift();
                if (_.isEmpty(g.LOADING_QUEUE)) {
                        window.setTimeout(function() {
                                $(".material-progress").hide();
                                window.setTimeout(function() {
                                        g.toggleBtn();
                                }, 0);
                        }, (g.INTERVAL_DELAY / 2));
                }
                $(el).fadeIn();
                var id = $(el).attr("class");
                $("li." + id).removeClass("opa-07");
                if (g.READ_COUNT >= g.ALL_COUNT) {
                        $("#initSearchIcon").fadeIn();
                }
        },
        toggleBtn: function() {
                if (g.elem.row === 1 || $("div.fullscreen-overlay:visible").length || $("div.slide-out-overlay:visible").length) {
                        g.move.top = false;
                        $(".section-nav.top").hide();
                } else {
                        g.move.top = true;
                        if (!_.contains(g.PERMISSION_AGENT, g.ua)) {
                                $(".section-nav.top").show();
                        }
                }
                if (g.elem.col === 1 || $("div.fullscreen-overlay:visible").length || $("div.slide-out-overlay:visible").length) {
                        g.move.left = false;
                        $(".section-nav.left").hide();
                } else {
                        g.move.left = true;
                        if (!_.contains(g.PERMISSION_AGENT, g.ua)) {
                                $(".section-nav.left").show();
                        }
                }
                if (!$("#" + g.elem.row_col).hasRight() || $("div.fullscreen-overlay:visible").length || $("div.slide-out-overlay:visible").length) {
                        g.move.right = false;
                        $(".section-nav.right").hide();
                } else {
                        g.move.right = true;
                        if (!_.contains(g.PERMISSION_AGENT, g.ua)) {
                                $(".section-nav.right").show();
                        }
                }
                if (!$("#" + g.elem.row_col).hasBottom() || $("div.fullscreen-overlay:visible").length || $("div.slide-out-overlay:visible").length) {
                        g.move.bottom = false;
                        $(".section-nav.bottom").hide();
                } else {
                        g.move.bottom = true;
                        if (!_.contains(g.PERMISSION_AGENT, g.ua)) {
                                $(".section-nav.bottom").show();
                        }
                }
                var __ = g.elem.row + "_" + (g.elem.col - 1);
                if (!$("#" + __ + " iframe").length || $("div.fullscreen-overlay:visible").length || $("div.slide-out-overlay:visible").length) {
                        g.move.left = false;
                        $(".section-nav.left").hide();
                } else {
                        g.move.left = true;
                        if (!_.contains(g.PERMISSION_AGENT, g.ua)) {
                                $(".section-nav.left").show();
                        }
                }
                var __ = g.elem.row + "_" + (g.elem.col + 1);
                if (!$("#" + __ + " iframe").length || $("div.fullscreen-overlay:visible").length || $("div.slide-out-overlay:visible").length) {
                        g.move.right = false;
                        $(".section-nav.right").hide();
                } else {
                        g.move.right = true;
                        if (!_.contains(g.PERMISSION_AGENT, g.ua)) {
                                $(".section-nav.right").show();
                        }
                }
                var __ = (g.elem.row - 1) + "_" + g.elem.col;
                if (!$("#" + __ + " iframe").length || $("div.fullscreen-overlay:visible").length || $("div.slide-out-overlay:visible").length) {
                        g.move.top = false;
                        $(".section-nav.top").hide();
                } else {
                        g.move.top = true;
                        if (!_.contains(g.PERMISSION_AGENT, g.ua)) {
                                $(".section-nav.top").show();
                        }
                }
                var __ = (g.elem.row + 1) + "_" + g.elem.col;
                if (!$("#" + __ + " iframe").length || $("div.fullscreen-overlay:visible").length || $("div.slide-out-overlay:visible").length) {
                        g.move.bottom = false;
                        $(".section-nav.bottom").hide();
                } else {
                        g.move.bottom = true;
                        if (!_.contains(g.PERMISSION_AGENT, g.ua)) {
                                $(".section-nav.bottom").show();
                        }
                }
                console.debug(g.move);
                console.debug("");
        },
        init: function() {
                g.IFRAME_MARGIN = 4;
                g.WINDOW_WIDTH = $(window).width();
                g.WINDOW_HEIGHT = $(window).height();
                g.PADDING_LEFT = (g.WINDOW_WIDTH * 0.15);
                g.HEADER_HEIGHT = $("div.h128").css("height").replace("px", "");
                g.PADDING_TOP = $("div.sections-wrapper").css("padding-top").replace("px", "");
                g.HEIGHT_MARGIN = (g.PADDING_TOP - g.HEADER_HEIGHT);
                g.IFRAME_HEIGHT = g.WINDOW_HEIGHT - g.PADDING_TOP - g.HEIGHT_MARGIN;
                g.MARGIN_RIGHT = (g.HEIGHT_MARGIN / 2);
                g.IFRAME_WIDTH = g.WINDOW_WIDTH - (g.PADDING_LEFT * 2.4);
                g.MOVE_TOP = g.IFRAME_HEIGHT + (g.HEIGHT_MARGIN / 2) + g.IFRAME_MARGIN;
                g.MOVE_LEFT = g.IFRAME_WIDTH + (g.HEIGHT_MARGIN / 2);
                $(".sectionWindow").css({
                        "height": g.WINDOW_HEIGHT + "px",
                        "width": g.WINDOW_WIDTH + "px"
                });
        },
        getUA: function() {
                var ua = navigator.userAgent;
                if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
                        g.ua = "mobile";
                } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
                        g.ua = "tablet";
                } else {
                        g.ua = "pc";
                }
                return g.ua;
        }
};
$(document).ready(function() {
        "use strict";
        $.fn.hasRight = function() {
                return !$(this).hasClass("right-end");
        };
        $.fn.hasBottom = function() {
                return !$(this).hasClass("bottom-end");
        };
        var optionallyEnableTouchUI = function() {
                if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
                        forceTouchUI();
                }
        };
        var forceTouchUI = function() {

                var newUserAgent = navigator.userAgent.toLowerCase();
                var osBlacklist = ['x11', 'macintosh', 'windows'];
                for (var i = 0; i < osBlacklist.length; ++i) {
                        newUserAgent = newUserAgent.replace(osBlacklist[i], 'android');
                }
                navigator.__defineGetter__('userAgent', function() {
                        return newUserAgent;
                });
        };
        var moveWindow = function(lf, tp) {
                $(".sectionWindow").scrollTo({
                        left: lf,
                        top: tp
                }, g.SCROLL_SPEED, "normal");
        };
        var loadSpreadSheet = function() {
                var js = {};
                var max = 0;
                _.each(g.data, function(d) {
                        var ir = d.category;
                        if (typeof js[ir] === "undefined") {
                                js[ir] = [];
                        }
                        js[ir].push(d);
                        max = (_.size(js[ir]) > max) ? _.size(js[ir]) : max;
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
                        var _ir = (ir.toLowerCase().replace(/\s+/g, "_"));
                        var tpl1 = $("#section-wrapper").text();
                        var cpl1 = _.template(tpl1);
                        $("div.sections-wrapper").append(cpl1({
                                id: _ir,
                                margin: (g.HEIGHT_MARGIN / 2)
                        }));
                });
                g.INDUSTRY = _.keys(js);
                $("ul.nav.navbar-nav li a:eq(0)").addClass("active");
                var src = [];
                for (var i = 0; i < max; i++) {
                        var j = 1;
                        _.each(g.INDUSTRY, function(ir) {
                                if (typeof g.INDUSTRY[i] !== "undefined") {
                                        g.ALL_COUNT++;
                                        var s = (i + 1) + "_" + j;
                                        var _ir = (g.INDUSTRY[i].toLowerCase().replace(/\s+/g, "_"));
                                        var __ir = (ir.toLowerCase().replace(/\s+/g, "_"));
                                        if (typeof js[ir][i] !== "undefined") {
                                                var d = js[ir][i];
                                                var nx = g.INDUSTRY[j] || "";
                                                var arg = (typeof js[nx] !== "undefined" && typeof js[nx][i] !== "undefined") ? 1 : 0;
                                                var tpl2 = $("#section-data").text();
                                                var cpl2 = _.template(tpl2);
                                                var ct = cpl2(new IframeContent(d.filepath, d.name, d.comment, d.filepath, i, j, s, js[ir], arg, __ir));
                                                if (s === "1_1") {
                                                        $("#" + _ir + " div.clear").append(ct);
                                                } else {
                                                        g.DELAY_SECTION_ELEMENT[s] = {};
                                                        g.DELAY_SECTION_ELEMENT[s].content = ct;
                                                        g.DELAY_SECTION_ELEMENT[s].industry = _ir;
                                                }
                                                src.push(d.Name);
                                                g.auto[d.Name] = {};
                                                g.auto[d.Name].row = (i + 1);
                                                g.auto[d.Name].col = j;
                                                g.auto[d.Name].row_col = s;
                                                g.auto[d.Name].category = __ir;
                                                delete js[ir][i];
                                                if (typeof g.row[(i + 1)] === "undefined") {
                                                        g.row[(i + 1)] = j;
                                                }
                                        }
                                        j++;
                                }
                        });
                }
                $(".material-text-input").autocomplete({
                        source: src,
                        minLength: 1,
                        select: function(ev, ui) {
                                if (typeof ui.item.value !== "undefined" && typeof g.auto[ui.item.value] !== "undefined") {
                                        var sl = g.auto[ui.item.value];
                                        g.elem.row = sl.row;
                                        g.elem.col = sl.col;
                                        g.elem.row_col = sl.row_col;
                                        if (typeof g.DELAY_SECTION_ELEMENT[g.elem.row_col] !== "undefined") {
                                                var sw = g.DELAY_SECTION_ELEMENT[g.elem.row_col];
                                                $("#" + sw.industry + " div.clear").append(sw.content);
                                                g.DELAY_SECTION_ELEMENT[g.elem.row_col] = undefined;
                                        }
                                        var l = (g.elem.col - 1) * g.MOVE_LEFT;
                                        var t = (g.elem.row - 1) * g.MOVE_TOP;
                                        moveWindow(l, t);
                                        $("a.active").removeClass("active");
                                        $("li." + sl.category).find("a").addClass("active");
                                        window.setTimeout(function() {
                                                g.toggleBtn();
                                        }, 0);
                                }
                        }
                });
                beforeMoveValidationAll(g.elem.row, g.elem.col);
        };
        var autoPlayReset = function(sec) {
                if (g.INTERVAL_ID) {
                        window.clearInterval(g.INTERVAL_ID);
                }
                if (!$("div.slide-out-overlay:visible").length && !$("div.fullscreen-overlay:visible").length) {
                        g.INTERVAL_ID = window.setInterval(autoPlay, sec);
                }
                return false;
        };
        var autoPlay = function() {
                if ($("#" + (g.elem.row + 1) + "_" + g.elem.col + " img").length) {
                        g.elem.row = (g.elem.row + 1);
                        g.elem.row_col = g.elem.row + "_" + g.elem.col;
                        var l = (g.elem.col - 1) * g.MOVE_LEFT;
                        var t = (g.elem.row - 1) * g.MOVE_TOP;
                        moveWindow(l, t);
                } else if ($("#" + 1 + "_" + (g.elem.col + 1) + " img").length) {
                        g.elem.row = 1;
                        g.elem.col = (g.elem.col + 1);
                        g.elem.row_col = g.elem.row + "_" + g.elem.col;
                        var l = (g.elem.col - 1) * g.MOVE_LEFT;
                        var t = (g.elem.row - 1) * g.MOVE_TOP;
                        var el = $("a.active");
                        el.parent().next().find("a").addClass("active");
                        el.removeClass("active");
                        moveWindow(l, t);
                } else {
                        $("div.container-fluid ul.nav li a:eq(0)").click();
                }
                window.setTimeout(function() {
                        g.toggleBtn();
                }, 0);
                window.setTimeout(function() {
                        beforeMoveValidationAll(g.elem.row, g.elem.col);
                }, 0);
                if (g.INTERVAL_ID) {
                        window.clearInterval(g.INTERVAL_ID);
                }
                if (!$("div.slide-out-overlay:visible").length && !$("div.fullscreen-overlay:visible").length) {
                        g.INTERVAL_ID = window.setInterval(autoPlay, g.FIVE_SECOND);
                }
                return false;
        };
        var loadingNow = function() {
                return (_.isEmpty(g.LOADING_QUEUE));
        };
        var beforeMoveValidationAll = function(rw, cl) {
                g.INTERVAL_TIME = 0;
                var r = rw + "_" + (cl + 1);
                if (typeof g.DELAY_SECTION_ELEMENT[r] !== "undefined") {
                        lazyLoad(r, "right");
                }
                var b = (rw + 1) + "_" + cl;
                if (typeof g.DELAY_SECTION_ELEMENT[b] !== "undefined") {
                        lazyLoad(b, "bottom");
                }
                var l = rw + "_" + (cl - 1);
                if (typeof g.DELAY_SECTION_ELEMENT[l] !== "undefined") {
                        lazyLoad(l, "left");
                }
                var t = (rw - 1) + "_" + cl;
                if (typeof g.DELAY_SECTION_ELEMENT[t] !== "undefined") {
                        lazyLoad(t, "top");
                }
                if (_.isEmpty(g.LOADING_QUEUE)) {
                        g.existNextQueue();
                }
        };
        var lazyLoad = function(sec, pos) {
                g.LOADING_QUEUE.push(sec);
                $("div.section-nav").hide();
                $(".material-progress").show();
                g.INTERVAL_TIME += g.INTERVAL_DELAY;
                var sw = g.DELAY_SECTION_ELEMENT[sec];
                window.setTimeout(function() {
                        $("#" + sw.industry + " div.clear").append(sw.content);
                }, g.INTERVAL_TIME);
                g.DELAY_SECTION_ELEMENT[sec] = undefined;
        };
        var IframeContent = function(u, n, c, f, i, j, s, ar, fg, ir) {
                this.url = u;
                this.name = n;
                this.section = s;
                this.comment = c;
                this.filepath = f;
                this.bottom = (typeof ar[i + 1] !== "undefined") ? "not-bottom-end" : "bottom-end";
                this.right = fg ? "not-right-end" : "right-end";
                this.padding_left = (j !== 1) ? 0 : g.PADDING_LEFT;
                this.width = g.IFRAME_WIDTH;
                this.height = g.IFRAME_HEIGHT;
                this.margin = (g.HEIGHT_MARGIN / 2);
                this.industry = ir;
                console.log(this);
                return this;
        };
        // ### @ deprecated 未使用
        $(document).on("click touchstart", ".iframeOpen", function(ev) {
                ev.preventDefault();
                var el = $("#" + g.elem.row_col);
                $(".iframeTitle").text(el.find("span.name").text());
                $(".slide-out-close").removeClass("half").addClass("open");
                $(".slide-out.open").addClass("iframeArea");
                $(".contentBox,.section-nav.top,.section-nav.bottom,.section-nav.left,.section-nav.right,.btn.iframeOpen.btn-default,.slide-out-widget").hide();
                $(".slide-out-widgetFrame").show();
                var im = document.createElement("img");
                im.src = el.find("span.url").text();
                im.height = (g.WINDOW_HEIGHT - g.HEADER_HEIGHT);
                im.width = (g.WINDOW_WIDTH - g.PADDING_LEFT);
                $("div.slide-out-widgetFrame").append(im);
                if (g.INTERVAL_ID) {
                        window.clearInterval(g.INTERVAL_ID);
                }
                return false;
        });
        // ### @ deprecated 未使用
        $(document).on("click touchstart", "a.slide-out-close,div.slide-out-overlay", function(ev) {
                ev.preventDefault();
                if ($(".slide-out-close").hasClass("open")) {
                        $(".slide-out.open").removeClass("iframeArea");
                        $(".slide-out-widget,.contentBox").show();
                        $(".slide-out-widgetFrame").hide();
                        $(".slide-out-close").removeClass("open");
                        window.setTimeout(function() {
                                $(".slide-out-close").addClass("half");
                        }, 0);
                } else {
                        $(".slide-out-overlay").hide();
                        $(".slide-out").removeClass("open").removeClass("half");
                        if (g.INTERVAL_ID) {
                                window.clearInterval(g.INTERVAL_ID);
                        }
                        if (!$("div.slide-out-overlay:visible").length && !$("div.fullscreen-overlay:visible").length) {
                                g.INTERVAL_ID = window.setInterval(autoPlay, g.FIVE_SECOND);
                        }
                }
                $(".btn.iframeOpen.btn-default").show();
                $("div.slide-out-widgetFrame").empty();
                g.toggleBtn();
                return false;
        });
        $(document).on("click touchstart", ".glyphicon", function(ev) {
                ev.preventDefault();
                $(".group").animate({
                        width: g.SEARCH_TEXT_WIDTH
                }, g.SLIDE_SPEED).show();
                return false;
        });
        $(document).on("click touchstart", "div.container-fluid ul.nav li a", function(ev) {
                ev.preventDefault();
                if (!loadingNow()) {
                        return false;
                }
                if ($(this).parent().hasClass("opa-07")) {
                        return false;
                }
                var r = $(this).data("row");
                g.elem.row = 1;
                g.elem.col = r;
                g.elem.row_col = g.elem.row + "_" + g.elem.col;
                if (typeof g.DELAY_SECTION_ELEMENT[g.elem.row_col] !== "undefined") {
                        var sw = g.DELAY_SECTION_ELEMENT[g.elem.row_col];
                        $("#" + sw.industry + " div.clear").append(sw.content);
                        g.DELAY_SECTION_ELEMENT[g.elem.row_col] = undefined;
                }
                $("a.active").removeClass("active");
                $(this).addClass("active");
                window.setTimeout(function() {
                        var t = (g.elem.col - 1) * g.MOVE_LEFT;
                        moveWindow(t, 0);
                        window.setTimeout(function() {
                                beforeMoveValidationAll(g.elem.row, g.elem.col);
                        }, 0);
                }, 0);
                return false;
        });
        $(document).on("click touchstart", "div.section-nav", function(ev) {
                ev.preventDefault();
                if (!loadingNow()) {
                        return false;
                }
                var lf = "-=0";
                var tp = "-=0";
                if ($(this).hasClass("top") || $(this).hasClass("bottom")) {
                        g.elem.row = $(this).hasClass("top") ? (g.elem.row - 1) : (g.elem.row + 1);
                        tp = $(this).hasClass("top") ? "-=" + g.MOVE_TOP : "+=" + g.MOVE_TOP;
                } else if ($(this).hasClass("left") || $(this).hasClass("right")) {
                        g.elem.col = $(this).hasClass("left") ? (g.elem.col - 1) : (g.elem.col + 1);
                        lf = $(this).hasClass("left") ? "-=" + g.MOVE_LEFT : "+=" + g.MOVE_LEFT;
                        var r = $("a.active").data("row");
                        var s = "ul.nav li a[data-row='" + ($(this).hasClass("left") ? r - 1 : r + 1) + "']";
                        $("ul.nav li a.active").removeClass("active");
                        $(s).addClass("active");
                }
                g.elem.row_col = g.elem.row + "_" + g.elem.col;
                var p = (g.elem.row + 1) + "_" + 1;
                if (typeof g.DELAY_SECTION_ELEMENT[p] !== "undefined") {
                        var sw = g.DELAY_SECTION_ELEMENT[p];
                        $("#" + sw.industry + " div.clear").append(sw.content);
                        g.DELAY_SECTION_ELEMENT[p] = undefined;
                } else if (!_.contains(g.ALREADY_LOADED, p)) {
                        var ir = $("#" + g.elem.row_col).parent().parent().next();
                }
                moveWindow(lf, tp);
                window.setTimeout(function() {
                        beforeMoveValidationAll(g.elem.row, g.elem.col);
                }, 0);
                return false;
        });
        $(document).on("click touchstart", ".material-text-clear", function(ev) {
                ev.preventDefault();
                $(".material-text-input").val("");
                return false;
        });
        $(document).on("click touchstart", ".header-action-button", function(ev) {
                ev.preventDefault();
                if (!loadingNow()) {
                        return false;
                }
                if (g.INTERVAL_ID) {
                        window.clearInterval(g.INTERVAL_ID);
                }
                var sc = $("#" + g.elem.row_col);
                var rc = sc.attr("id");
                var ul = sc.find(".attribute .url").text();
                var nm = sc.find(".attribute .name").text();
                var cm = sc.find(".attribute .comment").text();
                if (rc !== g.row_col) {
                        var cy = sc.find("img").attr("class");
                        var ar = rc.split("_");
                        var l = (Number(ar[1]) - 1) * g.MOVE_LEFT;
                        var t = (Number(ar[0]) - 1) * g.MOVE_TOP;
                        $("a.active").removeClass("active");
                        $("li." + cy).find("a").addClass("active");
                        moveWindow(l, t);
                        window.setTimeout(function() {
                                beforeMoveValidationAll(Number(ar[0]), Number(ar[1]));
                        }, 0);
                }
                $(".fullscreen-overlay").css({
                        width: g.WINDOW_WIDTH + "px",
                        height: g.WINDOW_HEIGHT + "px"
                }).addClass("loading").fadeIn();
                window.setTimeout(function() {
                        $(".fullscreen-overlay header").fadeIn();
                        $(".fullscreen-overlay").removeClass("loading");
                        g.MARGIN_TOP = Number($(".fullscreen-header").css("height").replace("px", ""));
                        if (_.isEmpty(g.LOADING_ELEM[g.elem.row_col])) {
                                var im = document.createElement("iframe");
                                im.src = ul;
                                im.height = (g.WINDOW_HEIGHT - g.MARGIN_TOP);
                                im.width = (g.WINDOW_WIDTH + g.SCROLL_WIDTH);
                                im.style["margin-top"] = g.MARGIN_TOP + "px";
                                im.style["margin-left"] = -2 + "px";
                        } else {
                                var im = g.LOADING_ELEM[g.elem.row_col];
                        }
                        $(".fullscreen-title .small-title").text(nm);
                        $(".fullscreen-title .small-comment").text(cm);
                        $(".fullscreen-overlay").append(im);
                        window.setTimeout(function() {
                                $(".fullscreen-close").show();
                        }, 0);
                }, (g.INTERVAL_DELAY / 2));
                return false;
        });
        $(document).on("click touchstart", ".fullscreen-close", function(ev) {
                ev.preventDefault();
                $(".fullscreen-overlay,.fullscreen-overlay header").fadeOut();
                $(".fullscreen-overlay img").remove();
                $(".fullscreen-overlay").css({
                        width: 0 + "px",
                        height: 0 + "px"
                });
                window.setTimeout(function() {
                        g.toggleBtn();
                }, 0);
                return false;
        });
        g.INTERVAL_ID = window.setInterval(autoPlay, g.FIFTEEN_SECOND);
        $(document).on("mousemove touchstart", "body", function(ev) {
                ev.preventDefault();
                autoPlayReset(g.FIFTEEN_SECOND);
        });
        $(document).on("contextmenu", "body", function(ev) {
                //ev.preventDefault();
                //return false;
        });
        var __ = false;
        $(window).resize(function() {
                if (__ !== false) {
                        clearTimeout(__);
                }
                __ = setTimeout(function() {
                        location.href = location.href;
                }, g.SLIDE_SPEED);
        });
        $("html").swipe({
                swipeLeft: function(ev, dr, dis, dur, fin) {
                        if (loadingNow() && g.move.right) {
                                ev.preventDefault();
                                $("div.section-nav.right").click();
                                return false;
                        }
                },
                swipeRight: function(ev, dr, dis, dur, fin) {
                        if (loadingNow() && g.move.left) {
                                ev.preventDefault();
                                $("div.section-nav.left").click();
                                return false;
                        }
                },
                swipeUp: function(ev, dr, dis, dur, fin) {
                        if (loadingNow() && g.move.bottom) {
                                ev.preventDefault();
                                $("div.section-nav.bottom").click();
                                return false;
                        }
                },
                swipeDown: function(ev, dr, dis, dur, fin) {
                        if (loadingNow() && g.move.top) {
                                ev.preventDefault();
                                $("div.section-nav.top").click();
                                return false;
                        }
                },
                threshold: 0
        });
        $.getJSON(g.ORIGIN_URL, {}, function(data) {
                g.data = data;
                loadSpreadSheet();
        });
        optionallyEnableTouchUI();
        $("body").show();
        if (_.contains(g.PERMISSION_AGENT, g.getUA())) {
                $("div.section-nav").hide();
        }
        g.init();
});