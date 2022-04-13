$(window).on("scroll", function() {
 estimate_top = $('.estimate').offset().top;
 estimate_height = $('.estimate').outerHeight();
 customer_bottom = $('.company_footer').outerHeight() + $('.company_footer').offset().top;
 

 
 console.log($(this).scrollTop()+$(this).outerHeight())
 if($(this).scrollTop()+$(this).outerHeight() - estimate_height >= customer_bottom){
   $('.estimate').addClass('not_active');
 }else if($('.estimate').hasClass('not_active')){
  $('.estimate').removeClass('not_active');
 }
});

// ハンバーガーメニュー開閉
$('.hub_menu').on('click',function(){
  $(this).toggleClass('is_open');
  $('.header_nav').toggleClass('is_open');
});


