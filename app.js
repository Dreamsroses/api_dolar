$(document).ready(function(){
	// alert('holaaaa');

	var web = 'https://mindicador.cl/api';
	var uf, utm, euro, dolar;

	$.ajax({
		url: web, 
		type: 'GET'
	}).then(function(data){
		console.log(data);
		uf = data.uf.valor;
		utm = data.utm.valor;
		euro = data.euro.valor;
		dolar = data.dolar.valor;	
		peso = 1 / dolar;

// console.log(euro)
		$('#uf').text('$' + uf.toLocaleString('es-CL'));
		$('#utm').text('$' + utm.toLocaleString('es-CL'));
		$('#euro').text('$' + euro.toLocaleString('es-CL'));
		$('#dolar').text('$' + dolar.toLocaleString('es-CL'));

	$('#conversor').click(function(){
		// alert(dolar);
		 var pesos = $('#pesos').val(); 
		 $('#resultado-dolar').text(pesos / dolar);
		 $('#resultado-euro').text(pesos / euro);

});

	$('#conversor--dolar').click(function(){
		// alert	
		var dolar = $('#dolar--americano').val();
		$('#resultado-peso').text(  dolar / peso );
		console.log(dolar);
	});
});


