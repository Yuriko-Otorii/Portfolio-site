//Top gsap
const timeline = gsap.timeline();
timeline
.from('.full-name', {
    duration: .5,
    y: 15, 
    opacity: 0,
    ease: "power2.out"
})
.from('.occupation', {
    duration: .5,
    y: 15, 
    opacity: 0,
    ease: "power2.out"
})
.from(".nav-item", {
    x: 30,
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    stagger: {
        each: .3,
    }
})


//Section gsap
const aboutTitle = document.querySelector('#about-me h1');
const aboutSection = document.querySelector('#about-me .section-contents');
const projectTitle = document.querySelector('#projects h1');
const projectSection = document.querySelector('#projects .section-contents');
const resumeTitle = document.querySelector('#resume h1');
const resumeSection = document.querySelector('#resume .section-contents');
const contactTitle = document.querySelector('#contacts h1');
const contactSection = document.querySelector('#contacts .section-contents');

gsap.registerEffect({
    name: "sectionTitleAnimation",
    effect: (target, config) => {
        return gsap.from(target, {
            scrollTrigger: {
                trigger: target,
                start: "bottom 80%",
            },
            duration: 1.2,
            y: 15, 
            opacity: 0,
            ease: "power2.out"
        })
    }
})

gsap.registerEffect({
    name: "sectionContentsAnimation",
    effect: (target, config) => {
        return gsap.from(target, {
            scrollTrigger: {
                trigger: target,
                start: "top 70%",
            },
            duration: 1.2,
            y: 15, 
            opacity: 0,
            ease: "power2.out"
        })
    }
})

gsap.effects.sectionTitleAnimation(aboutTitle);
gsap.effects.sectionContentsAnimation(aboutSection);
gsap.effects.sectionTitleAnimation(projectTitle);
gsap.effects.sectionContentsAnimation(projectSection);
gsap.effects.sectionTitleAnimation(resumeTitle);
gsap.effects.sectionContentsAnimation(resumeSection);
gsap.effects.sectionTitleAnimation(contactTitle);
gsap.effects.sectionContentsAnimation(contactSection);


//Github icon gsap
gsap.fromTo(".fa-github",
{ 
    scrollTrigger: {
        trigger: ".fa-github",
        start: "center bottom",
    },
    x: 500 
},
{
    x: 0,
    duration: 1.5,
    ease: Bounce.easeOut 
})


//Resume modal open
const resumeImg = document.querySelector('.resume-img');
const resumeModalContainer = document.querySelector('.resume-modal-container');
const modalResumeImg = document.querySelector('.modal-resume-img');

resumeImg.addEventListener('click', () => {
    resumeModalContainer.classList.add('show');
    modalResumeImg.classList.add('show');
})

//image modal
// https://logsuke.com/web/programming/javascript/javascript-modal-animation

//ScrollTriger
//https://liginc.co.jp/548232


//gsap CDN
//https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger
