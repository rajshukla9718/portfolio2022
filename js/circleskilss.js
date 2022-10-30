// <!-- html skill  -->
let htmlnumber = document.getElementById("htmlnumber");
let htmlcounter = 0;
setInterval(() => {
    if (htmlcounter == 65) {
        clearInterval();
    }
    else {
        htmlcounter += 1;
        htmlnumber.innerHTML = "HTML " + htmlcounter + "%";
    }
}, 30);

// <!-- css skill -->
let cssnumber = document.getElementById("cssnumber");
let csscounter = 0;
setInterval(() => {
    if (csscounter == 75) {
        clearInterval();
    }
    else {
        csscounter += 1;
        cssnumber.innerHTML = "CSS " + csscounter + "%";
    }
}, 27);


// <!-- js skill  -->
let jsnumber = document.getElementById("jsnumber");
let jscounter = 0;
setInterval(() => {
    if (jscounter == 30) {
        clearInterval();
    }
    else {
        jscounter += 1;
        jsnumber.innerHTML = "JS " + jscounter + "%";
    }
}, 60);
