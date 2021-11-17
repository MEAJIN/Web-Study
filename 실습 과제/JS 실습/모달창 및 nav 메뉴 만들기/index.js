// 모달창 열기1
// document.getElementById('jumbotron-btn').addEventListener('click', function(){
//   document.getElementsByClassName('modal-box')[0].style.display = 'block'
// });

// 모달창 열기2
// $('#jumbotron-btn').on('click', function(){
//   $('.modal-box').show()
// });

// 모달창 열기3
$('#jumbotron-btn').on('click', function(){
  $('.modal-box').css('display', 'block')
});

// 모달창 열기4
// $('#jumbotron-btn').on('click', function(){
//   $('.modal-box').fadeIn()
// });

// 모달창 닫기
$('#close').on('click', function(){
  $('.modal-box').css('display', 'none')
});

// nav-서브메뉴 열기/닫기
$('#slidedown').click(function(){
  $('.nav-sub').slideToggle()
});