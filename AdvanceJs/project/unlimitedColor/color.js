
    const colors = [
    "#ff0000", "#ff7f00", "#ffff00", "#7fff00", "#00ff00",
    "#00ff7f", "#00ffff", "#007fff", "#0000ff", "#7f00ff",
    "#ff00ff", "#ff007f", "#ff3366", "#ff6666", "#ff9966",
    "#ffcc66", "#ccff66", "#66ff66", "#66ffcc", "#66ccff"
    ];

   let ColorIndex = 0;
   let setIntervalId; 
    const bgChange = function(){
        let  body    =  document.querySelector('body');
        if(ColorIndex >= colors.length) { 
            ColorIndex = 0; // loop back
            console.log("loop");
            
        }
        body.style.backgroundColor = colors[ColorIndex];
        ColorIndex++;
        console.log("color");
    }
function start(){
    if(!setIntervalId){
        setIntervalId =  setInterval(bgChange, 1000)
    }
}

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(setIntervalId);
    setIntervalId = null;
});