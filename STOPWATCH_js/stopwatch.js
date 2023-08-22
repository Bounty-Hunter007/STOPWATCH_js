

//STOP WATCH IN JAVASCRIPT
var msec = document.getElementById('msec')
var sec = document.getElementById('sec')
var min = document.getElementById('min')

var millisec = 0
var seconds = 0
var minutes = 0

var start_function;

function started() {

    start_function = setInterval(function () {

        millisec++
        msec.innerHTML = millisec

        if (millisec >= 100) {
            seconds++
            sec.innerHTML = seconds
            millisec = 0
        }
        else if (seconds >= 60) {
            minutes++
            min.innerHTML = minutes
            seconds = 0
        }


    }, 10) //--> 10 millisec = 1% of 1 sec

    document.getElementById('btn_start').disabled = true

}

function stopped() {
    clearInterval(start_function)

    document.getElementById('btn_start').disabled = false
}

function reset() {
    clearInterval(start_function)

    millisec = 0
    seconds = 0
    minutes = 0

    msec.innerHTML = millisec
    sec.innerHTML = seconds
    min.innerHTML = minutes

    document.getElementById('btn_start').disabled = false

}
