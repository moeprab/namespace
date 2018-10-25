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

//        newBox.addEventListener("click", mouseClick);
//        newBox.addEventListener("mouseover", mouseOver);
//        newBox.addEventListener("mouseout", mouseOut);
//
//    }
//}
//
//function mousClick() {
//    this.style.borderColor = "#12e2a3";
//    this.style.backgroundColor = "#ddf516";
//}
//
//function mouseOver() {
//    this.classList.toggle("highlight");
//}
//
//function mouseOut() {
//    this.classList.toggle("highlight");
//    this.removeAttribute("style");
//}

newBox.addEventListener("click", function () {
    this.style.borderColor = "#12e2a3";
    this.style.backgroundColor = "#ddf516";
});

newBox.addEventListener("mouseover", function () {
    this.classList.toggle("highlight");
});

newBox.addEventListener("mouseout", function () {
    this.classList.toggle("highlight");
    this.removeAttribute("style");
});
}

};
