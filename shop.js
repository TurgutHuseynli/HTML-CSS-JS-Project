const searchInput = document.querySelector('input')
const allTabPanes = Array.from(document.querySelectorAll('.tab-pane'))
const allNavLinks = Array.from(document.querySelectorAll('.nav-link'))
let computerList = JSON.parse(localStorage.getItem('currentUser')).computers
let fakeList = []
const compTypes = ['Acer', 'HP', 'Asus', 'Deli', 'Lenovo', 'LG', 'Casper', 'Fujitsa', 'Nexus', 'Samsung', 'Toshiba', 'Sony']
let neededList = []
let currentTabPane = ''
let matchedCategories = []
let matched = false
for(let i of compTypes){
    for(let k = 0; k < 20; k++){
        fakeList[fakeList.length] = {
            category: i,
            name: i + ' 1',
            description: i + ' 1 desc',
            price: Math.floor(Math.random() * 320000) + 1
        }
    }
}
for(let i in allNavLinks){
    allNavLinks[i].addEventListener('click', function(){
        neededList = []
        currentTabPane = allTabPanes[i]
        for(let a of allTabPanes){
            a.innerHTML = ''
        }
        neededList = fakeList.filter(fake => fake.category == compTypes[i])
        for(let comp of computerList){
            if(comp.category.toUpperCase() == compTypes[i].toUpperCase()){
                neededList[neededList.length] = comp
            }
        }
        for(let n of neededList){
            currentTabPane.innerHTML += `<div class="computer">
            <img src="https://c.s-microsoft.com/en-us/CMSImages/All-in-One_1040x585.jpg?version=15692d40-cc47-8fe4-2366-334f32795879" alt="No Image">
            <h3>Name: ${n.name}</h3>
            <h3>Description: ${n.description}</h3>
            <h3>Price (AZN): ${n.price}</h3>
            <h3>Is New: Yes</h3>
            <h3>Phone: +994 50 808 69 68</h3>
            <button class="btn btn-info watch">Watch closer</button>
        </div>`
        }
        for(let i of Array.from(document.querySelectorAll('.watch'))){
            i.addEventListener('click', function(){
                for(let i of Array.from(document.getElementsByTagName('img'))){
                    i.style.cursor = 'zoom-in'
                }
            })
        }
    })
}
searchInput.addEventListener('input', function(){
    if(this.value.length == 0){
        for(let a of allTabPanes){
            a.innerHTML = ''
        }
        for(let n of neededList){
            currentTabPane.innerHTML += `<div class="computer">
            <img src="https://c.s-microsoft.com/en-us/CMSImages/All-in-One_1040x585.jpg?version=15692d40-cc47-8fe4-2366-334f32795879" alt="No Image">
            <h3>Name: ${n.name}</h3>
            <h3>Description: ${n.description}</h3>
            <h3>Price (AZN): ${n.price}</h3>
            <h3>Is New: Yes</h3>
            <h3>Phone: +994 50 808 69 68</h3>
            <button class="btn btn-info watch">Watch closer</button>
        </div>`
        }
        for(let i of Array.from(document.querySelectorAll('.watch'))){
            i.addEventListener('click', function(){
                for(let i of Array.from(document.getElementsByTagName('img'))){
                    i.style.cursor = 'zoom-in'
                }
            })
        }
    }else{
        matchedCategories = []
        for(let a of allTabPanes){
            a.innerHTML = ''
        }
        for(let i of compTypes){
            matched = true
            for(let k of this.value.toUpperCase().split('')){
                if(!i.toUpperCase().split('').includes(k)){
                    matched = false
                }
            }
            if(matched){
                matchedCategories[matchedCategories.length] = i
            }
        }
        for(let i of fakeList){
            if(matchedCategories.includes(i.category)){
                currentTabPane.innerHTML += `<div class="computer">
                <img src="https://c.s-microsoft.com/en-us/CMSImages/All-in-One_1040x585.jpg?version=15692d40-cc47-8fe4-2366-334f32795879" alt="No Image">
                <h3>Name: ${i.name}</h3>
                <h3>Description: ${i.description}</h3>
                <h3>Price (AZN): ${i.price}</h3>
                <h3>Is New: Yes</h3>
                <h3>Phone: +994 50 808 69 68</h3>
                <button class="btn btn-info watch">Watch closer</button>
            </div>`
            }
        }
        for(let i of computerList){
            for(let c of matchedCategories){
                if(c.toUpperCase() == i.category.toUpperCase()){
                    currentTabPane.innerHTML += `<div class="computer">
                        <img src="https://c.s-microsoft.com/en-us/CMSImages/All-in-One_1040x585.jpg?version=15692d40-cc47-8fe4-2366-334f32795879" alt="No Image">
                        <h3>Name: ${i.name}</h3>
                        <h3>Description: ${i.description}</h3>
                        <h3>Price (AZN): ${i.price}</h3>
                        <h3>Is New: Yes</h3>
                        <h3>Phone: +994 50 808 69 68</h3>
                        <button class="btn btn-info watch">Watch closer</button>
                    </div>`
                }
            }
        }
        for(let i of Array.from(document.querySelectorAll('.watch'))){
            i.addEventListener('click', function(){
                for(let i of Array.from(document.getElementsByTagName('img'))){
                    i.style.cursor = 'zoom-in'
                }
            })
        }
    }
})