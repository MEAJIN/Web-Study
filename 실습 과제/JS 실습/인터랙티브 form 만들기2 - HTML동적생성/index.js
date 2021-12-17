// jq
// $('#option1').on('change', function(){

//   let choose = $('#option1').val();
//   let htmlClear = $('#option2').html(' ');

//   if ( choose == '셔츠'){
//     htmlClear;

//     let goodsSizeList = `
//     <option>95</option>
//     <option>100</option>
//     <option>105</option>`;

//     $('#option2').append(goodsSizeList);
//   } else if (choose == '바지'){
//     htmlClear;

//     let goodsSizeList = `
//     <option>26</option>
//     <option>27</option>
//     <option>28</option>`;

//     $('#option2').append(goodsSizeList);
//   } else {
//     htmlClear;
//   }

// });

// dom
document.getElementById('option1').onchange = function () {

  // DocumentFragment 노드 생성
  let $fragment = document.createDocumentFragment();

  let $option1 = document.getElementById('option1');
  let $option2 = document.getElementById('option2');
  const clearing = $option2.textContent = '';

  if ($option1.value == '셔츠') {

    // 0. $option2 요소의 모든 자식을 단일 #text 노드로 대체 (innerHTML 보다 빠름)
    clearing;

    ['95', '100', '105'].forEach(text => {

      // 1. 요소 노드 생성
      let $option = document.createElement('option');

      // 2. 텍스트 노드 생성
      let textnode = document.createTextNode(text);

      // 3. 텍스트 노드를 $option 요소 노드의 자식으로 추가
      $option.appendChild(textnode);

      // 4. $option 요소 노드를 DocumentFragment 노드의 마지막 자식 노드로 추가
      $fragment.appendChild($option)

      // 5. DocumentFragment 노드를 $option 요소 노드의 마지막 자식 노드로 추가
      $option2.appendChild($fragment);
    });
  } else if ($option1.value == '바지') {

    clearing;

    ['26', '27', '28'].forEach(text => {

      let $option = document.createElement('option');

      let textnode = document.createTextNode(text);

      $option.appendChild(textnode);

      $fragment.appendChild($option)

      $option2.appendChild($fragment);
    });
  } else {
    remove(x)
  }
};

// $option2의 자식 노드를 전부 삭제
function remove(x) {
  while (x.hasChildNodes()) {
    x.removeChild(cell.firstChild);
  }
}

