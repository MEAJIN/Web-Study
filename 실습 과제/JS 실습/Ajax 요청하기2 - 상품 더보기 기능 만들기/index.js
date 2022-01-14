$('.btn-danger').click(function(){
  $.ajax({ 
    url : 'https://codingapple1.github.io/data.json',
    type : 'GET'
  }).done(function(데이터){
    $('.card-title').html(데이터.model);
    $('.card-img-top').attr('src', 데이터.img);
    $('.card-text').html(데이터.price);
  });
});