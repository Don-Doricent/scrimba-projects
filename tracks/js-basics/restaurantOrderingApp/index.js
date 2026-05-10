import { menuArray } from "./data.js";

const menuContainer = document.getElementById("menu-container")

let cartArray = []

function renderMenu() {
    const menuHtml = menuArray.map(function(item){
        return `
        <section class="foodItem">
        <span class="emoji">${item.emoji}</span>

        <div class="food-info">
            <h2>${item.name}</h2>

            <p>${item.ingredients.join(", ")}</p>

            <h2 class="price">${item.price}</h2>
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
    }
})

function addToCart(itemId){
    const targetMenuObj = menuArray.filter(function(item) {
        return item.id == itemId
    })[0]

    cartArray.push(targetMenuObj)
    console.log(cartArray)
}

