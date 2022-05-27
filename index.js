
let initialNumber = document.querySelector('input').value = 0

function setMetric(){
    let initialNumber = document.querySelector('input').value
    let fixedNumbers = document.getElementsByClassName('fixed-number')

    for(i=0; i < fixedNumbers.length; i++){
        fixedNumbers[i].textContent = initialNumber + " "
    }
    
    let mettersToFeet = 3.28084
    let litersToGaloons = 0.264172
    let kilosToPounds = 2.20462
    
    document.getElementById("feet").textContent = (initialNumber * mettersToFeet).toFixed(3) + " "
    document.getElementById("metters").textContent = (initialNumber / mettersToFeet).toFixed(3) + " "
    
    document.getElementById("gallons").textContent = (initialNumber * litersToGaloons).toFixed(3) + " "
    document.getElementById("liters").textContent = (initialNumber / litersToGaloons).toFixed(3) + " "
    
    document.getElementById("pounds").textContent = (initialNumber * kilosToPounds).toFixed(3) + " "
    document.getElementById("kilos").textContent = (initialNumber / kilosToPounds).toFixed(3) + " "

}