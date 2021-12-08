// 탭기능

for (let i = 0; i < $('.tab-button').length; i++) {
  $('.tab-button').eq(i).click(function () {
    $('.tab-button').removeClass('active');
    $('.tab-button').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-button').eq(i).addClass('show');
  });
}
