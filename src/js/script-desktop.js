// mobilnie
const desktopForwardBtn = document.querySelector('.desktop-form__forward-btn')
const desktopBackBtn = document.querySelector('.desktop-form__back-btn')

const formControls2 = document.querySelector('.desktop-form__controls')

const desktopProgressItems = document.querySelectorAll('.desktop-form__progress-item')

let slideNumber2 = 0

let payment2 = 0

const desktopForms = document.querySelectorAll('.desktop-form__actual-form')

// slide 1

const namee = document.getElementById('desktop-name')
const maill = document.getElementById('desktop-mail')
const phonee = document.getElementById('desktop-number')
const allDesktopInputs = document.querySelectorAll('.desktop-form__input-text')
const desktopErrors = document.querySelectorAll('.desktop-form__label-box__error')

const addInputError2 = input => {
	input.classList.add('error')
}
const removeInputError2 = input => {
	input.classList.remove('error')
}
const handleProgress2 = () => {
	const slides = Array.from(desktopForms)
	const activeSlide = slides.findIndex(slide => slide.classList.contains('show-slide'))
	desktopProgressItems.forEach(item => {
		item.classList.remove('active-progress-item')
	})
	desktopProgressItems[activeSlide].classList.add('active-progress-item')
}
handleProgress2()

const handleMovingSlides2 = () => {
	const checkInputs = Array.from(allDesktopInputs).every(input => !input.classList.contains('error'))
	if (slideNumber2 == 0 && checkInputs) {
		slideNumber2++
		desktopForms.forEach(form => form.classList.remove('show-slide'))
		desktopForms[slideNumber2].classList.add('show-slide')
	} else if (slideNumber2 == 1) {
		slideNumber2++
		desktopForms.forEach(form => form.classList.remove('show-slide'))
		desktopForms[slideNumber2].classList.add('show-slide')
	} else if (slideNumber2 == 2) {
		slideNumber2++
		desktopForms.forEach(form => form.classList.remove('show-slide'))
		desktopForms[slideNumber2].classList.add('show-slide')
	} else if (slideNumber2 == 3) {
		slideNumber2++
		desktopForms.forEach(form => form.classList.remove('show-slide'))
		desktopForms[slideNumber2].classList.add('show-slide')
		formControls2.classList.add('hided')
	}
	if (slideNumber2 == 3) {
		desktopForwardBtn.textContent = 'Confirm'
	} else {
		desktopForwardBtn.textContent = 'Next Step'
	}
}
const handleMovingBackwards2 = () => {
	const checkInputs = Array.from(allDesktopInputs).every(input => !input.classList.contains('error'))
	if (slideNumber2 == 3 && checkInputs) {
		slideNumber2--
		desktopForms.forEach(form => form.classList.remove('show-slide'))
		desktopForms[slideNumber2].classList.add('show-slide')
	} else if (slideNumber2 == 2) {
		slideNumber2--
		desktopForms.forEach(form => form.classList.remove('show-slide'))
		desktopForms[slideNumber2].classList.add('show-slide')
	} else if (slideNumber2 == 1) {
		slideNumber2--
		desktopForms.forEach(form => form.classList.remove('show-slide'))
		desktopForms[slideNumber2].classList.add('show-slide')
		desktopBackBtn.classList.add('hided')
	} else if (slideNumber2 == 0) {
		desktopForms.forEach(form => form.classList.remove('show-slide'))
		desktopForms[slideNumber2].classList.add('show-slide')
		desktopBackBtn.classList.add('hided')
	}
    if (slideNumber2 == 3) {
		desktopForwardBtn.textContent = 'Confirm'
	} else {
		desktopForwardBtn.textContent = 'Next Step'
	}
}

const checkForm2 = () => {
	const mobileRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/
	const mailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (!mobileRegex.test(phonee.value) || phonee.value == '') {
		addInputError2(phonee)
		desktopErrors[2].classList.add('show-error')
	} else {
		desktopErrors[2].remove('show-error')
		removeInputError2(phonee)
	}

	if (!mailRegex.test(maill.value) || maill.value == '') {
		addInputError2(maill)
		desktopErrors[1].classList.add('show-error')
	} else {
		desktopErrors[1].remove('show-error')
		removeInputError2(maill)
	}
	const nameRegex = /^([^0-9]*)$/

	if (namee.value == '' || !nameRegex.test(namee.value)) {
		addInputError2(namee)
		desktopErrors[0].classList.add('show-error')
	} else {
		desktopErrors[0].remove('show-error')
		removeInputError2(namee)
	}
}

const firstSlideNoBackBtn2 = () => {
	if (desktopForms[0].classList.contains('show-slide')) {
		desktopBackBtn.classList.add('hided')
	} else if (!desktopForms[0].classList.contains('show-slide')) {
		desktopBackBtn.classList.remove('hided')
	}
}
// slide 2
const slider2 = document.querySelector('.desktop-form__choose-payment__slider')
const sliderBall2 = document.querySelector('.desktop-form__choose-payment__ball')
const paymentOptions2 = document.querySelectorAll('.desktop-form__choose-payment__option')

const planPrices2 = document.querySelectorAll('.desktop-form__plans-box__price')

const plans2 = document.querySelectorAll('.desktop-form__plans-box')

const handleSlider2 = () => {
	if (paymentOptions2[0].classList.contains('active-option')) {
		paymentOptions2.forEach(option => option.classList.remove('active-option'))
		paymentOptions2[1].classList.add('active-option')
		sliderBall2.classList.add('yearly2')
		sliderBall2.classList.remove('monthly2')
	} else if (paymentOptions2[1].classList.contains('active-option')) {
		paymentOptions2.forEach(option => option.classList.remove('active-option'))
		paymentOptions2[0].classList.add('active-option')
		sliderBall2.classList.add('monthly2')
		sliderBall2.classList.remove('yearly2')
	}
}
const handlePlanPrices2 = () => {
	if (sliderBall2.classList.contains('monthly2')) {
		planPrices2[0].textContent = '$9/mo'
		planPrices2[1].textContent = '$12/mo'
		planPrices2[2].textContent = '$15/mo'
	} else if (sliderBall2.classList.contains('yearly2')) {
		planPrices2[0].textContent = '$90/yr'
		planPrices2[1].textContent = '$120/yr'
		planPrices2[2].textContent = '$150/yr'
	}
}
plans2.forEach(plan => {
	plan.addEventListener('click', () => {
		plans2.forEach(p => p.classList.remove('picked-plan2'))

		plan.classList.add('picked-plan2')
	})
})
slider2.addEventListener('click', () => {
	handleSlider2()
	handlePlanPrices2()
})
firstSlideNoBackBtn2()

// slide 3
// pick add-ons

const servicePrices2 = document.querySelectorAll('.desktop-form__add-on__price')
const servicePricesSummary2 = document.querySelectorAll('.desktop-form__add-on__price')

const pickCheckboxes2 = document.querySelectorAll('.desktop-form__checkbox')

const onlineCheckbox2 = document.querySelector('#online-service1')
const storageCheckbox2 = document.querySelector('#online-service2')
const profileCheckbox2 = document.querySelector('#online-service3')

const summaryServices2 = document.querySelectorAll('.desktop-form__summary-add-on')
console.log(summaryServices2)
const summaryServicesCosts2 = document.querySelectorAll('.desktop-form__summary-add-on__price')

const formPicks2 = document.querySelectorAll('.desktop-form__add-on')

formPicks2.forEach(pick => {
	pick.addEventListener('click', function () {
		const checkbox = this.querySelector("input[type='checkbox']")
		checkbox.checked = !checkbox.checked
	})
})

const handleServicesPrices2 = () => {
	if (sliderBall2.classList.contains('monthly')) {
		servicePrices2[0].textContent = '+$1/mo'
		servicePrices2[1].textContent = '+$2/mo'
		servicePrices2[2].textContent = '+$2/mo'
	} else if (sliderBall2.classList.contains('yearly')) {
		servicePrices2[0].textContent = '+$10/yr'
		servicePrices2[1].textContent = '+$20/yr'
		servicePrices2[2].textContent = '+$20/yr'
	}
}
const handlePicks2 = () => {
	if (sliderBall2.classList.contains('monthly2')) {
		if (onlineCheckbox2.checked) {
			payment2 += 1
			summaryServices2[0].classList.add('active-service2')
			summaryServicesCosts2[0].textContent = '+$1/mo'
		} else {
			summaryServices2[0].classList.remove('active-service2')
		}
		if (storageCheckbox2.checked) {
			payment2 += 2
			summaryServices2[1].classList.add('active-service2')
			summaryServicesCosts2[1].textContent = '+$2/mo'
		} else {
			summaryServices2[1].classList.remove('active-service2')
		}
		if (profileCheckbox2.checked) {
			payment2 += 2
			summaryServices2[2].classList.add('active-service2')
			summaryServicesCosts2[2].textContent = '+$2/mo'
		} else {
			summaryServices2[2].classList.remove('active-service2')
		}
	} else if (sliderBall2.classList.contains('yearly2')) {
		if (onlineCheckbox2.checked) {
			payment2 += 10
			summaryServices2[0].classList.add('active-service2')
			summaryServicesCosts2[0].textContent = '+$10/yr'
		} else {
			summaryServices2[0].classList.remove('active-service2')
		}
		if (storageCheckbox2.checked) {
			payment2 += 20
			summaryServices2[1].classList.add('active-service2')
			summaryServicesCosts2[1].textContent = '+$20/yr'
		} else {
			summaryServices2[1].classList.remove('active-service2')
		}
		if (profileCheckbox2.checked) {
			payment2 += 20
			summaryServices2[2].classList.add('active-service2')
			summaryServicesCosts2[2].textContent = '+$20/yr'
		} else {
			summaryServices2[2].classList.remove('active-service2')
		}
	}
}

const handlePlanSummary2 = () => {
	payment2 = 0
	if (sliderBall2.classList.contains('monthly2')) {
		if (plans2[0].classList.contains('picked-plan2')) {
			summaryPickedPlan2.textContent = 'Arcade (Monthly)'
			planPrice2.textContent = '$9/mo'
			payment2 = 9
		} else if (plans2[1].classList.contains('picked-plan2')) {
			summaryPickedPlan2.textContent = 'Advanced (Monthly)'
			payment2 = 12
			planPrice2.textContent = '$12/mo'
		} else if (plans2[2].classList.contains('picked-plan2')) {
			summaryPickedPlan2.textContent = 'Pro (Monthly)'
			payment2 = 15
			planPrice2.textContent = '$15/mo'
		}
	}
	if (sliderBall2.classList.contains('yearly2')) {
		if (plans2[0].classList.contains('picked-plan2')) {
			summaryPickedPlan2.textContent = 'Arcade (Yearly)'
			payment2 = 90
			planPrice2.textContent = '$90/yr'
		} else if (plans2[1].classList.contains('picked-plan2')) {
			summaryPickedPlan2.textContent = 'Advanced (Yearly)'
			payment2 = 120
			planPrice2.textContent = '$120/yr'
		} else if (plans2[2].classList.contains('picked-plan2')) {
			summaryPickedPlan2.textContent = 'Pro (Yearly)'
			payment2 = 150
			planPrice2.textContent = '$150/yr'
		}
	}
}

// slide 4
const summaryPickedPlan2 = document.querySelector('.desktop-form__plan-summary__chosen-plan')

const pickedPlan2 = document.querySelector('.picked-plan2')

const summaryTotal2 = document.querySelector('.desktop-form__summary-total__p')

const summaryTotalPrice2 = document.querySelector('.desktop-form__summary-total__total-payment')

const planPrice2 = document.querySelector('.desktop-form__summary-plan-price')

const changeBtn2 = document.querySelector('.desktop-form__plan-summary__change-btn')

const planTitles2 = document.querySelectorAll('.desktop-form__plans-box__title')

const handleServicePricesSummary2 = () => {
	if (sliderBall2.classList.contains('monthly2')) {
		servicePricesSummary2[0].textContent = '+$1/mo'
		servicePricesSummary2[1].textContent = '+$2/mo'
		servicePricesSummary2[2].textContent = '+$2/mo'
	} else if (sliderBall2.classList.contains('yearly2')) {
		servicePricesSummary2[0].textContent = '+$10/yr'
		servicePricesSummary2[1].textContent = '+$20/yr'
		servicePricesSummary2[2].textContent = '+$20/yr'
	}
}
const handleTotal2 = () => {
	if (sliderBall2.classList.contains('monthly2')) {
		summaryTotalPrice2.textContent = `$${payment2}/mo`
	} else if (sliderBall2.classList.contains('yearly2')) {
		summaryTotalPrice2.textContent = `$${payment2}/yr`
	}
}

desktopForwardBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm2()
	handleMovingSlides2()
	firstSlideNoBackBtn2()
	handleProgress2()
	handleServicePricesSummary2()
	handleServicesPrices2()
	handlePlanSummary2()
	handlePicks2()
	handleTotal2()
})
desktopBackBtn.addEventListener('click', () => {
	handleMovingBackwards2()
	handleProgress2()
	handlePlanSummary2()
})
