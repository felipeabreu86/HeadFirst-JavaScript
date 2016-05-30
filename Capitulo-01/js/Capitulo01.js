
	const ATENCAO = "Atenção!";
	
	function touchRock(){
		alertify.prompt('Qual é o seu nome?', 'Digite o seu nome aqui...',
			function(evt, value){
				if (value) {
					alertify.alert(ATENCAO, 'Prazer em conhecer você, ' + value + '.');
					document.getElementById('rockImg').src = 'img/rock_happy.png';
				}
			}
		);
	}