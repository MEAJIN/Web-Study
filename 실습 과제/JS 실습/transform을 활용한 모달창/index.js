// css를 활용한 모달창 애니메이션으로 열기
$('#jumbotron-btn').click(function(){
  $('.modal-box').css('transform', 'translateY(0px)');
  $('.modal-box').css('background', 'rgba(0, 0, 0, 0.5)');
});

// css를 활용한  모달창 애니메이션으로 닫기
$ ('#close').click(function(){
  $('.modal-box').css('transform', 'translateY(-1500px)');
  $('.modal-box').css('background', 'rgba(213, 213, 11, 0.5)');
});