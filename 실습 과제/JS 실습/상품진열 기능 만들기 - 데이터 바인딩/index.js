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


let test = ['id','price','tilte'];
let $tilte = document.getElementsByClassName('title');
let $price = document.getElementsByClassName('price');

for (i = 0; i < products.length; i++) {
  $tilte[i].innerHTML = products[i].title;
  $price[i].innerHTML = '가격 : ' + products[i].price;
};