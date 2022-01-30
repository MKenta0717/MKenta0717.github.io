

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