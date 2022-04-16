//javascript--------------------------

//スクロールしたらheaderの色を変える
//headerにchange-colorクラスをつけ色を指定
let jsHeader = document.querySelector('.js-header');
let jsMv = document.querySelector('.js-mv');
let mv_h = jsMv.clientHeight;
 
window.addEventListener('scroll', () => {
  if (window.scrollY >= mv_h) {
    jsHeader.classList.add('change-color');
  }
  if (window.scrollY < mv_h) {
    jsHeader.classList.remove('change-color');
  }
})

// swiper----------------------------------------------
let slider1 = new Swiper ('.js-mv-slider', {
  //自動スライド
      autoplay: {
        delay: 2000,
      },
   //切り替えエフェクトの指定
    //slide  fade  cube coverflow  flip
    effect: "fade",
   
    //切り替わる速さ
    speed: 4000,
    
    //ループの有無
    loop: true,
  
    // If we need pagination
    pagination: {
     el: '.swiper-pagination',
      clickable : true,
     },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
     },
});


//jQuery--------------------------------
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});

