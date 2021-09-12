let divtempo = document.querySelector('div#tempo')
divtempo.addEventListener('onload', load())

function load() {
    let hor = String(new Date().getHours())
    let min = String(new Date().getMinutes())
    let sec = String(new Date().getSeconds())
    let tempo = `${hor} : ${min} : ${sec}`
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
