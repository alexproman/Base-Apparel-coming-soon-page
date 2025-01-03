
const form = document.querySelector('.form');
const emailInp = document.getElementById('email');
const errMsg = document.querySelector('.error-msg');
const errIcon= document.querySelector('.error-icon');
const checkIcon= document.querySelector('.check-icon');
const vaildEmailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";


// Submit Function

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    if (emailInp.value.match(vaildEmailPattern)) {
        console.log('Form submitted successfully!');
        emailInp.value = '';
        checkIcon.classList.remove('show')
        
    } else {
        console.log('Invalid email, please check your input.');
    }
});


// Email verification function while typing in the input field
emailInp.addEventListener('keyup', () => {
    const isEmpty = emailInp.value === '';
    const isValid = emailInp.value.match(vaildEmailPattern);

    checkIcon.classList.toggle('show', !isEmpty && isValid);
    errMsg.classList.toggle('show', !isEmpty && !isValid);
    errIcon.classList.toggle('show', !isEmpty && !isValid);
    emailInp.classList.toggle('err', !isEmpty && !isValid);

    if (isEmpty || isValid) {
        return isValid;
    } else {
        return false;
    }
});
