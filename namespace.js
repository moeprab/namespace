/********************************
Filename: namespace.js
Author: Paramaporn Prabphala (Moe)
Description: Namespace assignment for MAD9014 class
Date: October 26, 2018
*********************************/



var MOEPRAB = {

    init: function () {

        let newBox = document.createElement("section");
        MOEPRAB.className = "box";
        MOEPRAB.textContent = "MOEPRAB";

        let boxes = document.getElementById("boxes");
        boxes.appendChild(newBox);

        newBox.addEventListener("click", mouseClick);
        newBox.addEventListener("mouseover", mouseOver);
        newBox.addEventListener("mouseout", mouseOut);
    }

}

function mouseClick() {
    this.style.borderColor = "#12e2a3";
    this.style.backgroundColor = "#ddf516";
}

function mouseOver(e) {
    e.target.classList.toggle("highlight");
}

function mouseOut(e) {
    e.target.classList.toggle("highlight");
    e.target.removeAttribute('style');
}
