///////////////////////
// 첫 로딩의 시작 점 //
//////////////////////

$(document).ready(function () {
  첫로드시실행할거();
});

function 첫로드시실행할거() {

  var products = [];

  //데이터 가져와서 박아넣는기능 
  getProducts();
  search();
}


///////////////////
// 데이터 바인딩 //
//////////////////

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
}

///////////////
// 검색 기능 //
// text() 메서드 - DOM 객체의 textContent 속성을 참조하며 단순 텍스트 요소만을 리턴한다.
// html() 메서드 - DOM 객체의 innerHTML 속성을 참조하며 텍스트를 포함한 태그까지도 리턴한다.
//////////////

// 각 클래스를 변수에 저장
function search() {
  this.keyword = document.querySelector('input[name = "search"]');
  this.form = document.querySelector('.search');
  engine();
}

// 검색창에 입력 받은 값 저장
function engine() {
  this.form.addEventListener('submit', e => {
    e.preventDefault(); // form태그 기본 작동 제한 (서버로데이터전송)
    let keyword = this.keyword.value;
    onSearch(keyword);
  });
}

// 
function onSearch(keyword) {

  $('#product-list > div').each(function () {
    const productName = $(this).find('.product-name');
    const brandName = $(this).find('.brand-name');

    if (keyword === '') {
      $(this).show();
      return;
    } else {
      $(this).hide();
    }

    if (productName.text().indexOf(keyword) !== -1) {
      const kwHighlight = productName.text().replace(keyword, `<span class="highlight">${keyword}</span>`);
      productName.html(kwHighlight);
      $(this).css('display', 'block');
    } else {

    }
  
    if (brandName.text().indexOf(keyword) !== -1) {
      const kwHighlight = brandName.text().replace(keyword, `<span class="highlight">${keyword}</span>`);
      brandName.html(kwHighlight);
      $(this).css('display', 'block');
    } else {
      
    }
  });


  // 검색창에 마우스 올리면 테투리 생성
  $(".keyword").mouseenter(function () {
    $('.keyword').css('box-shadow', '0 0 3px 3px rgb(143, 188, 255)');
  });

  // 마우스가 검색창을 벗어나면 테투리 없앰
  $(".keyword").mouseleave(function () {
    $('.keyword').css('box-shadow', 'none');
  });
}

