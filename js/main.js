

{
  const header = document.querySelector('#header');

  window.addEventListener('scroll',()=>{
    console.log(window.pageYOffset)
    console.log(window.pageYOffset)
    if(window.pageYOffset > 0){
      header.classList.add('fixed');
    }else{
      header.classList.remove('fixed');
    }
    
  });

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