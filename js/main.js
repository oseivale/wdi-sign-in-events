// When the user presses the .signin button, display the modal window
// When the user presses the .close button, hide the modal window
// When the user presses the .submit button, add an .error class to both input elements
// When the user puts their cursor in one of the input fields, remove the .error class
// (Bonus) Allow the user to click the .modal to close itself
// Tricky, consider what happens when two elements that are overlapping are both waiting for a click

document.addEventListener('DOMContentLoaded', function(){

var signIn = document.querySelector('.signin');
var modalWindow = document.querySelector('.modal');
var close = document.querySelector('.close');
var submitButton = document.querySelector('.submit');
var inputs = document.querySelectorAll('input');

signIn.addEventListener('click', function(){
  modalWindow.style.display = 'block';
})

close.addEventListener('click', function(){
  modalWindow.style.display = 'none';
})

modalWindow.addEventListener('click', function(){
  modalWindow.style.display = 'none';
})

submitButton.addEventListener('click', function(){
  inputs.forEach(function(input){
    input.classList.add('error');
  })

});

inputs.forEach(function(input){
  input.addEventListener('click', function(){
    input.classList.remove('error');
  })
})

});
