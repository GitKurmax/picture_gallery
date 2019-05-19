document.querySelector('#thumbs').addEventListener('click', function(e) {
  const largeImg = document.querySelector('#largeImg');
  const pImg = document.querySelector('p img');
  let link;

  if (e.target.tagName === "A") {
    link = e.target.getAttribute('href');
  }
  if (e.target.tagName === "IMG") {
    link = e.target.parentNode.getAttribute('href');
  }

  if (e.target.tagName === this.tagName) {
    return;
  }
  
  pImg.setAttribute('src', link);
  event.preventDefault();
});