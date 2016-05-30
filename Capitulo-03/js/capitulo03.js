
const ATENCAO = "Atenção!";
const ROCKTIMEOUT = 5000; // milisegundos

var userName;

function alertUser(message) {
	alertify.alert(ATENCAO, message);
}

function greetUser(){	
	if(navigator.cookieEnabled) {
		userName = readCookie('irock_username');	// Lê o Cookie do nome
	}
	
	if(userName) {
		alertUser('Olá, ' + userName + ' eu sou a rocha de estimação.');
	} else {
		alertUser('Olá, eu sou a rocha de estimação.');
	}
}

function touchRock(){
	if(userName) {
		alertUser('Eu gosto de atenção, ' + userName + '. Obrigada.');
		animateRock();
	} else {
		alertify.prompt('Qual é o seu nome?', 'Digite o seu nome aqui...', function(evt, value){
			if (value) {
				userName = value;
				alertUser('Prazer em conhecer você, ' + userName + '.');
				animateRock();
				
				if(navigator.cookieEnabled) {					
					writeCookie('irock_username', userName, (5 * 365));		// Armazena o Cookie do nome
				} else {
					alertUser('Desculpe. Cookies não estão habilitados no seu navegador. Eu não irei lembrar de você.');
				}
			}
		});
	}
}

function animateRock() {
	document.getElementById('rockImg').src = 'img/rock_happy.png';
	setTimeout('document.getElementById("rockImg").src = "img/rock.png";', ROCKTIMEOUT);
}

function resizeRock() {
	document.getElementById('rockImg').style.height = ((window.innerHeight - 100) * 0.9) + 'px';
}