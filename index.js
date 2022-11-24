let score1 = 00;
let score2 = 00;
//home
let home = document.getElementById("home");

//guest
let guest = document.getElementById("guest");

function addOnePt() {
    score2++;
    guest.innerText = score2;
}

function addTwoPt() {
    score2+= 2;
    guest.innerText = score2;
}

function addThreePt() {
    score2+= 3;
    guest.innerText = score2;
}

function addOnePt2() {
    score1++;
    home.innerText = score1;
}

function addTwoPt2() {
    score1+= 2;
    home.innerText = score1;
}

function addThreePt2() {
    score1+= 3;
    home.innerText = score1;
}

function restart(){
    score1 = 0;
    score2 = 0;
    guest.innerText = score2;
    home.innerText = score1;
}

