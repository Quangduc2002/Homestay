$(document).ready(function(){
    $('.english').slick({
        slidesToShow: 3,
        infinite: false,
        prevArrow: '<div  class="slick-prev  fas-left fas-left-TA"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div  class="slick-next fas-right fas-right-TA"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1, //di chuyển nhiều ảnh 1 lúc 
                infinite: true,
              }
            }
        ]
    });
});