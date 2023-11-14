const allTabPanes = Array.from(document.querySelectorAll('.tab-pane'))
const allNavLinks = Array.from(document.querySelectorAll('.nav-link'))
let computerList = JSON.parse(localStorage.getItem('currentUser')).computers
const compTypes = ['acer', 'hp', 'asus', 'deli', 'lenovo', 'lg', 'casper', 'fujitsa', 'nexus', 'samsung', 'toshiba', 'sony']
let matched = false
for(let i in allNavLinks){
    allNavLinks[i].addEventListener('click', function(){
        for(let a of allTabPanes){
            a.innerHTML = ''
        }
        for(let k = 0; k < 20; k++){
            allTabPanes[i].innerHTML += `<div class="computer">
                <img src="https://c.s-microsoft.com/en-us/CMSImages/All-in-One_1040x585.jpg?version=15692d40-cc47-8fe4-2366-334f32795879" alt="No Image">
                <h3>Name: ${allTabPanes[i].id} 1</h3>
                <h3>Description: ${allTabPanes[i].id} 1 desc</h3>
                <h3>Price (AZN): ${Math.floor(Math.random()*320000)+1}</h3>
                <h3>Is New: Yes</h3>
                <h3>Phone: +994 50 808 69 68</h3>
                <button class="btn btn-info" onclick="alert('Added to your basket!')">Add to basket</button>
            </div>`
        }
        for(let comp of computerList){
            if(comp.category.toUpperCase() == compTypes[i].toUpperCase()){
                allTabPanes[i].innerHTML += `<div class="computer">
                <img src="https://c.s-microsoft.com/en-us/CMSImages/All-in-One_1040x585.jpg?version=15692d40-cc47-8fe4-2366-334f32795879" alt="No Image">
                <h3>Name: ${comp.name} 1</h3>
                <h3>Description: ${comp.name} 1 desc</h3>
                <h3>Price (AZN): ${Math.floor(Math.random()*320000)+1}</h3>
                <h3>Is New: Yes</h3>
                <h3>Phone: ${JSON.parse(localStorage.getItem('currentUser')).phone}</h3>
                <button class="btn btn-info" onclick="alert('Added to your basket!')">Add to basket</button>
            </div>`
            }
        }
    })
}
const searchInput = document.querySelector('input')
const search = document.querySelector('.search')
search.addEventListener('click', function(){
    matched = false
    for(let i of compTypes){
        if(i.toUpperCase() == searchInput.value.toUpperCase() && !matched){
            matched = true
            alert(`Click ${i.toUpperCase()} in the left side of the page.`)
        }
    }
    if(!matched){
        alert('Not found any computers. Please, check for any mistakes in your search.')
    }
})