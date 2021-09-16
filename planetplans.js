var intro = document.getElementById("intro");
var venus = document.getElementById("venus");
var earth = document.getElementById("earth");
var mars = document.getElementById("mars");
var jupiter = document.getElementById("jupiter");
var saturn = document.getElementById("saturn");
var uranus = document.getElementById("uranus");
var neptune = document.getElementById("neptune");
var pluto = document.getElementById("pluto");
var conclusion = document.getElementById("conclusion");

function nextMercury() {
    intro.style.display = "none";
    mercury.style.display = "block";
}

function backMercury() {
    venus.style.display = "none";
    mercury.style.display = "block";
}

function nextVenus() {
    mercury.style.display = "none";
    venus.style.display = "block";
}

function backVenus() {
    earth.style.display = "none";
    venus.style.display = "block";
}

function nextEarth() {
    venus.style.display = "none";
    earth.style.display = "block";
}

function backEarth() {
    mars.style.display = "none";
    earth.style.display = "block";
}

function nextMars() {
    earth.style.display = "none";
    mars.style.display = "block";
}

function backMars() {
    jupiter.style.display = "none";
    mars.style.display = "block";
}

function nextJupiter() {
    mars.style.display = "none";
    jupiter.style.display = "block";
}

function backJupiter() {
    saturn.style.display = "none";
    jupiter.style.display = "block";
}

function nextSaturn() {
    jupiter.style.display = "none";
    saturn.style.display = "block";
}

function backSaturn() {
    uranus.style.display = "none";
    saturn.style.display = "block";
}

function nextUranus() {
    saturn.style.display = "none";
    uranus.style.display = "block";
}

function backUranus() {
    neptune.style.display = "none";
    uranus.style.display = "block";
}

function nextNeptune() {
    uranus.style.display = "none";
    neptune.style.display = "block";
}

function backNeptune() {
    pluto.style.display = "none";
    neptune.style.display = "block";
}

function nextPluto() {
    neptune.style.display = "none";
    pluto.style.display = "block";
}

function backPluto() {
    conclusion.style.display = "none";
    pluto.style.display = "block";
}

function nextConclusion() {
    pluto.style.display = "none";
    conclusion.style.display = "block";
}

function backToBeginning() {
    conclusion.style.display = "none";
    mercury.style.display = "block";
}