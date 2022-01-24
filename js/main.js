

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
}