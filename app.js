$(document).ready(function(){

	var web = 'https://mindicador.cl/api';
	var dolar, uf, utm, euro;
	
	$.ajax({
		url: web, 
		type: 'GET'
	}).then(function(data){
		console.log(data);
		dolar = data.dolar.valor;
		uf = data.uf.valor;
		utm = data.utm.valor;
		euro = data.euro.valor;
		peso = 1 / dolar;

		// console.log(euro)

		$('#dolar').text('$' + dolar.toLocaleString('es-CL'));
		$('#euro').text('$' + euro.toLocaleString('es-CL'));
		$('#uf').text('$' + uf.toLocaleString('es-CL'));
		$('#utm').text('$' + utm.toLocaleString('es-CL'));

	});
});