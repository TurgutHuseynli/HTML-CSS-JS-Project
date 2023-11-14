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
let people;
people = JSON.parse(localStorage.getItem('users'))
let checked;
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const loginBtn = document.querySelector('button')
const success = document.querySelector('.alert-success')
success.style.display = 'none'
loginBtn.addEventListener('click', function(){
    checked = false
    for(let i of people){
        if(i.username == usernameInput.value){
            if(i.password == passwordInput.value){
                checked = true
                localStorage.setItem('currentUser', JSON.stringify(i))
                success.style.display = 'block'
                setTimeout(function(){
                    success.style.display = 'none'
                }, 1000)
            }else{
                checked = true
                alert('Incorrect password or empty password field!')
            }
        }
    }
    if(!checked){
        alert('Incorrect username or empty username field!')
    }
})