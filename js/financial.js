//variable for element by Id
const myButton = document.getElementById('button');


//corresponding mouse events
myButton.addEventListener('mouseover', () => {
  myButton.style.backgroundColor = 'black';
   });
  
  
myButton.addEventListener('mouseout', () => {
  myButton.style.backgroundColor = 'green';
});


//message displayed for click event
myButton.addEventListener('click', () => {
  alert("Thank you for subscribing");
git });