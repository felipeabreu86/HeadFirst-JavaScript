/**
	Atenção!
	
	Alguns navegadores, como o Chrome, não suportam Cookies para arquivos locais (file://)
	Os mesmos são gravados apenas quando a página está rodando em um servidor (internet ou local)
	
	Utilize o FireFox para testar Cookies para arquivos locais sem rodar em um servidor.
*/

// Armazena um novo Cookie dado o seu nome, valor e duração em dias
function writeCookie(name, value, days) {
	var expires = '';

	if(days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = '; expires=' + date.toGMTString();
	}
	
	document.cookie = name + '=' + value + expires + '; path=/';
}

// Lê um Cookie dado o seu nome
function readCookie(name) {	
    var searchName = name + '=';
    var cookies = document.cookie.split(';');
	
    for(var i=0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0)==' ') c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0) return c.substring(searchName.length, c.length);
    }
	
	return null;
}

// Apaga um Cookie dado o seu nome
function eraseCookie(name) {
	writeCookie(name, '', -1);
}