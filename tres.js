function mostrar()
{
	let nombreCliente;
	let cantidadLamparas;
	let precio;
	let marca;
	let seguir;
	let subtotal = 0;
	let importe;
	let descuento;
	let acumLamparas = 0;
	let acumFelipe = 0;
	let acumArgentina = 0;
	let acumIlu = 0;
	let contFelipe = 0;
	let contArgentina = 0;
	let contIlu = 0;
	let promedioFelipe = 0;
	let promedioArgentina = 0;
	let promedioIlu = 0;
	let marcaMasVentas;


	do{

		nombreCliente = prompt("ingrese nombre del cliente");
		
		marca = prompt("Ingrese marca: felipeLamparas, argentinaluz o illuminatis .");
         while(marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis"){
          marca = prompt("Error. Ingrese marca: felipelamparas/argentinaluz/illuminatis  ")
		 }
		
		 cantidadLamparas = prompt("ingrese cantidad de lamparas");
         while (isNaN(cantidadLamparas) || cantidadLamparas <= 0)  {
    	cantidadLamparas = prompt("cantidad invalida, ingrese  nuevamente cantidad de lamparas")
		 }

		 precio = prompt("ingrese su precio");
         while (isNaN(precio) || precio <= 0)  {
        precio = prompt("precio invalido, ingrese precio: ");
		 }
		 
		 // A a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
		 
		 importe = precio * cantidadLamparas;
		 subtotal += importe;

		 acumLamparas++

		 //C 



		switch (marca){

		case "argentinaluz":
			acumArgentina += cantidadLamparas
			contArgentina++

		break;

		case "felipelamparas":
			acumFelipe += cantidadLamparas
			contFelipe++

		break;

		case "illuminatis":
			acumIlu += cantidadLamparas
			contIlu++
		break;
		 }








		seguir = prompt("Quiere ingresar otro cliente? s/n")
	}while(seguir == "s");


	if(marca == "felipelamparas" && cantidadLamparas > 5){
		descuento = 0.1
	 }
	 else if(marca == "argentinaluz" && cantidadLamparas >= 3){
		 descuento = 0.05
	 }
	 else {
		 descuento = 0;
	 }


	 //Respuesta A
	 console.log("La empresa recaudo $" + subtotal);


	 //Respuesta B
	 if(descuento != 0){
	 console.log("La empresa perdio por los descuentos $" + descuento);
	 }
	 else{
		 console.log("La empresa no perdio porque no hubo descuentos");
	 }

	 //Respuesta C
	 
	 promedioArgentina = acumArgentina / contArgentina;
	 promedioFelipe = acumFelipe / contFelipe;
	 promedioIlu = acumIlu / contFelipe;
	 
	 
	 if(contArgentina != 0){
		 console.log("El promedio de lamparas vendidas de ArgentinaLuz es " + promedioArgentina);
	 }
	 if(contFelipe != 0){
		 console.log("El promedio de lamparas vendidas de FelipeLamparas es " + promedioFelipe);;

	 }
	 if(contIlu != 0){
		 console.log("El promedio de lamparas vendidas de Illuminatis es " + promedioIlu)
	 }


	 // RESpuesta D
	 
	 if(contArgentina > contFelipe && contArgentina > contIlu){
		 marcaMasVentas = "ArgentinaLuz";
	 }
	 else if(contIlu > contFelipe && contIlu >= contArgentina){

		marcaMasVentas = "illuminitis";
	 }
	 else{
		 marcaMasVentas = "FelipeLamparas";
	 }

	 console.log("La marca que mas se vendio es " + marcaMasVentas);
	}