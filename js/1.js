// JavaScript Document
/*-----------------------
*ハンバーガーメニュー
------------------------*/
$('.btn-trigger').on('click', function () {
	$(this).toggleClass("active");　//ハンバーガーの開閉
	$(".header_nav").fadeToggle(600); //メニューの表示の開閉
	 });
/*-----------------------
*ページトップbtn
------------------------*/
$(".btn_pageTop").on("click",function(){
	$("html,body").animate({scrollTop:0},1000);
});

/*-----------------------
*bxsrlider
------------------------*/
  $(function() {
    $('.bxslider').bxSlider({
			mode: 'fade',
			pagerType: 'short',
			pagerShortSeparator: ' - ',
			randomStart: true,
			prevSelector: '.custom-prev',
       nextSelector: '.custom-next',
			auto: true,
    });
});

/*-----------------------
*タブ切替え PC
------------------------*/
$('.js-tab-item').on('click', function () {
      let tabIndex = $(this).index('.js-tab-item');
      $('.js-tab-item').removeClass('active');
      $(this).addClass('active');
      $('.c-tab-contents').removeClass('active');
      $('.c-tab-contents').eq(tabIndex).addClass('active');
    });
	
/*-----------------------
*Q&A部分
------------------------*/
$('.Q_box').on('click',function(){
	$(this).next().slideToggle(400);
});

