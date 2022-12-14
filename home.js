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
.fromTo(".title-linkedin-icon",
{ 
    scrollTrigger: {
        trigger: ".title-linkedin-icon",
        start: "center bottom",
    },
    x: 650 
},
{
    x: 0,
    duration: 1.5,
    ease: Bounce.easeOut 
})
.fromTo(".title-github-icon",
{ 
    scrollTrigger: {
        trigger: ".title-github-icon",
        start: "center bottom",
    },
    x: -650
}, 
{
    x: 0,
    duration: 1.5,
    ease: Bounce.easeOut 
}, "<")
.from(".header-nav-item", {
    x: 30,
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    stagger: {
        each: .3,
    }
}, "-=1.1")


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
                start: "top 60%",
            },
            duration: 1.4,
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


//Balloon animation
$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll >= 400){
        $('.balloon-wrapper').removeClass('downMove');
        $('.balloon-wrapper').addClass('upMove');
    }else{
        if($('.balloon-wrapper').hasClass('upMove')){
            $('.balloon-wrapper').removeClass('upMove');
            $('.balloon-wrapper').addClass('downMove');
        }
    }
});

//Main nav animation
$(window).scroll(function(){
    const scroll = $(window).scrollTop()
    if (scroll >= 400){
        $('.main-nav').removeClass('downMove');
        $('.main-nav').addClass('upMove');
    }else{
        if($('.main-nav').hasClass('upMove')){
            $('.main-nav').removeClass('upMove');
            $('.main-nav').addClass('downMove');
        }
    }
})

//Mode change
const pageTopBalloon = document.querySelector('.home-balloon-wrapper')
const lightpageTopPtag = document.querySelector('.light-pagetop')
const pageTopMoon = document.querySelector('.moon-icon')
const darkpageTopPtag = document.querySelector('.dark-pagetop')

document.querySelector('.mode-change').addEventListener('click', () => {
    console.log('clicked');
    if($('.fa-moon').hasClass('hidden')){
        //Light to dark
        $('.fa-sun').removeClass('show')
        $('.fa-sun').addClass('hidden')
        $('.fa-moon').removeClass('hidden')
        $('.fa-moon').addClass('show')
        $('.home-body').addClass('dark-mode')
        $('.home-body').removeClass('light-mode')
        $('footer').removeClass('footer-light-mode')
        $('footer').addClass('footer-dark-mode')
        $('.main-nav').removeClass('nav-light-mode')
        $('.main-nav').addClass('nav-dark-mode')
        pageTopBalloon.style.display = 'none'
        lightpageTopPtag.style.display = 'none'
        pageTopMoon.style.display = 'block'
        darkpageTopPtag.style.display = 'block'
    }else{
        //Dark to light
        $('.fa-sun').removeClass('hidden')
        $('.fa-sun').addClass('show')
        $('.fa-moon').removeClass('show')
        $('.fa-moon').addClass('hidden')
        $('.home-body').removeClass('dark-mode')
        $('.home-body').addClass('light-mode')
        $('footer').removeClass('footer-dark-mode')
        $('footer').addClass('footer-light-mode')
        $('.main-nav').removeClass('nav-dark-mode')
        $('.main-nav').addClass('nav-light-mode')
        pageTopBalloon.style.display = 'flex'
        lightpageTopPtag.style.display = 'block'
        pageTopMoon.style.display = 'none'
        darkpageTopPtag.style.display = 'none'
    }
})


//send Comfirm email
window.onload = function() {
    document.querySelector('form').addEventListener('submit', async function(e) {
        e.preventDefault();
        let fName = document.getElementById('fName').value;
        let lName = document.getElementById('lName').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        const templateVariables = {
            fName: fName,
            lName: lName,
            email: email,
            message: message
        };

        try {
            await emailjs.send(
                'service_KEY',
                'template_KEY',
                templateVariables,
            );

    
            fName = '';
            lName = '';
            email = '';
            message = '';

            //msg of 'Successfully sent'
            
        } catch (error) {
            
        }
    });
}

// const {MAILJS_ACOUNT_KEY, MAILJS_SERVICE_KEY, MAILJS_TEMPATE_KEY} = process.env;







//ScrollTriger
//https://liginc.co.jp/548232


//gsap CDN
//https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger
