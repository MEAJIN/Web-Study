// 캐러셀
var img = 1;
var min = 1;
var max = 3;

$('.slide-right').click(function () {
  if (img < max) {
    $('.slide-container').css('transform', 'translateX(-' + img + '00vw)');
    img = img + 1;
  }
});


$('.slide-left').click(function () {
  if (img > min) {
    $('.slide-container').css('transform', 'translateX(-' + (img - 2) + '00vw)');
    img = img - min;
  }
});