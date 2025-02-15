
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()
// Timeline
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
  0.8,
)
tl.fromTo(
  '.anim-title',
  {
    scale: 0.7,
    opacity: 0
  },
  {
    scale: 1,
    opacity: 1,
    duration: 1.5
  },
  0.5,
)
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
  1.2
)
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
  1.4
)
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
  1.5
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
  1.8
)

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

gsap.fromTo('.courses-slider-list li', {
  scrollTrigger: {
    trigger: '.section-courses',
    start: '-20% center',
    end: '+=300px',
  },
  opacity: 0,
  scale: 0.5,
},
{
  scrollTrigger: {
    trigger: '.section-courses',
    start: '-20% center',
    end: '+=300px'
  },
  opacity: 1,
  scale: 1,
  duration: 1,
  stagger: 0.5
})

gsap.from('.section-about-content', {
  scrollTrigger: {
    trigger: '.section-about',
    scrub: true,
  },
  duration: 0.3,
  yPercent: -10,
})

gsap.from('.about-image__item-one', {
  scrollTrigger: {
    trigger: '.section-about',
    scrub: true,
  },
  yPercent: 10,
  duration: 0.3,
})

gsap.fromTo('.applicant li', {
  scrollTrigger: {
    trigger: '.section-applicant',
    start: '-70% center',
    end: '+=300px',
  },
  opacity: 0,
  x: -100,
},
{
  scrollTrigger: {
    trigger: '.section-applicant',
    start: '-70% center',
    end: '+=300px',
  },
  opacity: 1,
  x: 0,
  duration: 0.7,
  stagger: 0.4,
})

gsap.fromTo('.blog-list li', {
  scrollTrigger: {
    trigger: '.section-blog',
    start: '-90% center',
    end: '+=300px',
  },
  opacity: 0,
  y: -70,
  duration: 1,

},
{
  scrollTrigger: {
    trigger: '.section-blog',
    start: '-90% center',
    end: '+=300px',
  },
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.5,
})

let coursesChars = document.querySelector('.section-courses .section-title').textContent.split('')
document.querySelector('.section-courses .section-title').innerHTML = coursesChars.map(char => `<span class='char'>${char}</span>`).join('');

  gsap.from('.section-courses .section-title .char', {
    opacity: 0,
    y: 30,
    duration: 0.3,
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.section-courses',
        start: '-20% center',
        end: '+=150px',
    }
})

let aboutChars = document.querySelector('.section-about .section-title').textContent.split('')
document.querySelector('.section-about .section-title').innerHTML = aboutChars.map(char => `<span class='char'>${char}</span>`).join('');

  gsap.from('.section-about .section-title .char', {
    opacity: 0,
    y: 30,
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
    y: 30,
    duration: 0.3,
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.section-blog',
        start: '-70% center',
        end: '+=150px',
    }
})

let aplicantChars = document.querySelector('.section-applicant .section-title').textContent.split('')
document.querySelector('.section-applicant .section-title').innerHTML = aplicantChars.map(char => `<span class='char'>${char}</span>`).join('');

  gsap.from('.section-applicant .section-title .char', {
    opacity: 0,
    y: 30,
    duration: 0.3,
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.section-applicant',
        start: '-70% center',
        end: '+=150px',
    }
})
