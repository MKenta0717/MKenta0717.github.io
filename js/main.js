

{

  const cursol = document.querySelector('.cursol');
  const mask = document.querySelector('.mask');
  cursol.addEventListener('click',()=>{
    mask.classList.toggle('hidden');
    cursol.classList.toggle('close');
  });


  window.addEventListener('load', function () {
    viewSlide('.slide img');
  });

  function viewSlide(className, slideNo = -1)
  {
    let imgArray = document.querySelectorAll(className);
    if (slideNo >= 0) {
      //初回以外は現在のスライドを消す
      imgArray[slideNo].style.opacity = 0;
    }
    slideNo++;
    if (slideNo >= imgArray.length) {
      slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
    }
    imgArray[slideNo].style.opacity = 1;
    setTimeout(function(){viewSlide(className, slideNo);}, 7000);
  }
}

$('.item-slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 6,//スライドを画面に3枚見せる
  slidesToScroll: 2,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: false,//下部ドットナビゲーションの表示
  responsive: [
  {
    breakpoint: 800,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 3,//スライドを画面に1枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
  }
]
});

$(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
  
  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  
  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  
  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  
  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() { 
  //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
  
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();//スクロール値を定義
//header-imgの背景
$('.slide').css({
  transform: 'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
  top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
    });
});


// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight ){
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