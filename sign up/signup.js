// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

document.getElementById("signUp").addEventListener('click', () => {
	document.getElementById("container").classList.add("right-panel-active")}
);

document.getElementById("signIn").addEventListener('click', () => {
	document.getElementById("container").classList.remove("right-panel-active")}
);