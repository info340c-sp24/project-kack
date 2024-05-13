
let name = document.querySelector("#name")
let specific_food = document.querySelector("#specific-food")
let quantity = document.querySelector("#quantity")
let date = document.querySelector("#date")
let sub_btn = document.querySelector(".sub_btn")
let subState = true
drawTab()
console.log(sub_btn);
sub_btn.onclick = function () {
    subState = true
    if(name.value == ''){
        name.classList.add('active_ipt')
        subState = false
    }else {
        name.classList.remove('active_ipt')
    }
    if(specific_food.value == ''){
        specific_food.classList.add('active_ipt')
        subState = false
    }else {
        specific_food.classList.remove('active_ipt')
    }
    if(quantity.value == ''){
        quantity.classList.add('active_ipt')
        subState = false
    }else {
        quantity.classList.remove('active_ipt')
    }
    if(date.value == ''){
        date.classList.add('active_ipt')
        subState = false
    }else {
        date.classList.remove('active_ipt')
    }
    if(subState){
        let tabArr = JSON.parse(localStorage.getItem('tabArr'))
        if(tabArr == null){
            tabArr = []
        }
        tabArr.push({
            name: name.value,
            specific_food: specific_food.value,
            quantity: quantity.value,
            date: date.value,
        })
        name.value = ''
        specific_food.value = ''
        quantity.value = ''
        date.value = ''
        localStorage.setItem('tabArr',JSON.stringify(tabArr))
        drawTab()
    }
}
function drawTab() {
    let tabArr = JSON.parse(localStorage.getItem('tabArr'))
    let tbody_list = document.querySelector('.tbody_list')
    let htmls = ``
    if(tabArr !== null){
        for(let i = 0; i < tabArr.length; i++){
            htmls = htmls + `<tr>
                            <td>${tabArr[i].name}</td>
                            <td>${tabArr[i].specific_food}</td>
                            <td>${tabArr[i].quantity}</td>
                            <td>${tabArr[i].date}</td>
                            <td>
                                <button class="btn btn-primary" onclick="removeTab(${i})">Remove</button>
                            </td>
                        </tr>`
        }
        tbody_list.innerHTML = htmls
    }
}

function removeTab(index) {
    let tabArr = JSON.parse(localStorage.getItem('tabArr'))
    tabArr.splice(index,1)
    localStorage.setItem('tabArr',JSON.stringify(tabArr))
    drawTab()
}

