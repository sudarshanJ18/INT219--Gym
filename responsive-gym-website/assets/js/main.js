
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')

	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sr = ScroolReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})


sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bot'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})

const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
    e.preventDefault()

    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = '*Height and Weight are mandatory'

        setTimeout(()=>{
            calculateMessage.textContent=''
        },3000)
    } else {
        const cm = calculateCm.value/100,
              kg = calculateKg.value,
              bmi = Math.round(kg/(cm * cm))

            if(bmi <18.5){
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent= 'BMI of Your Body is: ${bmi} and you are not upto your Strength'
            } else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent= 'BMI of Your Body is: ${bmi} and you are fit enough'
            } else{
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent= 'BMI of Your Body is: ${bmi} and you are over weight'
            }

            calculateCm.value = ''
            calculateKg.value = ''

            setTimeout(()=>{
                calculateMessage.textContent = ''
            },4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi)

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')


const sendEmail = (e) =>{
    e.preventDefault()

    if(contactUser.value.trim() === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = '*Email should not be blank'
        alert('An Unknown error occured', error)
        setTimeout(()=>{
            contactMessage.textContent = ''
        },3000);
    } else {
        emailjs.sendForm('service_1jfg3df','template_zntcx46','#contact-form','9pECpkxY3AIEVIesV0')
                .then(()=>{
                    contactMessage.classList.add('color-green')
                    contactMessage.textContent = 'Registration Successfully'

                    setTimeout(()=>{
                        contactMessage.textContent = ''
                    }, 3000)
                },(error)=>{
                    alert('An Unknown error occured' + error)
                })

                contactUser.value = ''
    }
}

contactForm.addEventListener('submit' , sendEmail)