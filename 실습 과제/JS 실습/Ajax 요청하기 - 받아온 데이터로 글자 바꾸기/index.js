$('#click').click(function () {
  $.ajax({
    url: 'https://codingapple1.github.io/hello.txt',
    type: 'GET'
  }).done(function (success) {
    $('#hello').html(success)
  });
});