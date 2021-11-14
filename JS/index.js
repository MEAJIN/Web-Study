function alertOpen(text){
  document.getElementById('title').innerHTML = text;
  document.getElementById('alert').style.display = 'block';
}

function alertClose(close){
  document.getElementsByClassName('alert-box')[0].style.display = close;
}