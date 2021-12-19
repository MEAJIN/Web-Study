// Q. 하반기 실적을 채우기 위해 영업직원을 갈궈야합니다.

// 당신은 영업부서 부장님입니다.

// 부장님은 관리하는 영업직 직원들의 7~11월 판매 실적이 처참한 나머지

// 마지막 12월에는 남은 하반기 실적을 다 채우기 위해 직원들을 갈구기로 했습니다. 

// 하지만 직원마다 목표실적이 다 다르고, 7~11월 판매 실적이 다 다르기 때문에... 고민끝에

// (1) 7~11월 실적과 (2) 평균 월 목표 판매량을 입력하면 개인의 12월 목표 실적을 계산해주는 프로그램(함수)을 만들기로 합니다. 어떻게 만들면 될까요? 

// (여기서의 평균은 7~12월 6개월간의 평균으로 합시다)

// 조건 :-------------------------------------------------------------------------------------

// 함수의 첫 파라미터 자리엔 7~11월의 (5개월 간의) 판매실적어레이 (뭐 대충 [12, 5, 3, 6, 25] 이런 array)

// 둘째 파라미터 자리엔 이 직원이 목표로하고 있는 평균 월별 판매량이 들어가야합니다. (대충 30 이런거)

// 그리고 연산 결과(마지막 12월에 채워야할 목표실적)를 콘솔창에 출력해주어야합니다. 

// function 목표량계산기(판매실적어레이, 평균월별판매량) {

//   let salesPerformance = 판매실적어레이;
//   let monthAverageSales = 평균월별판매량;
//   let lossSum = 0; // 적자 합
//   let surplusSum = 0; // 흑자 합

//   for (var i = 0; i < salesPerformance.length; i++) {
//     if (salesPerformance[i] <= monthAverageSales) {
//       // 평균월판매량 - 전월 실적(적자) = 12월에 메꿔야 하는 실적(=차액)
//       let loss = monthAverageSales - salesPerformance[i];
//       lossSum = lossSum + loss;
//     } else {
//       // 전월 실적(흑자) - 평균월판매량 = lossSum을 메꿀 수 있는 초과 실적
//       let surplus = salesPerformance[i] - monthAverageSales;
//       surplusSum = surplusSum + surplus
//     }
//   }

//   let finalPerformance = (lossSum - surplusSum) + monthAverageSales;

//   console.log(`12월엔 ${finalPerformance}개를 팔아야합니다`)
// };


// 목표량계산기([11, 6, 2, 3, 5] , 10)

// --------------------------또는--------------------------

function 목표량계산기(판매실적어레이, 평균월별판매량){
  let salesPerformance = 판매실적어레이;
  let monthAverageSales = 평균월별판매량;
  let mayPerformance = 0;

  for (var i = 0; i < 5; i++){
    mayPerformance = mayPerformance + salesPerformance[i];
  }

  var DecemberPerformance =  6 * monthAverageSales - mayPerformance;
  console.log(`12월엔 ${DecemberPerformance}개를 팔아야합니다`)
}

목표량계산기([11, 6, 2, 3, 5] , 10)
