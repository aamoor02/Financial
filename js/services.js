const myButton = document.getElementById('button');
const myButton2 = document.getElementById('button2');




myButton.addEventListener('mouseover', () => {
  myButton.style.backgroundColor = 'black';
   });
  
  
myButton.addEventListener('mouseout', () => {
  myButton.style.backgroundColor = 'green';
});

myButton.addEventListener('click', () => {
  alert("Thank you for subscribing.");
});


myButton2.addEventListener('mouseover', () => {
  myButton2.style.backgroundColor = 'grey';
   });
   
   
myButton2.addEventListener('mouseout', () => {
  myButton2.style.backgroundColor = 'black';
});

myButton2.addEventListener('click', () => {
  alert("Thank you for submitting you interest.");
});