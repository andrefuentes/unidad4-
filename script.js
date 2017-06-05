var inNumeroNuevo = document.getElementById("numeroNuevo");
var botonIngresar = document.getElementById("ingresar");
var parrafo = document.getElementById("parrafo");
var listaNumeros = [];
var botonHistograma = document.getElementById("histograma");
var r = 0;
var r1= 0;
var  r2= 0;

botonIngresar.onclick = function() {
	if (inNumeroNuevo.value <= 100 && inNumeroNuevo.value >=0) {
		listaNumeros.push(inNumeroNuevo.value);
		parrafo.innerHTML = listaNumeros;
	}
	else{
		window.alert("Ingrese un numero de 0 a 100");
	}
	inNumeroNuevo.value = "";
}

inNumeroNuevo.onkeypress = function(f) {
	if (f.which == 13) {
		if (inNumeroNuevo.value <= 100 && inNumeroNuevo.value >=0) {
			listaNumeros.push(inNumeroNuevo.value);
			parrafo.innerHTML = listaNumeros;
		}
		else{
			window.alert("Ingrese un numero de 0 a 100");
		}
		inNumeroNuevo.value = "";	
	}