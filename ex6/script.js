//Finish the code below to make the counter increment everytime you press the button
//Also, write the listener for the decrement button so that the counter decrements when you click it

// Assign the increment ID to a new variable. do same for decrement ID
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');
// create a variable to assign the counter ID to .. this will be where the numbers are displayed in the document
var counter = document.getElementById('counter');

// create a variable to hold the current value & set it equal to zero
var count = 0; // This variable holds the current value of the counter!

//add an action/function (eventListener) to the increment button
incrementButton.addEventListener('click', function(){

    //that will add 1 every time the button is clicked
    count += 1;
    //then tell the code to write that value of count to the counter ID
    counter.innerHTML = count;
    
});

decrementButton.addEventListener('click',function(){

    count -= 1;
    counter.innerHTML = count;

});

