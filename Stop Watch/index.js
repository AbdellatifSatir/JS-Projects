let secondsElapsed = 0;
let interval = null;
const time = document.getElementById('time');


function padStart(value){
    // pad the value with 0 if it is less than 10
    return value.toString().padStart(2, '0');
}

function setTime(){
    // calculate minutes and seconds
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer(){
    // increment secondsElapsed by 1
    secondsElapsed++;
    setTime();
}

function startClock(){
    // if interval is not null, stop the clock
    if (interval) stopClock();
    // call timer every 1000ms 
    interval = setInterval(timer, 1000); 
}

function stopClock(){
    // clear the interval
    clearInterval(interval);
}

function resetClock(){
    // stop the clock and reset the secondsElapsed
    stopClock();
    secondsElapsed = 0;
    setTime();
}
