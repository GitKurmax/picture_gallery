document.querySelector('#thumbs').addEventListener('click', function(e) {
  const pImg = document.querySelector('p img');
  const eventTarget = e.target.tagName;
  let link;

  e.preventDefault();

  if (eventTarget === "A") {
    link = e.target.getAttribute('href');
  }
  if (eventTarget === "IMG") {
    link = e.target.parentNode.getAttribute('href');
  }

  if (eventTarget === this.tagName) {
    return;
  }
  
  pImg.setAttribute('src', link);
});