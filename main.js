const text = document.querySelector('.text')
const bg = document.querySelector('.bg')

let counter = 0;

let interval = setInterval(blur, 36)
setInterval(()=>{
    text.remove();
},5000)

function blur(){
    counter++
    text.innerText = `${counter}%`
    text.style.opacity = scale(counter, 0, 100, 1, .2)
    bg.style.filter=`blur(${scale(counter,100,0,0,77)}px)`
    if(counter>99){
        clearInterval(interval)
    }
    
}


//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers/23202637
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}