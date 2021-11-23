// 모달창 열기1
// document.getElementById('jumbotron-btn').addEventListener('click', function(){
//   document.getElementsByClassName('modal-box')[0].style.display = 'block'
// });

// 모달창 열기2
// $('#jumbotron-btn').on('click', function(){
//   $('.modal-box').show()
// });

// 모달창 열기3
// $('#jumbotron-btn').on('click', function () {
//   $('.modal-box').fadeIn()
// });

// 모달창 열기4
// $('#jumbotron-btn').on('click', function(){
//   $('.modal-box').fadeIn()
// });

// 모달창 닫기
// $('#close').on('click', function () {
//   $('.modal-box').css('display', 'none')
// });

// 모달창 애니메이션으로 열기
// $('#jumbotron-btn').click(function(){
//   $('.modal-box').show().animate({ marginTop : '0px'}, 500);
// });

// 모달창 애니메이션으로 닫기
// $ ('#close').click(function(){
//   $('.modal-box').animate({ marginTop : '-1500px'}, 500).hide();
// });

// css를 활용한 모달창 애니메이션으로 열기
$('#jumbotron-btn').click(function () {
  $('.modal-box').css('transform', 'translateY(0px)');
});

// css를 활용한  모달창 애니메이션으로 닫기
$('#close').click(function () {
  $('.modal-box').css('transform', 'translateY(-1500px)');
  $('.modal-box').css('background', 'rgba(213, 213, 11, 0.5)');
});


// input 안의 값이 안녕 일때 모달창 활성
// $('#jumbotron-btn').on('click', function () {
//   if ($('#test-input').val() == '안녕') {
//     $('.modal-box').fadeIn()
//   }
// });

// nav-서브메뉴 열기/닫기
$('#slidedown').click(function () {
  $('.nav-sub').slideToggle()
});

// 폼을 전송할 때 이메일 input안의 값이 공백인 경우, 전송을 막는 기능을 추가
// $('form').on('submit', function (e) {
//   if ($('#email').val() == '') {
//     e.preventDefault();
//     $('#email-alert').show();
//   }

//   if ($('#pw').val() == '') {
//     e.preventDefault();
//     $('#pw-alert').show();
//   }
// });

// 입력값이 정규식에 맞지 않으면 전송 막음

//조건

// email
// 핸드폰 번호와 마찬가지로 regEmail이라는 변수에 정규식을 작성해서 저장해 준다.
// 이메일 주소 시작은 숫자나 알파벳(소/대문자)로 시작한다.
// 이메일 첫째자리 뒤에는 -_.을 포함하여 들어올 수 있다.
// 도메인 주소 전에는 @가 들어와야 한다.
// .이 최소한 하나는 있어야 하며 마지막 마디는 2-3자리여야 한다.

// pw
// 가장 많이 사용되는 최소 8자리에 숫자, 문자, 특수문자 각각 1개 이상 포함

var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

var regpw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

$('form').on('submit', function (e) {
  if (regEmail.test($('#email').val()) == false) {
    e.preventDefault();
    $('#email-alert').show();
  } else {
    $('#email-alert').hide();
  }

  if (regpw.test($('#pw').val()) == false) {
    e.preventDefault();
    $('#pw-alert').show();
  }
});

// 사이드 메뉴 열기
$('#show-Menu').click(function () {
  $('.left-menu').animate({
    marginLeft: '0px'
  }, 500);
});

// 사이드 메뉴 닫기
$('#menu-close').click(function () {
  $('.left-menu').animate({
    marginLeft: '-300'
  }, 500);
});

// 캐러셀

var img = 1;
var min = 1;
var max = 3;

$('.slide-right').click(function () {
  $('.slide-container').css('transform', 'translateX(-' + img + '00vw)');

  if (img < max) {
    img = img + 1;
  }
});


$('.slide-left').click(function () {
  $('.slide-container').css('transform', 'translateX(-' + (img - 2) + '00vw)');

  if (img > 1) {
    img = img - 1;
  }
});