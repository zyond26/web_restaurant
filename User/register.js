const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const cfPassword = document.getElementById('confirmPass')
var btnSubmit = document.querySelector('.control .btn-submit')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal_header i')
var btnClose = document.querySelector('.modal_footer button')

function toggleModal(e){
    modal.classList.toggle('hide')
}

btnSubmit.addEventListener('click', function(e){
    form.dispatchEvent(new Event('submit'))
    e.preventDefault()
})
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement
	formControl.className = 'form-control error'
	const small = formControl.querySelector('small')
	small.innerText = message
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
	small.innerText = ''
}

// Check email is valid
function checkEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		showSuccess(input)
	} else {
		showError(input, 'Email is not valid')
	}
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.id === 'password') {
            // Add a specific condition for the password input
            if (input.value.trim() === '' || !isValidPassword(input.value.trim())) {
                showError(input, `${getFieldName(input)} is required`)
                isRequired = true
            } else {
                showSuccess(input)
            }
        } else if (input.id === 'phone') {
            // Add a specific condition for the phone input
            if (input.value.trim() === '' || !isValidPhoneNumber(input.value.trim())) {
                showError(input, `${getFieldName(input)} is required`)
                isRequired = true
            } else {
                showSuccess(input)
            }
        } else if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
            isRequired = true
        } else {
            showSuccess(input)
        }
    })

    return isRequired
}

// Check input length
function checkLength(input, min, max) {
    input.value = input.value.trim()

	if (input.value.length < min) {
		showError(input,`${getFieldName(input)} must be at least ${min} characters`)
        return true
	}
    if (input.value.length > max) {
		showError(input,`${getFieldName(input)} must be less than ${max} characters`)
        return true
	} 
    return false
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match')
        return true
	}
    return false
}

// Get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function isValidPassword(password) {
    return password.length >= 7; 
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([username, email, phone, password, cfPassword])) {
		checkLength(username, 5, 15)
		checkLength(password, 7, 25)
		checkEmail(email)
		checkPasswordsMatch(password, cfPassword)

        if (!checkPasswordsMatch(password, cfPassword)) {
            toggleModal()
        }
	}
})

document.addEventListener("DOMContentLoaded", function () {
    const changePass = document.getElementById('changePass')
    const signupLink = document.getElementById("signupLink")
    const changePassForm = document.getElementById('changePass-form')
    const registerForm = document.getElementById("register-form")

    if (loginLink && changePass && signupLink && loginForm && changePassForm && registerForm) {

        changePass.addEventListener("click", function (e) {
            e.preventDefault()
            changePassForm.style.display = "block"
            registerForm.style.display = "none"
        })

        signupLink.addEventListener("click", function (e) {
            e.preventDefault()
            loginForm.style.display = "none"
            registerForm.style.display = "block"
        })
    } 
})
