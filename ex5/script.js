// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

var button = document.getElementById('myButton');

button.addEventListener("click",function() {
    // need to create a new div
    var newBox = document.createElement('div');
    //assign class box to new variable div
    newBox.classList.add('box');
    //grab boxContainer element and append new variable to it
    document.getElementById('boxContainer').appendChild(newBox);
    

    // add new div to boxContainer

    // var boxCont = document.getElementById('boxContainer');
    // boxCont.classList.add('box');
})