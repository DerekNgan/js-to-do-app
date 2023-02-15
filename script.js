// Pseudo code for our to do app:

// 1) save the values / DOM elements we will need to interact with

// let's query the DOM for the form element and save it within a variable
const formElement = document.querySelector('form');

// double check whether anything was saved (AKA returned) within your variable
// console.log(formElement); clean up console.logs that you don't need

// let's query the DOM for the input element and save it within a variable
const inputElement = document.querySelector('input');

// let's query the DOM for the ul element and save it within a variable
const ulElement = document.querySelector('ul');

// 2) attach an event listener to the form element
// pass in 2 arguments to the event listener method:
// a) the event you are listening for(in 'string' format)
// b) the callback function which will hold the logic we wish to run ONCE the event "is heard" (AKA occurs on the page)
// every time an event occurs, an event object is generated (we're going to pass that obj into the scope of the callback function)
formElement.addEventListener('submit', function(event) {

    // default behaviour of a form is to refresh the page SO we need to tell it NOT to carry out its default behaviour
    event.preventDefault();

    // log out the unique event object that is generated when the submit event is occurred
    console.log(event);

// save the entered text value from the input within a variable
// NOTE: any information entered into a form element will always be available at the value property
const userToDo = inputElement.value;
// console.log(userToDo);

// NOTE: form inputs ALWAYS return values as strings
// if the user submits the form without entering anything, that returns an empty string

// IF the user submits a todo (check whether the value of the input it NOT empty) then:
// STRETCH ERROR-HANDLING GOAL: how do we avoid adding empty strings with multiple space characters (probably RegEx)
if (userToDo !== "") {

    console.log(userToDo);
// create a li element
const liElement = document.createElement('li');
// add a FA icon to the li by reassigning the value of that property to be the icon HTML
liElement.innerHTML = '<i class="fa-regular fa-square"></i>';
// add the text from the todo that the user entered to the li

// alas this will not work because it will overwrite the innerHTML code
// liElement.textContent = userToDo;

// append the to do as a child to the li element 
// because it is text content, we need to specifically create a text NODE and THEN append it
const toDoText = document.createTextNode(userToDo);
liElement.appendChild(toDoText);

// append the li element to the ul element
ulElement.appendChild(liElement);

// clear the input (value) once the form is submitted:
inputElement.value = "";

// append the li element to the ul element
} else {
    alert('Please enter a valid task! Do not leave the input empty.')
}
// ELSE alert user to please submit a valid to do 
})

// 3) KENZIE'S STEP: how do we track when the task is done?