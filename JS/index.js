var products = [{
    price: 70000,
    title: 'Blossom Dress'
  },
  {
    price: 50000,
    title: 'Springfield Shirt'
  },
  {
    price: 60000,
    title: 'Black Monastery'
  }
]

// 변수 선언
let $tilte = document.getElementsByClassName('title');
let $price = document.getElementsByClassName('price');

// 데이터바인딩
function set() {
  for (i = 0; i < products.length; i++) {
    $tilte[i].innerHTML = products[i].title;
    $price[i].innerHTML = '가격 : ' + products[i].price;
  };
}

// 모든 자식 노드 삭제 함수
function remove(x) {
  while (x.hasChildNodes()) {
    x.removeChild(cell.firstChild);
  }
}

// 기본정렬----------------------------------------------
set()

// 가격순정렬--------------------------------------------
let $sellBtn = document.getElementById('sell-btn');

$sellBtn.addEventListener('click', function () {
  products.sort(function (a, b) {
    return a.price - b.price
  })

  set()
});

// 글자순정렬--------------------------------------------
let $textBtn = document.getElementById('text-btn');

$textBtn.addEventListener('click', function () {
  products.sort(function (a, b) {
    return (a.title > b.title) - (a.title < b.title)
  })
  set()
});

// -------------------------------------------------- //

let fiveBtn = document.getElementById('five-btn');
let card = document.getElementsByClassName('card');

fiveBtn.addEventListener('click', function () {

  // 5만원 이하 상품 필터링
  let fiveWonDown = products.filter(function (a) {
    return a.price <= 50000
  });


  for (i = 0; i < products.length; i++) {
    for (j = 0; j < fiveWonDown.length; j++) {
      if (fiveWonDown[j].price =! products[i].price) {
        // #card 싹다 지움
        for (i = 0; i < card.length; i++) {
          card[i].style.display = 'none'; 
        }
      }
    }
  }

});




function get() {
  for (i = 0; i < fiveWonDown.length; i++) {
    $tilte[i].innerHTML = fiveWonDown[i].title;
    $price[i].innerHTML = '가격 : ' + fiveWonDown[i].price;
  };
}

get()