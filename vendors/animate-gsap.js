document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline()


  // Loader
  if (document.querySelector('.loader')) {
    const tlLoader = gsap.timeline();

    // Блокируем скролл, когда загрузочный экран появляется
    function showLoadingScreen() {
      document.querySelector('body').classList.add('no-scroll'); // Блокировка скролла

      tlLoader.set('.loader-item', { yPercent: -100 });

      tlLoader
        .set('.loader-item', { yPercent: -100 })
        .set('.loader-title', { opacity: 0 })
        .to('.loader-item', {
          yPercent: 0,
          duration: 0.7,
          stagger: 0.25
        })
        .to('.loader-item', {
          yPercent: 100,
          duration: 0.7,
          stagger: 0.25
        }, 1)
        .to('.loader-title', {
          opacity: 1,
          scale: 1.5,
          duration: 2
        }, 1.3)
        .set('.loader-item', { yPercent: -100 })
        .to('.loader-title', {
          opacity: 0,
          duration: 1,
          scale: 0.8
        }, 2.8)
        .to('.loader', {
          yPercent: -100,
          duration: 1.5
        }, '-=0.2');
    }

    function hideLoadingScreen() {
      // Уберем класс блокировки скролла
      document.querySelector('body').classList.remove('no-scroll'); // Включаем прокрутку
    }

    showLoadingScreen();
    setTimeout(hideLoadingScreen, 4000);
  }

  // Timeline
  if(document.querySelector('.anim-subtitle')) {
    tl.fromTo(
      '.anim-subtitle',
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1
      },
      4.2,
    )
  }
  if(document.querySelector('.anim-text')) {
    tl.fromTo(
      '.anim-text',
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1
      },
      4.6
    )
  }
  if(document.querySelector('.promo-list')) {
    tl.fromTo(
      '.promo-list a',
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.3
      },
      5
    )
  }
  if(document.querySelector('header')) {
    tl.fromTo('.burger',
      {
        y: -30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7
      },
      5
    )
    tl.fromTo('.user-list li',
      {
        y: -30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.3
      },
      5.3
    )
  }
    if(document.querySelector('.page-content')) {
 //Scroll animations

    // Main-title
    // intro
    gsap.to('.intro', {
      scrollTrigger: {
        trigger: '.section-intro',
        start: 'top top',
        scrub: true
      },
      opacity: 0,
      scale: 0.5,
      xPercent: -30,
      opacity: 0,
    })

    gsap.from('.section-about-content', {
      scrollTrigger: {
        trigger: '.section-about',
        scrub: true,
      },
      duration: 0.3,
      yPercent: -30,
    })

    gsap.from('.about-image__item-one', {
      scrollTrigger: {
        trigger: '.section-about',
        scrub: true,
      },
      yPercent: 25,
      duration: 0.3,
    })

    // Анимация плавного появления предложения по буквам
    let pageChars = document.querySelector('.page-title').textContent.split('')
    document.querySelector('.page-title').innerHTML = pageChars.map(char => `<span class='char'>${char}</span>`).join('');

    tl.fromTo(
      '.page-title .char',
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.15
      },
      4.8,
    )

    let coursesChars = document.querySelector('.section-courses .section-title').textContent.split('')
    document.querySelector('.section-courses .section-title').innerHTML = coursesChars.map(char => `<span class='char'>${char}</span>`).join('');

      gsap.from('.section-courses .section-title .char', {
        opacity: 0,
        duration: 0.3,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.section-courses',
            start: '-20% center',
            end: '+=100px',
        }
    })

    let aboutChars = document.querySelector('.section-about .section-title').textContent.split('')
    document.querySelector('.section-about .section-title').innerHTML = aboutChars.map(char => `<span class='char'>${char}</span>`).join('');

      gsap.from('.section-about .section-title .char', {
        opacity: 0,
        duration: 0.3,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.section-about',
            start: '-70% center',
            end: '+=100px',
        }
    })

    let blogChars = document.querySelector('.section-blog .section-title').textContent.split('')
    document.querySelector('.section-blog .section-title').innerHTML = blogChars.map(char => `<span class='char'>${char}</span>`).join('');

      gsap.from('.section-blog .section-title .char', {
        opacity: 0,
        duration: 0.3,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.section-blog',
            start: '-70% center',
            end: '+=100px',
        }
    })

    let aplicantChars = document.querySelector('.section-applicant .section-title').textContent.split('')
    document.querySelector('.section-applicant .section-title').innerHTML = aplicantChars.map(char => `<span class='char'>${char}</span>`).join('');

      gsap.from('.section-applicant .section-title .char', {
        opacity: 0,
        duration: 0.3,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.section-applicant',
            start: '-70% center',
            end: '+=100px',
        }
    })
  }
})

