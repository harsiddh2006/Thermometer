{/* <span id="temp" class="fa"> */ }

const tempload = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = '<i class="bi bi-thermometer"></i>';

    setTimeout(() => {
        temp.innerHTML = '<i class="bi bi-thermometer-low"></i>';
        temp.style.color = "green";
    }, 1000)


    setTimeout(() => {
        temp.innerHTML = '<i class="bi bi-thermometer-half"></i>';
        temp.style.color = "yellow";
    }, 2000)


    setTimeout(() => {
        temp.innerHTML = '<i class="bi bi-thermometer-high"></i>';
        temp.style.color = "red";
    }, 3000)


    setTimeout(() => {
        temp.innerHTML = '<i class="bi bi-thermometer"></i>';
        temp.style.color = "white";

    }, 4000)
}


setInterval(() =>{
    tempload();
},4000);