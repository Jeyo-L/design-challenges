let monthsElem = document.querySelector("#Months");
let weeksElem = document.querySelector("#Weeks");
let daysElem = document.querySelector("#Days");
let hoursElem = document.querySelector("#Hours");
let minutesElem = document.querySelector("#Minutes");
let secondsElem = document.querySelector("#Seconds");


let targetDate = new Date("January 26, 2025 00:00:00").getTime();


function updateCountdown() {
    let now = new Date().getTime(); // Current time
    let downtime = targetDate - now; // Remaining time

    // Time constants
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = week * 4.345; 

   
    let months = Math.floor(downtime / month);
    downtime -= months * month;

    let weeks = Math.floor(downtime / week);
    downtime -= weeks * week;

    let days = Math.floor(downtime / day);
    downtime -= days * day;

    let hours = Math.floor(downtime / hour);
    downtime -= hours * hour;

    let minutes = Math.floor(downtime / minute);
    downtime -= minutes * minute;

    let seconds = Math.floor(downtime / second);

    
    months = months < 10 ? "0" + months : months;
    weeks = weeks < 10 ? "0" + weeks : weeks;
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    
    monthsElem.innerHTML = months;
    weeksElem.innerHTML = weeks;
    daysElem.innerHTML = days;
    hoursElem.innerHTML = hours;
    minutesElem.innerHTML = minutes;
    secondsElem.innerHTML = seconds;

    
    setTimeout(updateCountdown, 1000);
}


updateCountdown();
