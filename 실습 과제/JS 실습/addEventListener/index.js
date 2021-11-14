function alertOpen(text){
  document.getElementById('title').innerHTML = text;
  document.getElementById('alert').style.display = 'block';
}


document.getElementById('close').addEventListener('click', function(){
  document.getElementById('alert').style.display = 'none'
});
