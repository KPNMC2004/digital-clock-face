const secondHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const digitalTime = document.querySelector(".time");

function setClockFace() {
    const currentTime = new Date();
    
    const seconds = currentTime.getSeconds();
    secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = currentTime.getMinutes();
    minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = currentTime.getHours();
    hoursDegrees = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


    let time = doubleDigit(hours) + ":" + doubleDigit(minutes) + ":" + doubleDigit(seconds) ;

    digitalTime.innerHTML = time
}

function doubleDigit(num) {
    return (num < 10 ? '0' :'') + num;
}

setInterval(setClockFace, 1000);
