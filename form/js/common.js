$(function(){
    $('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
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
        /*==========  headerの読み込みライン  ==========*/
        setTimeout(function() {
                $('.material-progress').fadeOut();
        }, 5000);
				
				// 画像の大きさ変更
				$(".point").mouseover(
						function(){
						$(this).closest(".map_item").not(":animated").animate({
								top : '-=2%',
								left : '-=2%',
						},100);
						$(this).not(":animated").animate({
									width : 100,
									height : 100,
							},100);
				});
				$(".point").mouseout(
						function(){
						$(this).closest(".map_item").not(":animated").animate({
								top : '+=2%',
								left : 	'+=2%',
						},100);
						$(this).not(":animated").animate({
									width : 80,
									height : 80,
							},100);	
				});
				$(".boxer").click(function() {
								$('.boxer').addClass('boxer');
				});

});
