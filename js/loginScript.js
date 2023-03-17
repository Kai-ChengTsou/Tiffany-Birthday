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
const currentTime = new Date();
const birthday = new Date("3/16/2023")
let timeDif = birthday - currentTime;
let dayDif = Math.floor(timeDif / 86400000) % 365 + 1;
const hours = Math.floor(timeDif / 3600000);
const minutes = Math.floor((timeDif % 3600000) / 60000);

logIn.addEventListener('click', function(){

	const checkName = loginName.value.toUpperCase();


	if(checkName === "TIFFANY" && (password.value === "12/06" || password.value === "1206")){
		
		if(dayDif <= 0){
			window.open('choice.html', '_self');
		}
		else{
			errorBox.style.display = "block";
			error.innerText = "Correct! but...";
			errorMessage.innerHTML = "Sorry " + loginName.value + " " + hours + " hours and <br>" + minutes + " mins until your birthday!";
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
	gsap.to(hintBox, {y: 0, duration: 1});
	
});

tryAgain.addEventListener('click', function(){
	gsap.fromTo(errorBox, {opacity: 1}, {opacity: 0, duration:1});
	setTimeout(()=>{errorBox.style.display = "none";}, 1000);
});




