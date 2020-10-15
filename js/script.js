let trig = document.getElementById("pop-trigger");
let pop = document.getElementById("pop");

trig.addEventListener("mouseover", show);

trig.addEventListener("mouseout", hide);

function show() {
    pop.style.display = "block";
}

function hide() {
    pop.style.display = "none";
}