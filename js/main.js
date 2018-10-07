var $backToTop = $('.arrow');

$backToTop.on('click', function (event) {
  event.preventDefault()

  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
});
