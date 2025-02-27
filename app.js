let myDiv = document.getElementById('my-div');

//Random Background Color
const backGroundColor = document.querySelector('.container');
let colorChangeTimeout;
const colors = [
    "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,23,83,1) 35%, rgba(50,21,99,1) 41%, rgba(0,212,255,1) 100%)",
    "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
    "radial-gradient(circle, rgba(174,229,238,1) 0%, rgba(148,168,233,1) 100%)",
    "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,49,45,1) 100%)",
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,96,1) 50%, rgba(252,176,69,1) 100%)",
    "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
    "linear-gradient(109.5deg, rgb(13, 11, 136) 9.4%, rgb(86, 255, 248) 78.4%)",
    "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
    "linear-gradient(179.2deg, rgb(34, 34, 34) 0%, rgb(8, 0, 153) 29.7%, rgb(118, 6, 166) 63.4%, rgba(233, 0, 64, 0.58) 100.1%)"
    
]

function randomColors(){
    // const randomIndex = Math.floor(Math.random() * colors.length);
    // backGroundColor.style.backgroundImage = colors[randomIndex];
    clearTimeout(colorChangeTimeout); // Clear the previous timeout to avoid queueing up multiple changes

    colorChangeTimeout = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        backGroundColor.style.backgroundImage = colors[randomIndex];
    }, 100); // Change color every 100ms (adjust as needed)
}

//detecting touch device
function isTouchDevice(){
    //we try to create Touchevent it would fail for desktops and throw an error
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

const move = (e) => {
     //try, catch to avoid any errors for touch screen(error thrown user doesn't move his finger) 
     try{
        //PageX $ PageY return the position of clients cursor from top left of the screen
        let x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        let y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
        
        //set the left and top position based on mouse position
       myDiv.style.left = x + "px";
       myDiv.style.top = y + "px";

     } catch(e){
        console.error("An error occurred while moving the element:", e);
     }
}

//for mouse
document.addEventListener('mousemove', (e) => {
    move(e)
    randomColors(e)
})

//for touch
document.addEventListener('touchmove', (e) => {
    move(e)
    randomColors(e)
})

