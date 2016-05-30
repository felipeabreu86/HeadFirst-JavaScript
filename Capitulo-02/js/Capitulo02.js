
	const TAXRATE 		= 0.0925;
	const DONUTPRICE 	= 0.50;
	const ATENCAO 		= "Atenção!";
		
	function updateOrder() {
		
		var numCakeDonuts 	= retornaValorInteiroDoElemento('cakedonuts');
		var numGlazedDonuts = retornaValorInteiroDoElemento('glazeddonuts');			
		var subTotal 		= calculaSubTotalDonuts(numCakeDonuts, numGlazedDonuts);	
		var tax 			= calculaTaxasDonuts(subTotal);
		var total 			= calculaTotalDonuts(subTotal, tax);
		
		document.getElementById('subtotal').value 	= '$ ' + subTotal.toFixed(2);
		document.getElementById('tax').value 		= '$ ' + tax.toFixed(2);
		document.getElementById('total').value 		= '$ ' + total.toFixed(2);
	}
	
	function retornaValorInteiroDoElemento(idElemento) {
	
		var valorInteiro = parseDonuts(document.getElementById(idElemento).value);
		
		if (isNaN(valorInteiro))
			valorInteiro = 0;
		
		return valorInteiro;
	}

	function parseDonuts(donutString){
		
		var numDonuts = parseInt(donutString);
		
		if(donutString.toLowerCase().indexOf('dozen') != -1 ||
		   donutString.toLowerCase().indexOf('dúzia') != -1)
			numDonuts *= 12;
		
		return numDonuts;
	}

	function calculaSubTotalDonuts(numCakeDonuts, numGlazedDonuts) {
		return (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
	}

	function calculaTaxasDonuts(subTotal) {
		return (subTotal) * TAXRATE;
	}

	function calculaTotalDonuts(subTotal, tax) {
		return subTotal + tax;
	}

	function placeOrder(form) {
		
		if(document.getElementById('name').value == '')
			alertify.alert(ATENCAO, 'Você precisa fornecer um nome antes de enviar o pedido!');
		else if (document.getElementById('pickupminutes').value == '' || 
				 isNaN(document.getElementById('pickupminutes').value))
			alertify.alert(ATENCAO, 'Você precisa fornecer o número de minutos até a coleta antes de enviar o pedido!');
		else
			alertify.alert(ATENCAO, 'Pedido enviado com sucesso!'); // form.submit();
	}
