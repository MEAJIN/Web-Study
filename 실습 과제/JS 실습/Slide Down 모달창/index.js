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
$('#jumbotron-btn').click(function(){
  $('.modal-box').show().animate({ marginTop : '0px'}, 500);
});

// 모달창 애니메이션으로 닫기
$ ('#close').click(function(){
  $('.modal-box').animate({ marginTop : '-1500px'}, 500).hide();
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
$('form').on('submit', function (e) {
  if ($('#email').val() == '') {
    e.preventDefault();
    $('#email-alert').show();
  }

  if ($('#pw').val() == '') {
    e.preventDefault();
    $('#pw-alert').show();
  }
});

// 사이드 메뉴 열기
$('#show-Menu').click(function(){
  $('.left-menu').animate({ marginLeft : '0px'}, 500);
});

// 사이드 메뉴 닫기
$('#menu-close').click(function(){
  $('.left-menu').animate({ marginLeft : '-300'}, 500);
});