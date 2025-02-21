// header fixed при скролле
let body = document.querySelector('body')
let header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop >= header.offsetHeight) {
    header.classList.add("fixed")
    body.style.marginTop = `${header.offsetHeight}px`
  } else {
    header.classList.remove("fixed")
    body.style.marginTop = `0px`
  }
})

document.addEventListener('DOMContentLoaded', () => {
  let navPage = document.querySelector('.header-nav-bottom');
  let navMobile = document.querySelector('.header-nav-mobile');
  let navToggle = document.querySelector('.burger');
  let navToggleMobil = document.querySelector('.burger-mobil')
  let navClosed = document.querySelector('.button-closed');
  let navFooter = document.querySelector(".footer-navigation");
  let navChildrenItems = document.querySelectorAll('.nav-accordeon');

    /* Hover button */

  let btnHovers = document.querySelectorAll('.button');

  btnHovers.forEach((btn)=> {

    let span = btn.querySelector('.button-bg');
    btn.addEventListener('mouseenter', function(e) {
      let parentOffset = btn.getBoundingClientRect(),
          relX = e.clientX - parentOffset.left,
          relY = e.clientY - parentOffset.top;

      span.style.top = relY + 'px';
      span.style.left = relX + 'px';
    });

    btn.addEventListener('mouseout', function(e) {
      let parentOffset = btn.getBoundingClientRect(),
          relX = e.clientX - parentOffset.left,
          relY = e.clientY - parentOffset.top;


      span.style.top = relY + 'px';
      span.style.left = relX + 'px';
    });
  })

// Menu
  //скрытие десктопного меню, которое в активном состоянии при разрешении экрана менее 768px
  function handleResize() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        navPage.classList.remove('active');
      }
    });
  }
//скрытие мобильного меню, которое в активном состоянии при разрешении экрана более 768px
  function handleResizeMobile() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navMobile.classList.remove('active');
      }
    });
  }

  // Активная вкладка
  const links = header.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {

    if (links[i].href === window.location.href) {
      links[i].classList.add('current-item');
    }
  }

  if (navPage) {

    navToggle.addEventListener('click', function () {
      if (navPage.classList.contains('active')) {
        navPage.classList.remove('active');
      }
      else {
        handleResize()
        navPage.classList.add('active');
      }
    });

    navToggleMobil.addEventListener('click', () => {
      navMobile.classList.add('active');
      handleResizeMobile()
    })

    navClosed.addEventListener('click', () => {
      navMobile.classList.remove('active');
    })

  }

  // Menu-desktop
  if(document.querySelector('.header-nav-bottom')) {
    if (navChildrenItems.length > 0) {
      navChildrenItems.forEach((item) => {
        const subMenuBtn = item.querySelector('.navigation-children-btn')
        subMenuBtn.addEventListener('click', () => {
          const submenuOpen = document.querySelector('.submenu-open');
          toggleItem(item)

          if (submenuOpen && submenuOpen !== item) {
            toggleItem(submenuOpen)
          }
        })
      })
    }

    const toggleItem = (item) => {
      const submenuContent = item.querySelector('.submenu');

      if(item.classList.contains('submenu-open')) {
        submenuContent.removeAttribute('style');
        item.classList.remove('submenu-open')
      } else {
        submenuContent.style.height = submenuContent.scrollHeight + 'px';
        item.classList.add('submenu-open')
      }
    }
  }

  //menu-mobile

  if(navMobile)
  // current-item в footer

  if (navFooter) {
    const links = navFooter.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {

      if (links[i].href === window.location.href) {
        links[i].classList.add('footer-current-item');
        break;
      }
    }
  }

  //Slider
  if (document.querySelector(".courses-slider")) {

    let swiper = new Swiper(".courses-slider", {
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true,
      watchOverflow: false,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        }
      }
    });
  }

  if (document.querySelector(".swiper-reviews")) {
    let swiper3 = new Swiper(".swiper-reviews", {
      slidesPerView: 2.8,
      spaceBetween: 25,
      watchOverflow: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        900: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2.5,
        }
      }
    });
  }

  if (document.querySelector(".course-teacher__slider")) {
    let swiper4 = new Swiper(".course-teacher__slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
      initialSlide: 0,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 10,
        stretch: 450,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      breakpoints: {
        400: {
          coverflowEffect: {
            stretch: 450,
            rotate: 10,
            depth: 250,
            modifier: 1,
          },
        },
        800: {
          coverflowEffect: {
            stretch: 350,
            rotate: 10,
            depth: 200,
            modifier: 1,
          },
        },
        1300: {
          coverflowEffect: {
            rotate: 10,
            stretch: 450,
            depth: 300,
            modifier: 1,
          },
        },
      }
    });
  }

  if (document.querySelector(".page-courses-slider")) {
    let swiper5 = new Swiper(".page-courses-slider", {
      slidesPerView: "auto",
      spaceBetween: 20,
      initialSlide: 2,
      centeredSlides: true,
      speed: 1000,
      freeMode: false,
      grabCursor: true,
      watchOverflow: false,
      slidesPerGroup: 1,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: "auto",
        },
      }
    });
  }

  if (document.querySelector(".teacher-page-sliders")) {
    let swiper6 = new Swiper(".teacher-page-sliders", {
      slidesPerView: 3,
      spaceBetween: 100,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      watchOverflow: false,
      slidesPerGroup: 1,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
        1280: {
          slidesPerView: 3,
        }
      }
    })
  }

  if (document.querySelector(".about-gallery-wrapper")) {
    let swiper8 = new Swiper(".about-gallery-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 0,
      watchOverflow: false,
      slidesPerGroup: 1,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        }
      }
    });

  }

  //Accordeon

  if (document.querySelector(".accordeon-list")) {

    const accordeonItems = document.querySelectorAll(".accordion-list__item");

    for (let i = 0; i < accordeonItems.length; i++) {
      accordeonItems[i].addEventListener('click', function (el) {

        el.currentTarget.classList.toggle('active');

        for (let j = 0; j < accordeonItems.length; j++) {
          if (accordeonItems[j] !== el.currentTarget && accordeonItems[j].className === "accordion-list__item active") {
            accordeonItems[j].classList.remove('active');
          }
        }
      });
    };
  }

  //Tabs

  if (document.querySelector(".section-tabs")) {

    const tabsButtons = document.querySelectorAll('.tabs-button');
    const tabsPanels = document.querySelectorAll('.tabs-panel');

    tabsButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Убираем активный класс с всех кнопок
        tabsButtons.forEach(btn => btn.classList.remove('tabs-button-active'));
        // Добавляем активный класс на текущую кнопку
        button.classList.add('tabs-button-active');

        // Скрываем все панели
        tabsPanels.forEach(panel => panel.classList.remove('tabs-panel-show'));

        // Показываем панель, соответствующую текущей кнопке
        const targetId = button.getAttribute('data-target-id');
        const activePanel = document.querySelector(`.tabs-panel[data-id="${targetId}"]`);
        activePanel.classList.add('tabs-panel-show');
      });
    });
  }

  if (document.querySelector(".section-courses-slider")) {

    const tabs = document.querySelectorAll(".section-directions__item");
    const contents = document.querySelectorAll(".section-directions-panel");

    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        // Убираем активный класс с всех кнопок
        tabs.forEach(btn => btn.classList.remove('directions-active'));
        // Добавляем активный класс на текущую кнопку
        tab.classList.add('directions-active');

        // Скрываем все панели
        contents.forEach(panel => panel.classList.remove('section-directions-panel-show'));

        // Показываем панель, соответствующую текущей кнопке
        const targetId = tab.getAttribute('data-target-id');
        const activePanel = document.querySelector(`.section-directions-panel[data-id="${targetId}"]`);
        activePanel.classList.add('section-directions-panel-show');
      });
    });
  }

  //Modal
  if (document.querySelector(".thanks-content")) {
    document.addEventListener("DOMContentLoaded", function () {
      let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
      console.log(scrollbar);
      document.querySelector('[href="#openModal"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
      });
      document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
      });
    });
  }

  // Progress-bar
  if (document.querySelector(".progress-bar")) {

    function progressBar() {
      let historyContainer = document.querySelector(".about-history")
      let scroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = historyContainer.offsetHeight;
      let scrolled = (scroll / height * 100) - 100;
      let progressNow = document.querySelector(".progress-bar-now")
      progressNow.style.height = scrolled + '%';

      if (scrolled >= 50) {
        document.querySelector(".progress-dots__second").classList.add("dots-active")
      } else {
        document.querySelector(".progress-dots__second").classList.remove("dots-active")
      }
      if (scrolled >= 95) {
        document.querySelector(".progress-dots__third").classList.add("dots-active")
        progressNow.style.height = 100 + '%'
      } else {
        document.querySelector(".progress-dots__third").classList.remove("dots-active")
        progressNow.style.height = scrolled + '%';
      }
    }

    window.addEventListener('scroll', progressBar);
  }

  // Анимация в виде появления
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
      change.target.classList.add('element-show');
      }
      // else {
      //   change.target.classList.remove('element-show');
      // }
    });
  }

  function animEntry() {
    let options = {
      threshold: [0.3] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
      observer.observe(elm);
    }
  }


  setTimeout(animEntry, 4000);

})




