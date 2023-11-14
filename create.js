(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          event.preventDefault()
            if(!form.checkValidity()){
                event.stopPropagation()
            }
            form.classList.add('was-validated')
      }, false)
    })
})()
const createBtn = document.querySelector('button')
const nameInput = document.getElementById('your-name')
const phoneInput = document.getElementById('phone')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('pd')
const success = document.querySelector('.alert-success')
success.style.display = 'none'
const phoneReg = /([0-9]){3}-([0-9]){3}-([0-9]){4}/
let people;
people = JSON.parse(localStorage.getItem('users'))
let valid = false
let newUser = {}
createBtn.addEventListener('click', () => {
    valid = true
    if(nameInput.value.length < 2 || nameInput.value.length > 30){
        valid = false
        alert('Invalid name or empty name field!')
    }
    if(!phoneReg.test(phoneInput.value)){
        valid = false
        alert('Invalid way of writing phone number or empty phone number field!')
    }
    if(usernameInput.value.length < 2 || usernameInput.value.length > 30){
        valid = false
        alert('Ivalid username or empty username field!')
    }
    if(passwordInput.value.length < 2 || passwordInput.value.length > 30){
        valid = false
        alert('Invalid password or empty password field!')
    }
    if(valid){
        newUser = {
            name: nameInput.value,
            phone: phoneInput.value,
            username: usernameInput.value,
            password: passwordInput.value,
            computers: []
        }
        people[people.length] = newUser
        localStorage.setItem('users', JSON.stringify(people))
        success.style.display = 'block'
        setTimeout(function(){
            success.style.display = 'none'
        }, 1000)
    }
})
function restart(){
    people = [{
        name: 'Veli',
        phone: '050-808-6968',
        username: 'u1',
        password: 'p1',
        computers: []
    }]
    localStorage.setItem('users', JSON.stringify(people))
    localStorage.setItem('currentUser', 'not')
}