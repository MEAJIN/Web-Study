// 캐러셀
// var img = 1;
// var min = 1;
// var max = 3;

// $('.slide-right').click(function () {
//   if (img < max) {
//     $('.slide-container').css('transform', 'translateX(-' + img + '00vw)');
//     img = img + 1;
//   }
// });


// $('.slide-left').click(function () {
//   if (img > min) {
//     $('.slide-container').css('transform', 'translateX(-' + (img - 2) + '00vw)');
//     img = img - min;
//   }
// });


//////

let img1 = document.querySelectorAll('.slide-box img')[0];

// 어떤 요소에 터치 기능을 넣을 건지 지정해주고
let manager = new Hammer.Manager(img1);
// 지정된 요소에 사용할 이벤트를 추가해준다
manager.add(new Hammer.Pan({
  threshold: 0
}));
//
manager.on('pan', function (e) {
  console.log(e.deltaX)

  // 왼쪽으로 슬라이드 했을 때..
  if (e.deltaX < -1) {
    $('.slide-container').css('transform', 'translateX(' + e.deltaX + 'px)');
    
  }
});