/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector("input")
const convertBtn = document.querySelector("button")
const lengthEl = document.getElementById('length').querySelector('span')
const volumeEl = document.getElementById('volume').querySelector('span')
const massEl = document.getElementById('mass').querySelector('span')

// Conversion base
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

// Conversion function

convertBtn.addEventListener('click', function(){
    let baseValue = Number(inputEl.value)

    if (isNaN(baseValue) || baseValue === 0) {
        alert("Please enter a valid number.")
        return
    }

    // Length converstion
    const metersToFeet = (baseValue * meterToFeet).toFixed(3)
    const feetToMeters = (baseValue / meterToFeet).toFixed(3)
    lengthEl.textContent = `${baseValue} meters = ${metersToFeet} feet | ${baseValue} feet = ${feetToMeters} meters`

    // Volume conversion
    const litersToGallons = (baseValue * literToGallon).toFixed(3)
    const gallonsToLiters = (baseValue / literToGallon).toFixed(3)
    volumeEl.textContent = `${baseValue} liters = ${litersToGallons} gallons | ${baseValue} gallons = ${gallonsToLiters} liters`

    // Mass conversion
    const kilosToPounds = (baseValue * kiloToPound).toFixed(3)
    const poundsToKilos = (baseValue / kiloToPound).toFixed(3)
    massEl.textContent = `${baseValue} kilos = ${kilosToPounds} pounds | ${baseValue} pounds = ${poundsToKilos} kilos`

})

inputEl.addEventListener("keypress", e => {
    if (e.key === "Enter") convertBtn.click()
})