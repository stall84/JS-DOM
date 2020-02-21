// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

// create variable to grab the section header element
var head2Click = document.getElementById('section-header');
// same thing to assign the text section
var sec2Color = document.getElementById('section')

// add event listener to variable just created to change text color.
head2Click.addEventListener('click',function() {
    // use if/else statement to check if the section element is on no/none display. If it isn't already, set it to none.
    if (sec2Color.style.display != "none") {
    sec2Color.style.display = "none"
    // if the display is already none (dissappeared) set the section element to block to make it reappear
    } else { sec2Color.style.display = "block"
};

});



