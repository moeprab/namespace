/********************************
Filename: namespace.js
Author: Paramaporn Prabphala (Moe)
Description: Namespace assignment for MAD9014 class
Date: October 26, 2018
*********************************/

var MOEPRAB = {

    init: function () {

        let newBox = document.createElement("div");
        newBox.className = "box";
        newBox.textContent = "MOEPRAB";

        let boxes = document.getElementById("boxes");
        boxes.appendChild(newBox);

        newBox.addEventListener("click", mouseClick);
        newBox.addEventListener("mouseover", mouseOver);
        newBox.addEventListener("mouseout", mouseOut);

    }
}

function mousClick() {
    this.style.borderColor = "#12e2a3";
    this.style.backgroundColor = "#ddf516";
}

function mouseOver() {
    this.classList.toggle("highlight");
}

function mouseOut() {
    this.classList.toggle("highlight");
    this.removeAttribute("style");
}

//div.addEventListener("click", function () {
//    div.style.borderColor = "#12e2a3";
//    div.style.backgroundColor = "#ddf516";
//});
//
//div.addEventListener("mouseover", function () {
//    div.classList.toggle("highlight");
//});
//
//div.addEventListener("mouseout", function () {
//    div.classList.toggle("highlight");
//    div.removeAttribute("style");
//});
//}
//
//};
