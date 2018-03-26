const myButton = document.getElementById('button');

myButton.addEventListener('mouseover', () => {
  myButton.style.backgroundColor = 'black';
   });
  
  
myButton.addEventListener('mouseout', () => {
  myButton.style.backgroundColor = 'green';
});

myButton.addEventListener('click', () => {
  alert("Thank you for subscribing");
});