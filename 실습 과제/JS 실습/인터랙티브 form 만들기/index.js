// jq
// $('#option1').on('change', function(){

//   let choose = $('#option1').val();

//   if ( choose == '셔츠'){
//     $('.size-select').show();
//   } else {
//     $('.size-select').hide();
//   }

// });

// js
document.getElementById('option1').onchange = function () {

  let userChoose = document.getElementById('option1').value;
  let element = document.getElementById('size-select');

  if (userChoose == '셔츠') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }

};