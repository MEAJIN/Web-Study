let textTag = document.querySelector('h1');
let text = textTag.innerHTML;

$('button').click(function () {
  textTag.innerHTML = '';

  for (let i = 0; i < text.length; i++)
    setTimeout(function () {
      textTag.innerHTML = textTag.innerHTML + text[i];
    }, 500 * i);
});