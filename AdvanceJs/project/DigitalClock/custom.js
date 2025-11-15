// let localTime = now.toLocaleTimeString();
// const clock = document.getElementById('clock')
// clock.appendChild(  document.createTextNode(localTime));

const clock = document.getElementById('clock')
setInterval( function() {
const now = new Date();
clock.innerHTML = now.toLocaleTimeString();
}, 1000);