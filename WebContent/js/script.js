'use strict'

//ドロワーメニュー//
const toggler = document.querySelector(".toggle");

window.addEventListener("click", event => {
	if(event.target.className == "toggle" || event.target.className == "toggle") {
		document.body.classList.toggle("show-nav");
		document.getElementById("deleteconpo").classList.toggle("deleteclass")
	} else if (event.target.className == "overlay") {
		document.body.classList.remove("show-nav");
		document.getElementById("deleteconpo").classList.toggle("deleteclass")
	}
});

function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}
// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });

