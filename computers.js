(() => {
    'use strict'
    const form = document.querySelector('.needs-validation')
    document.getElementById('add').addEventListener('click', event => {
          event.preventDefault()
            if(!form.checkValidity()){
                event.stopPropagation()
            }
            form.classList.add('was-validated')
    }, false)
})()
let me = JSON.parse(localStorage.getItem('currentUser'))
let computerList = JSON.parse(localStorage.getItem('currentUser')).computers
function updateSite(){
    document.querySelector('tbody').innerHTML = ''
    for(let i of computerList){
        document.querySelector('tbody').innerHTML += `<tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td><img src="${i.image}" alt="A Computer" class="zoom"></td>
            <td>${String(i.price)}</td>
            <td><button class="btn btn-danger me-1" id="${i.id}d">Delete</button><button class="btn btn-primary" id="${i.id}e" data-bs-toggle="modal" data-bs-target="#newComp">Edit</button></td>
        </tr>`
    }
}
updateSite()
let newComputer = {}
const clear = document.getElementById('clear')
const categoryInput = document.getElementById('category')
const isNew = document.getElementById('is-new')
const gmt = document.getElementById('gmt')
const compName = document.getElementById('comp-name')
const priceInput = document.getElementById('price')
const description = document.getElementById('description')
const imageInput = document.getElementById('image')
const om = document.getElementById('om')
const central = document.getElementById('central')
const gm = document.getElementById('gm')
const os = document.getElementById('os')
const videoCard = document.getElementById('video')
categoryInput.value = 'Acer'
isNew.value = 'YES'
gmt.value = 'HDD'
clear.onclick = () => {
    for(let i of document.querySelectorAll('input')){
        i.value = ''
    }
}
imageInput.addEventListener('input', function(){
    document.getElementById('pre').src = this.value
})
let valid = false
let a;
let currentId = ''
let currentIndex = 0
document.getElementById('plus').addEventListener('click', () => {
    document.getElementById('add').innerHTML = 'Add a Computer'
})
document.getElementById('add').onclick = () => {
    if(document.getElementById('add').innerHTML == 'Add a Computer'){
        valid = true
        for(let i of document.querySelectorAll('input')){
            if(i.value.length == 0){
                valid = false
            }
        }
        if(!valid){
            alert('One of the fields is empty!')
        }else{
            if(priceInput.value < 0 || priceInput.value > 320000){
                valid = false
                alert('Invalid price!')
            }
        }
        if(valid){
            newComputer = {
                id: computerList.length > 0 ? computerList.at(-1).id + 1 : 1001,
                category: categoryInput.value,
                name: compName.value,
                price: +(priceInput.value),
                description: description.value,
                image: imageInput.value,
                om: +(om.value),
                central: central.value,
                gm: +(gm.value),
                gmt: gmt.value,
                os: os.value,
                videoCard: +(videoCard.value)
            }
            computerList[computerList.length] = newComputer
            me = JSON.parse(localStorage.getItem('currentUser'))
            me.computers = computerList
            localStorage.setItem('currentUser', JSON.stringify(me))
            alert('Successfully added new computer!')
            updateSite()
        }
    }else{
        valid = true
        categoryInput.value != '' ? computerList[currentIndex].category = categoryInput.value : valid = false
        compName.value != '' ? computerList[currentIndex].name = compName.value : valid = false
        priceInput.value != '' ? computerList[currentIndex].price = +(priceInput.value) : valid = false
        description.value != '' ? computerList[currentIndex].description = description.value : valid = false
        imageInput.value != '' ? computerList[currentIndex].image = imageInput.value : valid = false
        om.value != '' ? computerList[currentIndex].om = +(om.value) : valid = false
        central.value != '' ? computerList[currentIndex].central = central.value : valid = false
        gm.value != '' ? computerList[currentIndex].gm = gm.value : valid = false
        gmt.value != '' ? computerList[currentIndex].gmt = gmt.value : valid = false
        os.value != '' ? computerList[currentIndex].os = os.value : valid = false
        videoCard.value != '' ? computerList[currentIndex].videoCard = +(videoCard.value) : valid = false
        if(valid){
            me = JSON.parse(localStorage.getItem('currentUser'))
            me.computers = computerList
            localStorage.setItem('currentUser', JSON.stringify(me))
            updateSite()
            alert('Successfully changed the computer!')
        }else{
            alert('One of the fields was empty!')
        }
    }
}
document.addEventListener('click', (e) => {
    if(e.target.innerHTML == 'Delete'){
        a = confirm('Are you sure that you want to delete this?')
        if(a){
            computerList = computerList.filter(comp => comp.id != parseInt(e.target.id))
            me = JSON.parse(localStorage.getItem('currentUser'))
            me.computers = computerList
            localStorage.setItem('currentUser', JSON.stringify(me))
            updateSite()
        }
    }
    if(e.target.innerHTML == 'Edit'){
        document.getElementById('add').innerHTML = 'Save changes'
        currentId = parseInt(e.target.id)
        for(let i in computerList){
            if(computerList[i].id == currentId){
                currentIndex = i
            }
        }
    }
    if(e.target.innerHTML == 'New Computer'){
        document.getElementById('add').innerHTML = 'Add a Computer'
    }
})