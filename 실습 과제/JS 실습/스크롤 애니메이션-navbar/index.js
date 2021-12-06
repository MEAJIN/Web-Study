// 스크롤 애니메이션
// 스크롤바를내리면 nav-menu의 bacground가 white;로 변함

// jquery
// $(window).on('scroll', function () {
//   // 스크롤이 50px 보다 많이 내려갔을 때 실행
//   if ($(window).scrollTop() > 50) {
//     $('.nav-menu').addClass('nav-black');
//   }
//   if ($(window).scrollTop() == 0) {
//     $('.nav-menu').removeClass('nav-black');
//   }
// });

//javascript
document.addEventListener('scroll', function() {
  var nowScroll = document.documentElement.scrollTop;
  if (nowScroll > 100) {
    document.getElementById('nav-menu').classList.add('nav-black');
  }
  if (nowScroll == 0) {
    document.getElementById('nav-menu').classList.remove('nav-black');
  }
})
