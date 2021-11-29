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
  $('.modal-box').animate({ marginTop : '-1500px'}, 500);
});
