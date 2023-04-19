let crc = document.getElementById("movement").style

let top1 = 200
let left = 100
let right = 1
let bottom = 1

let step = 10

window.addEventListener("keydown", (event)=>{
   
    switch (event.key){
        case "Down":
        case "ArrowDown":
            top1+=step
            crc.top = top1+"px"
        break
        case "Up":
        case "ArrowUp":
            top1-=step
            crc.top = top1+"px"
        break
        case "ArrowLeft":
            case "Left":
           left-=step
           crc.left = left+"px"
                break
        case "ArrowRight":
        case "Right":
            left+=step
            crc.left = left+"px"
        break
    }
    // console.log(event);
})

function createBubble(){
    const section = document.querySelector('section')
    const createElement = document.createElement('span')
    var size = 40

    createElement.style.width = size + "px"
    createElement.style.height = size + "px"
    createElement.style.left = Math.random() * innerWidth + "px"
    section.appendChild(createElement)

    setTimeout(()=>{
        createElement.remove()
    }, 5000)
}

setInterval(createBubble, 200)


window.addEventListener('mousemove',(event)=>{
    crc.left = event.clientX + "px"
    crc.top = event.clientY + "px"
})
// window.addEventListener('mousemove')