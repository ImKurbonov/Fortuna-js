let container = document.querySelector('.container')
let btn = document.getElementById('spin')
let number = Math.ceil(Math.random() * 1000)

btn.onclick = ()=> {
    container.style.transform = `rotate(${number}deg)`
    number += Math.ceil(Math.random() * 1000)
    console.log(number)
}