let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-conversion")
let volumeEl = document.getElementById("volume-conversion")
let massEl = document.getElementById("mass-conversion")


function unitConverter() {
    let value = Number(inputEl.value);
    let meterFeet = value * 3.281;
    let feetMeter = value / 3.281;

    let literGallon = value * 0.264;
    let gallonLiter = value / 0.264;

    let kiloPound = value * 2.204;
    let poundKilo = value / 2.204;

    if (value === 1) {
        lengthEl.textContent = `${value} Meter = ${meterFeet.toFixed(3)} Feet | ${value} Feet = ${feetMeter.toFixed(3)} Meter`;
        volumeEl.textContent = `${value} Liter = ${literGallon.toFixed(3)} Gallons | ${value} Liter = ${gallonLiter.toFixed(3)} Gallons`
        massEl.textContent = `${value} Kilogram = ${kiloPound.toFixed(3)} Pounds | ${value} Pound = ${poundKilo.toFixed(3)} Kilogram`
        console.log("first")
    }
    else {
        lengthEl.textContent = `${value} Meters = ${meterFeet.toFixed(3)} Feet | ${value} Feet = ${feetMeter.toFixed(3)} Meter`;
        volumeEl.textContent = `${value} Liters = ${literGallon.toFixed(3)} Gallons | ${value} Liters = ${gallonLiter.toFixed(3)} Gallons`
        massEl.textContent = `${value} Kilogram = ${kiloPound.toFixed(3)} Pounds | ${value} Pounds = ${poundKilo.toFixed(3)} Kilogram`

    }
}
