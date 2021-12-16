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

// js
document.getElementById('option1').onchange = function () {

  let userChoose = document.getElementById('option1').value;
  let htmlClear = document.getElementById('option2').innerHTML = ' ';
  

  if (userChoose == '셔츠') {
    let element = document.createElement('option');

    let goodsSizeList = `10 95 100`;

    element.append(goodsSizeList);
  } else {
    

}

};