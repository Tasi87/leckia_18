//idea	Funkcie a objekty

//	funkcia je objekt
function a() {
	const b = 10;
}

a.greeting = "Ahoj";
a.age = 30;

console.log(a.greeting);
console.log(a.age);

const myFunction = () => {
	const c = 10;
}

myFunction.greeting1 = "Nazdar";
console.log(myFunction.greeting1);

// Sú primitívne dátové typy objekty?
const primitivString = "David";
// Object wrapper
const stringObject = new String("Ja som Tasi.");
console.log(stringObject.length);

const rpimitivNuber = 123.433;
// Object wrapper
const numberObject = new Number (150.899);
console.log(numberObject.toFixed(2));

const primitiveBoolean = true
// Object wrapper
const booleanObject = new Boolean(false)
console.log(booleanObject.toString())


// Primitívne dátové typy
console.log(typeof "Tasi")				//	object
console.log(typeof 10)					//	object
console.log(typeof true)				//	object
console.log(typeof undefined)			//	undefined
console.log(typeof null)				//	object
console.log(typeof Symbol("test"))	//	Symbol

// Neprimitívne dátové typy
console.log(typeof {})					//	object
console.log(typeof [])					//	object
console.log(typeof function () { })	//	object