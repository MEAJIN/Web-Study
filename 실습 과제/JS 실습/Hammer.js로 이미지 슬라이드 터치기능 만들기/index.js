// 캐러셀
var img = 1;
var min = 1;
var max = 3;

// 오른쪽 버튼
$('.slide-right').click(function () {
  if (img < max) {
    $('.slide-container').css('transform', 'translateX(-' + img + '00vw)');
    img = img + 1;
  }
});

// 왼쪽 버튼
$('.slide-left').click(function () {
  if (img > min) {
    $('.slide-container').css('transform', 'translateX(-' + (img - 2) + '00vw)');
    img = img - min;
  }
});


/////

// 요소 선택
let img1 = document.querySelectorAll('.slide-box img')[0];

// 어떤 요소에 터치 기능을 넣을 건지 지정해주고
let manager = new Hammer.Manager(img1);

// 지정된 요소에 사용할 이벤트를 추가해준다
manager.add(new Hammer.Pan({
  //threshold는 이벤트 발동되기 전까지의 역치값 
  threshold: 0
}));

//이미지1이 pan 되었을 때 실행할 코드 
manager.on('pan', function (e) {
  // e.deltaX는 x축으로 드래그한 거리를 알려주는 함수
  // 왼쪽으로 슬라이드 했을 때..
  if (e.deltaX < 0) {
    $('.slide-container').css('transform', 'translateX(' + e.deltaX + 'px)');

    // 왼쪽으로 슬라이드 시, 마우스를 놓았을 때 사진이 다음 컷으로 넘어감
    if (e.isFinal) { // 터치가 끝났음을 알려주는 이벤트
      $('.slide-container').addClass('transforming');
      $('.slide-container').css('transform', 'translateX(-' + img + '00vw)');
      setTimeout(function () {
        $('.slide-container').removeClass('transforming');
      }, 1000)
    }
  }
});
