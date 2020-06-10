let radius = document.querySelector('#radius');
let volPrint = document.querySelector('#volume');

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function start() {
for (i = 0; i < canvas.width / 2; i++) {
    ctx.beginPath()
    ctx.arc(150, 150, i, 0, 2 * Math.PI)
    ctx.stroke()
}
}
setTimeout(start, 100)

let calc = document.querySelector('#calc').addEventListener('click', () => {
    ctx.clearRect(0, 0, 300, 300)
    
    if (isNaN(radius.value)) {
        alert('please enter a valid number')
    } else {
    let volume = (Math.pow(radius.value, 3) * (Math.PI * 4)) / 3;
    volPrint.innerHTML = volume
    console.log(volume)
    
    if (radius.value <= canvas.width / 2) {
    ctx.beginPath()
    ctx.arc(150, 150, radius.value, 0, 2 * Math.PI)
    ctx.stroke()
    radius.value = ''
    radius.focus()
    } else {
        alert('Can not draw because there not enough space')
    }
}
})

let clearBtn = document.querySelector('#clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, 300, 300)
    volume.innerHTML = ''
})