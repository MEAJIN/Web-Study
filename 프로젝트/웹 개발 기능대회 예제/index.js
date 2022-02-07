$(document).ready(function () {
  첫로드시실행할거();
});

function 첫로드시실행할거() {

  var products = [];

  //데이터 가져와서 박아넣는기능 
  getProducts();
}

//json 데이터 ajax로 가져오고 데이터바인딩
function getProducts() {
  $.get('resources1/db.json').done(function (data) {
    data.products.forEach(function (상품, i) {
      appendProduct(상품, i)
    })
  });
}

//상품 박아넣는 코드
function appendProduct(product, index) {
  var newItem = $(`
  <div class="card col-4 p-0" data-index="${index}">
  <img src="resources1/${product.photo}" class="card-img-top" alt="${product.product_name}"
    title="${product.product_name}">
  <div class="card-body">
    <h5 class="card-title product-name">${product.product_name}</h5>
    <p class="card-text brand-name">${product.brand_name}</p>
  </div>
  <div class="card-footer">
    <small class="text-muted price">${product.price}</small>
  </div>
</div>`)

  $('#product-list').append(newItem);
};


// 검색 기능 //

// 검색창에 마우스 올리면 테투리 생성
$("#search").mouseenter(function () {
  $('#search').css('box-shadow', '0 0 3px 3px rgba(62, 123, 216, 0.61)');
});

// 마우스가 검색창을 벗어나면 테투리 없앰
$("#search").mouseleave(function () {
  $('#search').css('box-shadow', 'none');
});