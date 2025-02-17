let secondArrow = document.querySelector('.s'),
minuteArrow = document.querySelector('.m'),
hourArrow = document.querySelector('.h'),
hoursBox = document.querySelector('.hours'),
minutesBox = document.querySelector('.minutes');

//new Date() - создает нам объект с информацией о дате и времени
function startTime() {
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    secondArrow.style = `transform:rotate(${seconds * 6}deg);
                         transition: 1s linear;`
    minuteArrow.style = `transform:rotate(${minutes * 6}deg);
                         transition: 1s linear;`
    hourArrow.style = `transform:rotate(${hours * 30}deg);
                         transition: 1s linear;`


    hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
    minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes

    setTimeout(() => startTime(), 1000)


}
startTime()

//рекурсия это когда функци запускает саму себя
//setTimeout() - встроенная функция которая выполняет что-то с указанной задержкой

// let i = 1 

// function loop() {
//     if(i < 10) {
//         console.log(i);

//         i++
//         setTimeout(() => loop(), 1000)
//     }
// }

// loop()


let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')
links.forEach((el,i) => {
    el.addEventListener('click', () => {
        removeActive()
        el.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el,i) => {
    el.classList.remove('active')
    tabs[i].classList.remove('active')
    })
}


let stopSeconds = document.querySelector(".stopwatch__seconds"),
    stopMinutes = document.querySelector(".stopwatch__minutes"),
    stopHours = document.querySelector(".stopwatch__hours"),
    stopBtn = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span')

    
stopBtn.addEventListener('click', () => {
    if(stopBtn.innerHTML == 'start') {
            stopBtn.innerHTML = 'stop'
            span.classList.add('active')
            let i = 0
            setTimeout(() => startSecundomer(stopBtn, i), 1000)
        }else if(stopBtn.innerHTML == 'stop') {
            stopBtn.innerHTML = 'clear'
            span.classList.remove('active')
            span.classList.add('active_clear')
        }else {
            stopBtn.innerHTML = 'clear'
            span.classList.remove('active_clear')
            stopSeconds.innerHTML = 0
            stopMinutes.innerHTML = 0
            stopHours.innerHTML = 0
            setTimeout( () => stopBtn.innerHTML = 'start', 2500)
        }
    })

    function startSecundomer(btn, i) {
        if(btn.innerHTML == 'stop') {
            if(i == 59) {
                i = 0
                stopSeconds.innerHTML = i
                if(stopMinutes.innerHTML == 59) {
                    stopMinutes.innerHTML = 0
                    stopHours.innerHTML++
                }else {
                    stopMinutes.innerHTML++
                }
            }else {
                i++
                stopSeconds.innerHTML = i
            }
            setTimeout(() => startSecundomer(btn, i), 1000)
        }
    }

