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

$sellBtn.addEventListener('click', function(){
  products.sort(function(a,b){
    return a.price - b.price
  })
  
  set()
});

// 글자순정렬--------------------------------------------
let $textBtn = document.getElementById('text-btn');

$textBtn.addEventListener('click', function(){
  products.sort(function(a,b){
    return (a.title > b.title) - (a.title < b.title)
  })
  set()
  });

// -------------------------------------------------- //

let document.getElementById

// 5만원 이하 상품 정렬
const fiveWonDown = products.filter(function(a){
  return a.price <= 50000
})