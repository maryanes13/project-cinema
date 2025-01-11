window.addEventListener('DOMContentLoaded', () => {
  let body = document.querySelector('body')
  let header = document.querySelector(".header")
  let navPage = document.querySelector('.page-header__nav');
  let navToggle = document.querySelector('.burger-button');
  let navClosed = document.querySelector('.button-closed');
  let navFooter = document.querySelector(".footer-navigation");
  let animItems = document.querySelectorAll(".anim-items")

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add("anim-active")
        } else {
          animItem.classList.remove("anim-active")
        }
      }
    }

    // функция получения позиции сверху или слева
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
      animOnScroll()
    }, 500)

  }

  // header fixed при скролле
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop >= header.offsetHeight * 3) {
      header.classList.add("fixed")
      body.style.marginTop = `${header.offsetHeight}px`
    } else {
      header.classList.remove("fixed")
      body.style.marginTop = `0px`
    }
  })

  // Menu
  if (navPage) {

    navToggle.addEventListener('click', function () {
      if (navPage.classList.contains('active')) {
        navPage.classList.remove('active');
      } else {
        navPage.classList.add('active');
      }
    });

    navClosed.addEventListener('click', function () {
      if (navPage.classList.contains('active')) {
        navPage.classList.remove('active');
      }
    });

    // Активная вкладка
    const links = navPage.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {

      if (links[i].href === window.location.href) {
        links[i].classList.add('current-item');
      }


    }
  }

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
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
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
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        }
      }
    });
  }

  if (document.querySelector(".professors-slider")) {

    let swiper2 = new Swiper(".professors-slider", {
      slidesPerView: 3,
      spaceBetween: 0,
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
          slidesPerView: 1.5,
        },
        900: {
          slidesPerView: 1.8,
        },
        1280: {
          slidesPerView: 2.5,
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
        stretch: 500,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      breakpoints: {
        400: {
          coverflowEffect: {
            stretch: 100,
            rotate: 10,
            depth: 200,
            modifier: 1,
          },
        },
        800: {
          coverflowEffect: {
            stretch: 300,
            rotate: 10,
            depth: 200,
            modifier: 1,
          },
        },
        1300: {
          coverflowEffect: {
            rotate: 10,
            stretch: 600,
            depth: 200,
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
        768: {
          slidesPerView: "auto",
        },
      }
    });
  }

  if (document.querySelector(".teacher-page-sliders")) {
    let swiper6 = new Swiper(".sliders-faculty-one", {
      slidesPerView: 3,
      spaceBetween: 10,
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

    let swiper7 = new Swiper(".sliders-faculty-second", {
      slidesPerView: 3,
      spaceBetween: 10,
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
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        }
      }
    });
  }

  if (document.querySelector(".about-gallery-wrapper")) {
    let swiper8 = new Swiper(".about-gallery-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 0,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
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

    const tabs = document.querySelectorAll(".tabs-button ");
    const contents = document.querySelectorAll(".tabs-panel");

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", (event) => {

        let tabsChildren = event.target.parentElement.children;
        console.log(tabsChildren)
        for (let t = 0; t < tabsChildren.length; t++) {
          tabsChildren[t].classList.remove("tabs-button-active");
        }

        tabs[i].classList.add("tabs-button-active");

        let tabContentChildren = event.target.parentElement.nextElementSibling.children;
        for (let c = 0; c < tabContentChildren.length; c++) {
          tabContentChildren[c].classList.remove("tabs-panel-show");
        }

        contents[i].classList.add("tabs-panel-show");
      });
    }
  }

  if (document.querySelector(".section-courses-slider")) {

    const tabs = document.querySelectorAll(".section-directions__item");
    const contents = document.querySelectorAll(".section-directions-panel");

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", (event) => {

        let tabsChildren = event.target.parentElement.children;
        console.log(tabsChildren)
        for (let t = 0; t < tabsChildren.length; t++) {
          tabsChildren[t].classList.remove("directions-active");
        }

        tabs[i].classList.add("directions-active");

        let tabContentChildren = event.target.parentElement.nextElementSibling.children;
        console.log(tabContentChildren)

        for (let c = 0; c < tabContentChildren.length; c++) {
          tabContentChildren[c].classList.remove("section-directions-panel-show");
        }

        contents[i].classList.add("section-directions-panel-show");
      });
    }
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

})



