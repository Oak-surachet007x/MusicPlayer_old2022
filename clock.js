let time = document.getElementById("current-time");


setInterval(() =>{
    let today = new Date();
    time.innerHTML = today.toLocaleTimeString();
},1000)
