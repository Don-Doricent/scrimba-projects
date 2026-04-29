import { menuArray } from "./data.js";

console.log(menuArray)


const html = menuArray.map(item => {
    return `<p> ${item.name}</p>`
}).join("")

document.getElementById("container").innerHTML = html