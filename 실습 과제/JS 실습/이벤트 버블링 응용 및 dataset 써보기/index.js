// 탭기능

// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button').eq(i).click(function () {
//     tabOpen(i)
//   });
// }

// 함수로 축약하기
function tabOpen(tabNum){
  $('.tab-button').removeClass('active');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(tabNum).addClass('active');
  $('.tab-content').eq(tabNum).addClass('show');
}

// js (dataset 사용 전)
// $('.list').click(function(e){ 
//   if ( e.target == document.querySelectorAll('.tab-button')[0] ){
//     tabOpen(0)
//   } else if ( e.target == document.querySelectorAll('.tab-button')[1] ){
//     tabOpen(1)
//   } else {
//     tabOpen(2)
//   }
// });

// js (dataset 사용 후 값 뽑기)
// document.querySelectorAll('.tab-button')[0].dataset.id;

// js (dataset 적용해서 탭 기능 만들기)
document.querySelector('.list').addEventListener('click', function(e) {
  tabOpen(e.target.dataset.tab)
});


// jquery (dataset 적용해서 탭 기능 만들기)
// $('.list').click(function(e) {
//   tabOpen(e.target.dataset.tab)
// });



