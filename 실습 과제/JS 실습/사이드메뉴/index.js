// 사이드 메뉴 열기
$('#show-Menu').click(function(){
  $('.left-menu').animate({ marginLeft : '0px'}, 500);
});

// 사이드 메뉴 닫기
$('#menu-close').click(function(){
  $('.left-menu').animate({ marginLeft : '-300'}, 500);
});