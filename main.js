let people = []
let spanName = document.querySelector('.name')
if(localStorage.getItem('users') === null){
    people = [{
        name: 'Veli',
        phone: '050-808-6968',
        username: 'u1',
        password: 'p1',
        computers: []
    }]
    localStorage.setItem('users', JSON.stringify(people))
}else{
    people = JSON.parse(localStorage.getItem('users'))
}
const myComputers = document.querySelector('.btn-primary')
const startShopping = document.querySelector('.btn-warning')
const logIn = document.querySelector('.btn-success')
const logOutBtn = document.querySelector('.btn-danger')
function updateSite(){
    if(localStorage.getItem('currentUser') === null){
        localStorage.setItem('currentUser', 'not')
        spanName.innerHTML = 'Not In Account Yet'
        myComputers.style.display = 'none'
        logOutBtn.style.display = 'none'
        logIn.style.display = 'inline-block'
    }else if(localStorage.getItem('currentUser') === 'not'){
        spanName.innerHTML = 'Not In Account Yet'
        myComputers.style.display = 'none'
        logOutBtn.style.display = 'none'
        logIn.style.display = 'inline-block'
    }else{
        spanName.innerHTML = JSON.parse(localStorage.getItem('currentUser')).username
        myComputers.style.display = 'inline-block'
        logOutBtn.style.display = 'inline-block'
        logIn.style.display = 'none'
    }
}
updateSite()
function logOut(){
    localStorage.setItem('currentUser', 'not')
    updateSite()
}