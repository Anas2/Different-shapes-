function changeColor(arg) {
    var getdata = document.getElementById("changecolor");
    var heading = document.getElementById("heading");

    if (arg) {
        if (arg == 'red') {
            getdata = getdata.className = "red";
            heading.textContent = "RED SQUARE";
            heading.style.color = 'red';
        }
        if (arg == 'green') {
            getdata = getdata.className = "green";
            heading.textContent = 'GREEN CIRCLE';
            heading.style.color = 'green';
        }
        if (arg == 'blue') {
            getdata = getdata.className = "blue";
            heading.textContent = 'BLUE RECTANGLE';
            heading.style.color = 'blue';
        }
        if (arg == 'reset') {
            getdata = getdata.className = "box";
            heading.textContent = "DEFAULT HEADING"
            heading.style.color = 'black';
        }

    }
}
