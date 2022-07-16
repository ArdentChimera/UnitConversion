/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const oneMeter = 3.281
const oneLiter = 0.264
const oneKilo = 2.204
let convertEl = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-box")
let metersFeetEl = document.getElementById("meters-feet")
let feetMetersEl = document.getElementById("feet-meters")
let litersGallonsEl = document.getElementById("liters-gallons")
let gallonsLitersEl = document.getElementById("gallons-liters")
let kilogramsPoundsEl = document.getElementById("kilos-pounds")
let poundsKilogramsEl = document.getElementById("pounds-kilos")

convertEl.addEventListener("click", function() {

    let input = inputEl.value

    metersFeetEl.textContent = `${input} meters = ${(input * oneMeter).toFixed(3)} feet`
    feetMetersEl.textContent = `${input} feet = ${(input / oneMeter).toFixed(3)} meters`

    litersGallonsEl.textContent = `${input} liters = ${(input * oneLiter).toFixed(3)} gallons`
    gallonsLitersEl.textContent = `${input} gallons = ${(input / oneLiter).toFixed(3)} liters`

    kilogramsPoundsEl.textContent = `${input} kilograms = ${(input * oneKilo).toFixed(3)} pounds`
    poundsKilogramsEl.textContent = `${input} pounds = ${(input / oneLiter).toFixed(3)} kilograms`

})