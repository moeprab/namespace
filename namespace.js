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

        div.addEventListener("click", function () {
            div.style.borderColor = "#12e2a3";
            div.style.backgroundColor = "#ddf516";
        });

        div.addEventListener("mouseover", function () {
            div.classList.toggle("highlight");
        });

        div.addEventListener("mouseout", function () {
            div.classList.toggle("highlight");
            div.removeAttribute("style");
        });
    }
};
