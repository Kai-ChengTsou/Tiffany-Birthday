function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	
}





const loginName = document.getElementById('login-name');
const password = document.getElementById('password-input');
const logIn = document.getElementById('log-in');
const access = document.getElementById('access');
const hint = document.getElementById('hint'); 
const hintBox = document.getElementById('hint-box');
const errorBox = document.getElementById('error-box');
const tryAgain = document.getElementById('try-again');
const error = document.getElementById('error');
const errorMessage = document.getElementById('error-message');
const dateFull = new Date();
const date  = dateFull.getDate();
const month  = dateFull.getMonth() + 1;
const year = dateFull.getFullYear();
let countdown = 0;

if(month == 2){
	countdown = 45 - date;
}
else if(month == 3){
	countdown = 17 - date;
}

logIn.addEventListener('click', function(){

	const checkName = loginName.value.toUpperCase();


	if(checkName === "TIFFANY" && (password.value === "12/06" || password.value === "1206")){
		
		if(year > 2023){
			access.style.display = 'block';
			window.open('choice.html', '_self');
		// gsap.to('#access', {y: 300, duration: 2});
		// gsap.fromTo('#access', {scale: 1}, {scale: 2, duration:1});
		// gsap.fromTo('#access', {opacity: 0}, {opacity: 1, duration:2});
		}
		if(year == 2023 && month >= 3 && date >= 17){
			access.style.display = 'block';
			window.open('choice.html', '_self');
		}
		else{
			errorBox.style.display = "block";
			error.innerText = "Correct! but...";
			errorMessage.innerText = "Sorry " + loginName.value + " " + countdown + " days until your birthday!";
			gsap.fromTo(errorBox, {opacity: 0}, {opacity: 1, duration:1});
		}
		
		
	}
	else if(loginName.value.toUpperCase() === "TIFFANY" && (password.value !== "12/06" || password.value !== "1206")){
		errorBox.style.display = "block";
		error.innerText = "Wrong Passowrd !";
		errorMessage.innerText = "Oh no " + loginName.value + " Check out the hint";
		gsap.fromTo(errorBox, {opacity: 0}, {opacity: 1, duration:1});
	}
	else if(loginName.value.toUpperCase() !== "TIFFANY" && (password.value === "12/06" || password.value === "1206")){
		errorBox.style.display = "block";
		error.innerText = "Wrong Login Name !";
		errorMessage.innerText = "How do you know the password " + loginName.value + " !";
		gsap.fromTo(errorBox, {opacity: 0}, {opacity: 1, duration:1});
	}
	else{
		errorBox.style.display = "block";
		error.innerText = "Error !";
		errorMessage.innerText = "Thanks for visiting " + loginName.value + " !";
		gsap.fromTo(errorBox, {opacity: 0}, {opacity: 1, duration:1});
	}
	
});

hint.addEventListener('click', () =>{
	hintBox.style.display = 'block';
	gsap.fromTo(hintBox, {opacity: 0}, {opacity: 1, duration:1});
	gsap.to(hintBox, {y: -600, duration: 1});
	
});

tryAgain.addEventListener('click', function(){
	gsap.fromTo(errorBox, {opacity: 1}, {opacity: 0, duration:1});
	setTimeout(()=>{errorBox.style.display = "none";}, 1000);
});




