document.addEventListener('DOMContentLoaded', function () {
  let wrap = document.querySelector('.scroll-wrapper');
  let pages = document.querySelectorAll('.scroll-section').length;
  let scrolling = false;
  let currentPage = 1;

  function manageClasses() {
    wrap.classList.remove(...Array.from(wrap.classList).filter(cls => cls.startsWith('active-section')));
    wrap.classList.add('active-section' + currentPage);
  }

  function navigateUp() {
    if (currentPage > 1) {
      currentPage--;
      if ('transform' in document.body.style) {
        manageClasses();
      } else {
        wrap.style.transition = 'top 1s';
        wrap.style.top = '-' + ((currentPage - 1) * 100) + '%';
      }
    }
  }

  function navigateDown() {
    if (currentPage < pages) {
      currentPage++;
      if ('transform' in document.body.style) {
        manageClasses();
      } else {
        wrap.style.transition = 'top 1s';
        wrap.style.top = '-' + ((currentPage - 1) * 100) + '%';
      }
    }
  }

  document.addEventListener('wheel', function (e) {
    if (!scrolling) {
      if (e.deltaY < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    }
  })
});
