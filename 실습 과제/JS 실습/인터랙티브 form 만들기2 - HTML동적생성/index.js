// jq
$('#option1').on('change', function(){

  let choose = $('#option1').val();

  if ( choose == '셔츠'){
    let 템플릿 = `
    <option>95</option>
    <option>100</option>
    <option>105</option>`;
    
    $('#option2').html(' ');
    $('#option2').append(템플릿);
  } else {
    let 템플릿 = `
    <option>26</option>
    <option>27</option>
    <option>28</option>`;
    
    $('#option2').html(' ');
    $('#option2').append(템플릿);
  }

});

// js
// document.getElementById('option1').onchange = function () {

//   let userChoose = document.getElementById('option1').value;
//   let element = document.getElementById('size-select');

//   if (userChoose == '셔츠') {
//     element.style.display = 'block';
//   } else {
//     element.style.display = 'none';
//   }

// };