btncrear = document.getElementById("crear");		
cantidad= document.getElementById("cantida");
color = document.getElementById("colores");


btncrear.onclick=function(){
	for(var i=0; i<cantidad.value ;i++){
		var cuadrado = document.createElement("div");
		cuadrado.setAttribute("class","squares " + color.value);
		document.getElementById("square").appendChild(cuadrado);
	}
}