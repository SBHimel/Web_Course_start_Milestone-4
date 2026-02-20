function makeYellow() {
    document.body.style.backgroundColor = 'yellow'
}
function makeRed() {
    document.body.style.backgroundColor = 'red'
}
// ---------- way 2----------
function makegreen() {
    document.body.style.backgroundColor = 'green'
}
document.getElementById("btn").onclick = makegreen;

document.getElementById("btn2").addEventListener("click", makeYellow);

// ----23-2 ------------
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

// option 3: different version
const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

/* addEventListener() ✅ (BEST & PROFESSIONAL WAY) */
const btnm = document.getElementById("btnm");

btnm.addEventListener("click", handleClick);

function handleClick() {
    document.body.style.backgroundColor = "green";
}