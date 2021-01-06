// JavaScript Document

/*-----------------------
*入会btnのホバーで文字が変わる
------------------------*/

var windowHeight = $(window).height();
$(window).on('scroll',function (){
	var scrollInt = $(window).scrollTop();// スクロールしたとき
	if (scrollInt > windowHeight) {
		console.log('スクロールが超えた');
		
		if ($('.join_btn').css('width') == '300px') {
	$('.join_btn').animate({
		'width': '60px'
	}, 500); // W400→W60にCSSが変わる	
}
		
		
		$('.join_btn').css('width','60px');// W400→W60にCSSが変わる
		$('.join_btn').text('Join!');　　　//  980円→Joinにテキストが変わる
		
		
		$('.join_btn').hover(function (){　　　　// ホバー したら
			$('.join_btn').css('width','300px');  // W60→W400にCSSが変わる
			$('.join_btn').text('980円で１ヶ月お試し入会する');//Join→980円にテキストが変わる
		},function(){                           // スクロールを外したら
			$('.join_btn').css('width','60px');
			$('.join_btn').text('Join!');
});
		
		
		
	} else {
		console.log('スクロールが超えていない');
		
		if ($('.join_btn').css('width') == '60px') {
	$('.join_btn').animate({
		'width': '300px'
	}, 500); // W60→W400にCSSが変わる
}
		
			$('.join_btn').css('width','300px');  // W60→W400にCSSが変わる
			$('.join_btn').text('980円で１ヶ月お試し入会する');
		
		
		// htmlのまま（W400,980円お試し）
		
	}
});







/*-----------------------
*スクロールしたら変形する
------------------------


var windowHeight = $(window).height();

------------------------*/


