// css를 활용한 모달창 애니메이션으로 열기
$('#jumbotron-btn').click(function () {
  $('.modal-box').css('transform', 'translateY(0px)');
  $('.modal-box').css('background', 'rgba(0, 0, 0, 0.5)');
});

// css를 활용한  모달창 애니메이션으로 닫기
$('#close').click(function () {
  $('.modal-box').css('transform', 'translateY(-1500px)');
  $('.modal-box').css('background', 'rgba(213, 213, 11, 0.5)');
});

// 모달창 배경 클릭으로 닫기
$('.modal-bg-close').click(function(e) {
  if ( e.currentTarget == e.target) {
    $('.modal-bg-close').css('transform', 'translateY(-1500px)');
  }
});

// 입력값이 정규식에 맞지 않으면 전송 막음

//조건

// email
// 핸드폰 번호와 마찬가지로 regEmail이라는 변수에 정규식을 작성해서 저장해 준다.
// 이메일 주소 시작은 숫자나 알파벳(소/대문자)로 시작한다.
// 이메일 첫째자리 뒤에는 -_.을 포함하여 들어올 수 있다.
// 도메인 주소 전에는 @가 들어와야 한다.
// .이 최소한 하나는 있어야 하며 마지막 마디는 2-3자리여야 한다.

// pw
// 가장 많이 사용되는 최소 8자리에 숫자, 문자, 특수문자 각각 1개 이상 포함

var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

var regpw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

$('form').on('submit', function (e) {
  if (regEmail.test($('#email').val()) == false) {
    e.preventDefault();
    $('#email-alert').show();
  } else {
    $('#email-alert').hide();
  }

  if (regpw.test($('#pw').val()) == false) {
    e.preventDefault();
    $('#pw-alert').show();
  }
});
