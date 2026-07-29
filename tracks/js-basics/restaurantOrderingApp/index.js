import { menuArray } from "./data.js";

const menuContainer = document.getElementById("menu-container")
const orderContainer = document.getElementById("order-container")
const modal = document.getElementById('modal')
const paymentForm = document.getElementById('payment-form')
const nameInput = document.getElementById('name-input')

let cartArray = []

function renderMenu() {
    const menuHtml = menuArray.map(function(item){
        return `
        <section class="foodItem">
        <span class="emoji">${item.emoji}</span>

        <div class="food-info">
            <h2>${item.name}</h2>

            <p>${item.ingredients.join(", ")}</p>

            <h2 class="price">$${item.price}</h2>
        </div>

        <button class="add-btn" data-id="${item.id}">+</button>
        </section>
        `
    }).join("")

    menuContainer.innerHTML = menuHtml

}

renderMenu()

document.addEventListener('click', function(e) {
    if(e.target.dataset.id) {
        addToCart(e.target.dataset.id)
        console.log(e.target.dataset.id)
    }else if(e.target.dataset.remove){
        removeFromCart(e.target.dataset.remove)
    }else if(e.target.id === "complete-order-btn"){
        modal.classList.remove("hidden")
    }

})


paymentForm.addEventListener('submit', function(e) {
    e.preventDefault()


    modal.classList.add('hidden')

    orderContainer.innerHTML = `
    <div class="success-message">
        Thanks, ${nameInput.value}! Your order is on its way!
    </div>
    `

    cartArray = []

})



function addToCart(itemId){
    const targetMenuObj = menuArray.filter(function(item) {
        return item.id == itemId
    })[0]

    cartArray.push(targetMenuObj)

    renderOrder()
    console.log(cartArray)
}

function removeFromCart(itemId){
   const targetIndex = cartArray.findIndex(function(item) {
    return item.id == itemId
})

cartArray.splice(targetIndex, 1)

renderOrder()
    
}


function renderOrder() {
    const orderHtml = cartArray.map(function(item) {
        return `
        <div class="order-item">
            <h3>${item.name}</h3>

            <p>$${item.price}</p>

            <button class='remove-btn' data-remove='${item.id}'> remove </button>
        </div>
        `
    }).join("")

    const orderSum = cartArray.reduce((acc, currentItem) => {
        return acc + currentItem.price;
    }, 0)


    orderContainer.innerHTML = `
    <h2>Your Order</h2>
    <p>Total Price: $${orderSum}</p>

    <button id="complete-order-btn">
        Complete Order
    </button>

    ${orderHtml}
    `
}

