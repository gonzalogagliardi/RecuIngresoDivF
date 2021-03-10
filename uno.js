

	function mostrar()
{
	let nombre;
let sexo;
let puesto;
let sueldo;
let seguir;

let acumSueldoProgramador = 0;
let acumSueldoAnalista = 0;
let acumSueldoQa = 0;
let contSueldoProgramador = 0;
let contSueldoAnalista = 0;
let contSueldoQa = 0;
let promedioSueldoProgramador = 0;
let promedioSueldoAnalista = 0;
let promedioSueldoQa = 0;

let flagSueldo = 1;
let mayorSueldo;
let sexoMejorSueldo;

let nombreMujerMejorSueldo;
let flagSueldoMujer = 1;
let mejorSueldoMujer;

let contprogramadorNB = 0;


do{
    nombre = prompt("ingrese un nombre");
	while (!isNaN(nombre)) {
    nombre = prompt("Nombre invalido, ingrese otro nombre");
	}
    edad = parseInt(prompt("ingrese su edad"));
	while ( edad <= 0 || isNaN(edad))   {

		edad = prompt("edad invalido, ingrese nuevamente su edad");
	}
    sexo = prompt("Ingrese el sexo f, m o no binario: ");
		while(sexo != "m" && sexo != "f" && sexo != "no binario"){
		sexo = prompt("Error. Ingrese el sexo: ");
	   }
       puesto = prompt("Ingrese puesto: programador, analista, Qa.");
       while(puesto != "programador" && puesto != "analista" && puesto != "Qa"){
           puesto = prompt("Error. Ingrese puesto: ");  } 

        sueldo = parseInt(prompt("Ingrese sueldo: "));
         while (!(isNaN(sueldo) ||sueldo >= 15000  && sueldo <= 70000)){				
            sueldo = prompt("Error. Ingrese sueldo entre $15000 y $70000.");
      }	

      // Punto A
         switch (puesto){
            case "programador":
            acumSueldoProgramador = sueldo;
            contSueldoProgramador++
    
            break;
            case "analista":
            acumSueldoAnalista = sueldo;
            contSueldoAnalista++
    
            break;
            case "Qa":
            acumSueldoQa = sueldo;
            contSueldoQa++
    
            break;
    
        }

        //Punto B
        if(flagSueldo || mayorSueldo < sueldo){
            mayorSueldo = sueldo;
            sexoMejorSueldo = sexo;
            flagSueldo = 0;

        }

        //Punto C el nombre del empleado femenino con mas sueldo
        if(sexo == "f" && ( flagSueldoMujer || sueldo > mejorSueldoMujer )){
            nombreMujerMejorSueldo = nombre;
            mejorSueldoMujer = sueldo;
            flagSueldoMujer = 0;

        }
        
        // Punto D  cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

        if(puesto == "programador" && sexo == "no binario" && sueldo >= 20000 && sueldo <= 55000){
            contprogramadorNB++
        }




    seguir = prompt("Quiere seguir? s/n");
}
while(seguir == "s");



// A) promedio sueldo por puesto
if ( contSueldoProgramador != 0 ){
    promedioSueldoProgramador = acumSueldoProgramador / contSueldoProgramador;

}

if(contSueldoAnalista != 0){
    promedioSueldoAnalista = acumSueldoAnalista / contSueldoAnalista;

}

if( contSueldoQa != 0){
    promedioSueldoQa = acumSueldoQa / contSueldoQa;

}
 console.log ("El promedio de sueldo de los programadores es " + promedioSueldoProgramador.toFixed(2));
console.log ("El promedio de sueldo de los analistas es " + promedioSueldoAnalista.toFixed(2) );
console.log ("El promedio de sueldo  de los de Qa es " + promedioSueldoQa.toFixed(2));
// B) sexo con mas sueldo
console.log("El sexo con mas sueldo es " + sexoMejorSueldo + " con un sueldo de $" + mayorSueldo ); 


// C) Mujer con mas sueldo 
 if (flagSueldoMujer == 0){
     console.log("La mujer con mas sueldo se llama " + nombreMujerMejorSueldo);
 }
 else{
    console.log("No se registraron mujeres");
 }

 // D)  cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

 if(sexo == "no binario" && puesto  == "programador"){ 
     console.log("La cantidad de programadores no binarios es " + contprogramadorNB);

 }else{
     console.log("No hay programadores no binarios");
 }
}

