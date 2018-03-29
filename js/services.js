//setting up variables for javascript functions
const myButton = document.getElementById('button');
const myButton2 = document.getElementById('button2');



//first group of mouse events mouseover and mouseout
myButton.addEventListener('mouseover', () => {
  myButton.style.backgroundColor = 'black';
   });
  
  
myButton.addEventListener('mouseout', () => {
  myButton.style.backgroundColor = 'green';
});


//Function to generate an alert message when the button is clicked
myButton.addEventListener('click', () => {
  alert("Thank you for subscribing.");
});

//second group of mouse events
myButton2.addEventListener('mouseover', () => {
  myButton2.style.backgroundColor = 'grey';
   });
   
   
myButton2.addEventListener('mouseout', () => {
  myButton2.style.backgroundColor = 'black';
});

//User is alerted when the form is submitted
myButton2.addEventListener('click', () => {
  alert("Thank you for submitting you interest.");
});