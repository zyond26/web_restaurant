const form = document.querySelector('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const newPassword = document.getElementById('newPassword')
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

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.id === 'newPassword') {
            if (input.value.trim() === '' || !isValidPassword(input.value.trim())) {
                showError(input, `${getFieldName(input)} is required`);
                isRequired = true;
            } else {
                showSuccess(input);
            }
        } else if (input.id === 'password') {
            if (input.value.trim() === '' || !isValidPassword(input.value.trim())) {
                showError(input, `${getFieldName(input)} is required`);
                isRequired = true;
            } else {
                showSuccess(input);
            }
        } else if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
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


// Get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function isValidPassword(password) {
    return password.length >= 7; 
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([username, password, newPassword])) {
		checkLength(username, 5, 15)
		checkLength(password, 7, 25)
        checkLength(newPassword, 7, 25)

        toggleModal()
	}
})

// document.addEventListener("DOMContentLoaded", function () {
//     const changePass = document.getElementById('changePass')
//     const signupLink = document.getElementById('signupLink')
//     const changePassForm = document.getElementById('changePass-form')
//     const registerForm = document.getElementById('register-form')

//     if (changePass && signupLink && changePassForm && registerForm) {
//         changePass.addEventListener("click", function (e) {
//             e.preventDefault()
//             changePassForm.style.display = "block"
//             registerForm.style.display = "none"
//         })

//         signupLink.addEventListener("click", function (e) {
//             e.preventDefault()
//             changePassForm.style.display = "none"
//             registerForm.style.display = "block"
//         })
//     } 
// })