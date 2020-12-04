var mivariable2 = 'fuera';

function ambito2() {
	mivariable2 = 'dentro';
	//alert(mivariable2);
}

ambito2();
//console.log(mivariable2);

/////////////////////////////////////////////////////////////////////////////////////////
var animal = {nombre: 'Lola', tipo: 'hamster', raza: 'Ruso', edad: 4};

var prop; 

for (prop in animal) {
	/*console.log(prop);
	console.log(animal[prop]);*/
}

/*console.log(prop);
console.log(animal[prop]);*/
