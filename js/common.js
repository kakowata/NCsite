$(function() {
        $('a[href^=#]').click(function() {
                var speed = 500;
                var href = $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top;
                $("html, body").animate({
                        scrollTop: position
                }, speed, "swing");
                return false;
        });
});
$(function() {
        var topBtn = $('#page-top');
        topBtn.hide();
        //スクロールが100に達したらボタン表示
        $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                        topBtn.fadeIn();
                } else {
                        topBtn.fadeOut();
                }
        });
        //スクロールしてトップ
        topBtn.click(function() {
                $('body,html').animate({
                        scrollTop: 0
                }, 500);
                return false;
        });
});
$(function() {
        /*==========  Slide Out  ==========*/
        $('.header-action-button').on('click', function(event) {
                event.preventDefault();
                $('.slide-out-overlay').fadeIn(250);
                $('.slide-out').addClass('open');
        });
        $('.slide-out-close').on('click', function(event) {
                event.preventDefault();
                $('.slide-out-overlay').fadeOut(250);
                $('.slide-out').removeClass('open');
        });
        $('.slide-out-overlay').on('click', function(event) {
                event.preventDefault();
                $('.slide-out-overlay').fadeOut(250);
                $('.slide-out').removeClass('open');
        });
        /*==========  cardclick  ==========*/
        $('.card-title').on('click', function(event) {
                event.preventDefault();
                $(this).parents().children('.card-reveal').removeClass('card-close');
                $(this).parents().children('.card-reveal').addClass('card-open');
        });
        $('.rev-title-wrap').on('click', function(event) {
                event.preventDefault();
                $(this).parents().children('.card-reveal').removeClass('card-open');
                $(this).parents().children('.card-reveal').addClass('card-close');
        });
        $(function() {
                var headerHight = 150; //ヘッダの高さ
                $('a[href^=#]').click(function() {
                        var href = $(this).attr("href");
                        var target = $(href == "#" || href == "" ? 'html' : href);
                        var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
                        $(" body").animate({
                                scrollTop: position
                        }, 550, "swing");
                        return false;
                });
        });
        /*==========  headerの読み込みライン  ==========*/
        setTimeout(function() {
                $('.material-progress').fadeOut();
        }, 5000);
				$('[data-toggle="popover"]').popover({
						trigger: 'hover', // click,hover,focus,manualを選択出来る
						html: true, // HTMLオプションをtrueにする
				});
});
$(".boxer").click(function() {
        $('.boxer').addClass('boxer');
});
