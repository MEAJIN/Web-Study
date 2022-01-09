// 동적생성으로 만들어보기

// 정적데이터 =>이벤트 여부 상관 없이 값이 고정적
let state__products = [{
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

// 동적데이터 => 이벤트 발생 여부에 따라 값이 계속 바뀜
let dynamic__products = [{
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

let $title = document.getElementsByClassName('title');
let $price = document.getElementsByClassName('price');

// // 정적데이터 => html로 데이터바인딩
// function state__databinding() {
//   for (i = 0; i < state__products.length; i++) {
//     $title[i].innerHTML = state__products[i].title;
//     $price[i].innerHTML = '가격 : ' + state__products[i].price;
//   };
// }

// // 동적데이터 => html로 데이터바인딩
// function dynamic__databinding() {
//   for (i = 0; i < dynamic__products.length; i++) {
//     $title[i].innerHTML = dynamic__products[i].title;
//     $price[i].innerHTML = '가격 : ' + dynamic__products[i].price;
//   };
// }

// test
function dataBinding(product) {
  product.forEach(function (value, index) {
    $title[index].innerHTML = value.title
    $price[index].innerHTML = '가격 : ' + value.price
  })
}

function sort__sell() { // 가격순정렬
  let $sellBtn = document.getElementById('sell-btn');

  $sellBtn.addEventListener('click', function () {
    dynamic__products.sort(function (a, b) {
      return a.price - b.price
    })
    dataBinding(dynamic__products)
    reset(1)
  });
}

// function sortt__sell(z) { // 가격순정렬 > 5이후
//   let $sellBtn = document.getElementById('sell-btn');

//   $sellBtn.addEventListener('click', function () {
//     z.sort(function (a, b) {
//       return a.price - b.price
//     })
//     dataBinding(state__products)
//     reset(1)
//   });
//   }

function sort__text() { // 글자순정렬
  let $textBtn = document.getElementById('text-btn');

  $textBtn.addEventListener('click', function () {
    dynamic__products.sort(function (a, b) {
      return (a.title > b.title) - (a.title < b.title)
    })
    dataBinding(dynamic__products)
    reset(1)
  });
}



// 초기화
let resetBtn = document.getElementById('reset-btn');
let resetCard = document.getElementById('card');

function reset(x) {
  resetBtn.addEventListener('click', function () {
    if (x == 0) {
      resetCard.classList.remove('on', 'off')
      dataBinding(state__products)
    } else {
      dataBinding(state__products)
    }
  });
}



function filterButton() { // 6만원이하
  let fiveBtn = document.getElementById('five-btn');
  let card = document.getElementById('card');



  fiveBtn.addEventListener('click', function () {
    dynamic__products = state__products.filter(product => {
      return product.price <= 60000
    });

    for (i = 0; i < dynamic__products.length; i++) {
      for (j = 0; j < state__products.length; j++) {
        if (dynamic__products[i].price === state__products[j].price) {
          card.classList.add('on')
        } else {
          card.classList.add('off')
        }
      }
    }

    reset(0)
  });
}

// state__databinding() // 초기 화면 (정적 데이터)
// dynamic__databinding() // 동적 데이터
sort__sell() // 가격순정렬
sort__text() // 글자순정렬
filterButton() // 5만원이하
dataBinding(state__products)