var divtempo = document.querySelector('div#tempo')
divtempo.addEventListener('onload', load())

function load() {
    var hor = String(new Date().getHours())
    var min = String(new Date().getMinutes())
    var sec = String(new Date().getSeconds())
    var tempo = `${hor} : ${min} : ${sec}`
    divtempo.innerHTML = tempo
    setTimeout(load, 1000)
    if (hor <= 12 && hor >= 5) {
        document.body.style.backgroundImage = "url('images/manhã.png')"; 
    } else if (hor < 18 && hor > 12) {
        document.body.style.backgroundImage = "url('images/tarde.jpg')";
    } else {
        document.body.style.backgroundImage = "url('images/noite.png')";
    }
}

load()
