//idea	Symbol
// nie sú tak často využívané.
// sú unikátne identifikátory pri tvorbe objektov.

	// const symbol1 = Symbol("bookNme");
	// const symbol2 = Symbol("year");

	// const book = {
	// 	[symbol1]:	"Harry Potter",
	// 	[symbol2]:	1997
	// }

	// console.log(book[symbol1]);
	// console.log(book[symbol2]);

	// const symbols = [Symbol("prvý"), Symbol("prvý")];

	// console.log(symbols[0] === symbols [1]);	// false

//--------------------------------------------------------------------------------

// Symboly a ich zvláštnosti

const symbol1 = Symbol("bookName");
const symbol2 = Symbol("year");
const symbol3 = Symbol("author");

const book = {
	[symbol1]:	"Harry Potter",
	[symbol2]:	1997,
	[symbol3]:	"J. K. Rowling"
}

console.log(Object.keys(book));
console.log(Object.values(book));

console.log(book[symbol1]);
console.log(book[symbol2]);
console.log(book[symbol3]);

console.log(symbol1.description);
console.log(symbol2.description);
console.log(symbol3.description);