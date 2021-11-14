function alertOpen(text){
  document.getElementsByClassName('alert-box')[0].style.display = 'block';
  document.getElementsByClassName('alert-box')[0].innerHTML = text;
}

function alertClose(close){
  document.getElementById('alert-box').style.display = close;
}