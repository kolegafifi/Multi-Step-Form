// mobilnie
const mobileForwardBtn = document.querySelector('.form__forward-btn')
const mobileBackBtn = document.querySelector('.form__back-btn')

const formControls = document.querySelector('.form__controls')

const mobileProgressItems = document.querySelectorAll('.form__progress-item')

let slideNumber = 0

let payment = 0

const mobileForms = document.querySelectorAll('.form__actual-form')

// slide 1

const mobileNameInput = document.querySelector('#mobile-name')
const mobileMailInput = document.querySelector('#mobile-email')
const mobilePhoneInput = document.querySelector('#mobile-number')
const allMobileInputs = document.querySelectorAll('.form__input-text')

const addInputError = input => {
	input.classList.add('error')
}
const removeInputError = input => {
	input.classList.remove('error')
}
const handleProgress = () => {
	const slides = Array.from(mobileForms)
	const activeSlide = slides.findIndex(slide => slide.classList.contains('show-slide'))
	mobileProgressItems.forEach(item => {
		item.classList.remove('active-progress-item')
	})
	mobileProgressItems[activeSlide].classList.add('active-progress-item')
}
handleProgress()

const handleMovingSlides = () => {
	const checkInputs = Array.from(allMobileInputs).every(input => !input.classList.contains('error'))
	if (slideNumber == 0 && checkInputs) {
		slideNumber++
		mobileForms.forEach(form => form.classList.remove('show-slide'))
		mobileForms[slideNumber].classList.add('show-slide')
	} else if (slideNumber == 1) {
		slideNumber++
		mobileForms.forEach(form => form.classList.remove('show-slide'))
		mobileForms[slideNumber].classList.add('show-slide')
	} else if (slideNumber == 2) {
		slideNumber++
		mobileForms.forEach(form => form.classList.remove('show-slide'))
		mobileForms[slideNumber].classList.add('show-slide')
	} else if (slideNumber == 3) {
		slideNumber++
		mobileForms.forEach(form => form.classList.remove('show-slide'))
		mobileForms[slideNumber].classList.add('show-slide')
		formControls.classList.add('hided')
	}
	if (slideNumber == 3) {
		mobileForwardBtn.textContent = 'Confirm'
	} else {
		mobileForwardBtn.textContent = 'Next Step'
	}
}
const handleMovingBackwards = () => {
	const checkInputs = Array.from(allMobileInputs).every(input => !input.classList.contains('error'))
	if (slideNumber == 3 && checkInputs) {
		slideNumber--
		mobileForms.forEach(form => form.classList.remove('show-slide'))
		mobileForms[slideNumber].classList.add('show-slide')
	} else if (slideNumber == 2) {
		slideNumber--
		mobileForms.forEach(form => form.classList.remove('show-slide'))
		mobileForms[slideNumber].classList.add('show-slide')
	} else if (slideNumber == 1) {
		slideNumber--
		mobileForms.forEach(form => form.classList.remove('show-slide'))
		mobileForms[slideNumber].classList.add('show-slide')
		mobileBackBtn.classList.add('hided')
	} else if (slideNumber == 0) {
		mobileForms.forEach(form => form.classList.remove('show-slide'))
		mobileForms[slideNumber].classList.add('show-slide')
		mobileBackBtn.classList.add('hided')
	}
	if (slideNumber == 3) {
		mobileForwardBtn.textContent = 'Confirm'
	} else {
		mobileForwardBtn.textContent = 'Next Step'
	}
}

const checkForm = () => {
	const mobileRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/
	const mailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (!mobileRegex.test(mobilePhoneInput.value) || mobilePhoneInput.value == '') {
		addInputError(mobilePhoneInput)
	} else {
		removeInputError(mobilePhoneInput)
	}

	if (!mailRegex.test(mobileMailInput.value) || mobileMailInput.value == '') {
		addInputError(mobileMailInput)
	} else {
		removeInputError(mobileMailInput)
	}
	const nameRegex = /^([^0-9]*)$/
	if (mobileNameInput.value == '' || !nameRegex.test(mobileNameInput.value)) {
		addInputError(mobileNameInput)
	} else {
		removeInputError(mobileNameInput)
	}
}

const firstSlideNoBackBtn = () => {
	if (mobileForms[0].classList.contains('show-slide')) {
		mobileBackBtn.classList.add('hided')
	} else if (!mobileForms[0].classList.contains('show-slide')) {
		mobileBackBtn.classList.remove('hided')
	}
}
// slide 2
const slider = document.querySelector('.form__payment-options__slider')
const sliderBall = document.querySelector('.form__payment-options__slider__ball')
const paymentOptions = document.querySelectorAll('.form__payment-options__option')

const discountsMobile = document.querySelectorAll('.form__plan-text__discount')

const planPrices = document.querySelectorAll('.form__plan-text__price')

const plans = document.querySelectorAll('.form__plan')

const handleSlider = () => {
	if (paymentOptions[0].classList.contains('active-option')) {
		paymentOptions.forEach(option => option.classList.remove('active-option'))
		paymentOptions[1].classList.add('active-option')
		sliderBall.classList.add('yearly')
		sliderBall.classList.remove('monthly')
	} else if (paymentOptions[1].classList.contains('active-option')) {
		paymentOptions.forEach(option => option.classList.remove('active-option'))
		paymentOptions[0].classList.add('active-option')
		sliderBall.classList.add('monthly')
		sliderBall.classList.remove('yearly')
	}
}

const handlePlanPrices = () => {
	if (sliderBall.classList.contains('monthly')) {
		planPrices[0].textContent = '$9/mo'
		planPrices[1].textContent = '$12/mo'
		planPrices[2].textContent = '$15/mo'
		discountsMobile.forEach(item => {
			item.style.display = 'none'
		})
	} else if (sliderBall.classList.contains('yearly')) {
		planPrices[0].textContent = '$90/yr'
		planPrices[1].textContent = '$120/yr'
		planPrices[2].textContent = '$150/yr'
		discountsMobile.forEach(item => {
			item.style.display = 'inline-block'
		})
	}
}
plans.forEach(plan => {
	plan.addEventListener('click', () => {
		plans.forEach(p => p.classList.remove('picked-plan'))

		plan.classList.add('picked-plan')
	})
})
slider.addEventListener('click', () => {
	handleSlider()
	handlePlanPrices()
})
firstSlideNoBackBtn()

// slide 3
// pick add-ons

const servicePrices = document.querySelectorAll('.form__pick__price')
const servicePricesSummary = document.querySelectorAll('.form__summary__service__service-cost')

const pickCheckboxes = document.querySelectorAll('.form__pick__checkbox')

const onlineCheckbox = document.querySelector('#online-check')
const storageCheckbox = document.querySelector('#storage-check')
const profileCheckbox = document.querySelector('#profile-check')

const summaryServices = document.querySelectorAll('.form__summary__service')
const summaryServicesCosts = document.querySelectorAll('.form__summary__service__service-cost')

const formPicks = document.querySelectorAll('.form__pick')

formPicks.forEach(pick => {
	pick.addEventListener('click', function () {
		const checkbox = this.querySelector("input[type='checkbox']")
		checkbox.checked = !checkbox.checked
	})
})

const handleServicesPrices = () => {
	if (sliderBall.classList.contains('monthly')) {
		servicePrices[0].textContent = '+$1/mo'
		servicePrices[1].textContent = '+$2/mo'
		servicePrices[2].textContent = '+$2/mo'
	} else if (sliderBall.classList.contains('yearly')) {
		servicePrices[0].textContent = '+$10/yr'
		servicePrices[1].textContent = '+$20/yr'
		servicePrices[2].textContent = '+$20/yr'
	}
}
const handlePicks = () => {
	if (sliderBall.classList.contains('monthly')) {
		if (onlineCheckbox.checked) {
			payment += 1
			summaryServices[0].classList.add('active-service')
			summaryServicesCosts[0].textContent = '+$1/mo'
		} else {
			summaryServices[0].classList.remove('active-service')
		}
		if (storageCheckbox.checked) {
			payment += 2
			summaryServices[1].classList.add('active-service')
			summaryServicesCosts[1].textContent = '+$2/mo'
		} else {
			summaryServices[1].classList.remove('active-service')
		}
		if (profileCheckbox.checked) {
			payment += 2
			summaryServices[2].classList.add('active-service')
			summaryServicesCosts[2].textContent = '+$2/mo'
		} else {
			summaryServices[2].classList.remove('active-service')
		}
	} else if (sliderBall.classList.contains('yearly')) {
		if (onlineCheckbox.checked) {
			payment += 10
			summaryServices[0].classList.add('active-service')
			summaryServicesCosts[0].textContent = '+$10/yr'
		} else {
			summaryServices[0].classList.remove('active-service')
		}
		if (storageCheckbox.checked) {
			payment += 20
			summaryServices[1].classList.add('active-service')
			summaryServicesCosts[1].textContent = '+$20/yr'
		} else {
			summaryServices[1].classList.remove('active-service')
		}
		if (profileCheckbox.checked) {
			payment += 20
			summaryServices[2].classList.add('active-service')
			summaryServicesCosts[2].textContent = '+$20/yr'
		} else {
			summaryServices[2].classList.remove('active-service')
		}
	}
}

// slide 4
const summaryPickedPlan = document.querySelector('.form__summary__plan-text__picked-plan')

const pickedPlan = document.querySelector('.picked-plan')

const summaryTotal = document.querySelector('.form__summary__plan-total')

const summaryTotalPrice = document.querySelector('.form__summary__plan-total-price')

const planPrice = document.querySelector('.form__summary__plan-price')

const changeBtn = document.querySelector('.form__summary__plan-text__change-btn')

const planTitles = document.querySelectorAll('.plan-title')
const handlePlanSummary = () => {
	payment = 0
	if (sliderBall.classList.contains('monthly')) {
		if (plans[0].classList.contains('picked-plan')) {
			summaryPickedPlan.textContent = 'Arcade (Monthly)'
			planPrice.textContent = '$9/mo'
			payment = 9
		} else if (plans[1].classList.contains('picked-plan')) {
			summaryPickedPlan.textContent = 'Advanced (Monthly)'
			payment = 12
			planPrice.textContent = '$12/mo'
		} else if (plans[2].classList.contains('picked-plan')) {
			summaryPickedPlan.textContent = 'Pro (Monthly)'
			payment = 15
			planPrice.textContent = '$15/mo'
		}
	}
	if (sliderBall.classList.contains('yearly')) {
		payment = 0
		if (plans[0].classList.contains('picked-plan')) {
			summaryPickedPlan.textContent = 'Arcade (Yearly)'
			payment = 90
			planPrice.textContent = '$90/yr'
		} else if (plans[1].classList.contains('picked-plan')) {
			summaryPickedPlan.textContent = 'Advanced (Yearly)'
			payment = 120
			planPrice.textContent = '$120/yr'
		} else if (plans[2].classList.contains('picked-plan')) {
			summaryPickedPlan.textContent = 'Pro (Yearly)'
			payment = 150
			planPrice.textContent = '$150/yr'
		}
	}
}

const handleServicePricesSummary = () => {
	if (sliderBall.classList.contains('monthly')) {
		servicePricesSummary[0].textContent = '+$1/mo'
		servicePricesSummary[1].textContent = '+$2/mo'
		servicePricesSummary[2].textContent = '+$2/mo'
	} else if (sliderBall.classList.contains('yearly')) {
		servicePricesSummary[0].textContent = '+$10/yr'
		servicePricesSummary[1].textContent = '+$20/yr'
		servicePricesSummary[2].textContent = '+$20/yr'
	}
}
const handleTotal = () => {
	if (sliderBall.classList.contains('monthly')) {
		summaryTotalPrice.textContent = `$${payment}/mo`
	} else if (sliderBall.classList.contains('yearly')) {
		summaryTotalPrice.textContent = `$${payment}/yr`
	}
}

changeBtn.addEventListener('click', () => {
	slideNumber = 1
	mobileForms.forEach(form => form.classList.remove('show-slide'))
	mobileForms[1].classList.add('show-slide')
	handleProgress()
})

mobileForwardBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm()
	handleMovingSlides()
	firstSlideNoBackBtn()
	handleProgress()
	handleServicePricesSummary()
	handleServicesPrices()
	handlePlanSummary()
	handlePicks()
	handleTotal()
})
mobileBackBtn.addEventListener('click', () => {
	handleMovingBackwards()
	handleProgress()
	handlePlanSummary()
})
