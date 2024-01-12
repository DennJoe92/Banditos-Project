const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");

});     

// Login.js

document.getElementById('signIn').addEventListener('click', function () {
	// Perform login logic here
	alert('Login functionality will be implemented here.');
  });

  // Login.js

document.getElementById('signUp').addEventListener('click', function () {
	// Perform signup logic here
	alert('Signup functionality will be implemented here.');
  });
  