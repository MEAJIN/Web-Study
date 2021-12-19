// 정적 : 이미 생성 되어 있는 것 (고정적, 불변)
// 동적 : 그때 그때 생성하는 것 (유동적, 변경가능)
// 동적 예) 어떤 행위를 했을 때 그 행위에 따라 a를 생성할 수 도, b를 생성할 수 도 있음

// jq for문---------------------------------------------------------------
// $('#option1').on('change', function(){

//   let choose = $('#option1').val();
//   let htmlClear = $('#option2').html(' ');

//   var shirtSize = [90,95,100,105,110];
//   var pantsSize = [26,28,30,32,34,36];

//   if ( choose == '셔츠'){
    
//     htmlClear;

//     for (var i = 0; i < shirtSize.length; i++) {
//       var shirtSizeList = `<option>${shirtSize[i]}</option>`;
//       $('#option2').append(shirtSizeList);
//     }

//   } else if (choose == '바지'){
    
//     htmlClear;

//     for (var i = 0; i < pantsSize.length; i++) {
//       var pantsSizeList = `<option>${pantsSize[i]}</option>`;
//       $('#option2').append(pantsSizeList);
//     }

//   } else {
    
//     htmlClear;
    
//   }

// });

// jq foreach문---------------------------------------------------------------
$('#option1').on('change', function(){

  let choose = $('#option1').val();
  let htmlClear = $('#option2').html(' ');

  var shirtSize = [90,95,100,105,110];
  var pantsSize = [26,28,30,32,34,36];

  if ( choose == '셔츠'){
    
    htmlClear;

    // i는 저장된 데이터
    shirtSize.forEach(function(i) {
      var shirtSizeList = `<option>${i}</option>`;
      $('#option2').append(shirtSizeList);
    });

  } else if (choose == '바지'){
    
    htmlClear;

    pantsSize.forEach(function(i) {
      var pantsSizeList = `<option>${i}</option>`;
      $('#option2').append(pantsSizeList);
    });

  } else {
    
    htmlClear;
    
  }

});

// dom ------------------------------------------------------------------
// document.getElementById('option1').onchange = function () {

//   // DocumentFragment 노드 생성
//   let $fragment = document.createDocumentFragment();

//   let $option1 = document.getElementById('option1');
//   let $option2 = document.getElementById('option2');
//   const clearing = $option2.textContent = '';

//   if ($option1.value == '셔츠') {

//     // 0. $option2 요소의 모든 자식을 단일 #text 노드로 대체 (innerHTML 보다 빠름)
//     clearing;

//     ['95', '100', '105'].forEach(text => {

//       // 1. 요소 노드 생성
//       let $option = document.createElement('option');

//       // 2. 텍스트 노드 생성
//       let textnode = document.createTextNode(text);

//       // 3. 텍스트 노드를 $option 요소 노드의 자식으로 추가
//       $option.appendChild(textnode);

//       // 4. $option 요소 노드를 DocumentFragment 노드의 마지막 자식 노드로 추가
//       $fragment.appendChild($option)

//       // 5. DocumentFragment 노드를 $option 요소 노드의 마지막 자식 노드로 추가
//       $option2.appendChild($fragment);
//     });
//   } else if ($option1.value == '바지') {

//     clearing;

//     // text는 배열 안에 있는 하나의 데이터들
//     ['26', '27', '28'].forEach(text => {

//       let $option = document.createElement('option');

//       let textnode = document.createTextNode(text);

//       $option.appendChild(textnode);

//       $fragment.appendChild($option)

//       $option2.appendChild($fragment);
//     });
//   } else {
//     remove(x)
//   }
// };

// // $option2의 자식 노드를 전부 삭제
// function remove(x) {
//   while (x.hasChildNodes()) {
//     x.removeChild(cell.firstChild);
//   }
// }