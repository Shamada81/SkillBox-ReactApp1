// JS Types					// typeof

const str = 'string';		// typeof str	-> 'string'
const num = 2;				// typeof num	-> 'number'
const nan = NaN;			// typeof nan	-> 'number'
const obj = {};				// typeof obj	-> 'object'
const arr = [];				// typeof arr	-> 'object'
const nul = null;			// typeof nul	-> 'object'
const sym = Symbol();		// typeof sym	-> 'symbol'
const und = undefined;		// typeof und	-> 'undefined'
const _void = void 0;		// typeof _void	-> 'undefined'
const bool = true;			// typeof bool	-> 'boolean'
const fun = () => {};		// typeof fun	-> 'function'


// // Функция в JS
// function sumJS(arr) {
// 	if(arr instanceof Array) {
// 		return arr.reduce((a, v) => a + v);
// 	}
// 	throw new Error('type of mismatch');
// }

// // на TS
// function sumTS(arr: number[]):number {
// 	return arr.reduce((a, v) => a + v);
// }



// union type
const strOrNumber: string | number = '2';

// type alias
type StrOrNumber = string | number;

const strOrNumber1: StrOrNumber = '2';
const strOrNumber2: StrOrNumber = '2';
const strOrNumber3: StrOrNumber = '2';
const strOrNumber4: StrOrNumber = '2';

// Array
const tsArray: number[] = [1,2,3,4]
const tsArrayGeneric: Array<number> = [1,2,3]

const unionArray: (string | number)[] = [1, 2, '3'];
const unionArrayGeneric: Array<number | string> = [1, '2'];

// Tuple (кортеж)
const myTuple: [number, string, boolean] = [1, '2', true];
const [val1, val2] = myTuple;

// Object
const myObj: {a: number, b: string} = {a: 1, b: '2'}

interface MyFirstInterface {
	readonly a: number;
	b: string;
	c?: number[];
	e: undefined | number
}

const myObj2: MyFirstInterface = {
	a: 2,
	b: '123',
	// c: [1],
	e: undefined
};

const val = myObj2.c;
const val3 = myObj2.e;

// Object.keys(myObj2);
const value = myObj2.a;

// Index Signature
interface IndexInterface {
	[N: string]: string
};


enum Methods {
	add = 0,
	sub = 1
}


// Function
function calculate(method: Methods, left: number, right: number): number {
	switch(method) {
		case Methods.add: return left + right;
		case Methods.sub: return left - right;
	}
}

const ArrowFn: TypeFn = () => 2;
type TypeFn = () => number

interface FnInterface {
	(a: number): void;
}




/* 
*
*			КЛАССЫ
*
*/


// // Конструктор (старая методика)

// function OldConstructor(fieldValue) {
// 	this.field = fieldValue || 123;
// }

// OldConstructor.prototype.method = function() {
// 	return this.field
// }

// const instance = new OldConstructor();
// instance.method();		// -> 123



// Современная методика
class Constructor {
	field: number = 123;

	constructor(arg: number) {
		this.field = arg;
	}

	public publicMethod() {
		return this.field;
	}
	protected protectedMethod() {
		return this.field + 10;
	}
	private privateMethod() {
		return this.field + 30
	}
}


const instance = new Constructor(123);


class Child extends Constructor {
	public childMethod() {
		this.protectedMethod()
	}
	protected protectedMethod() {
		return super.protectedMethod();
	}
}

abstract class AbstractClass {
	public abstract abstractField: number;

	public abstract abstractMethod(): number

	protected protectedMethod() {
		return this.abstractField;
	}
}


class NewChild extends AbstractClass {
	abstractField = 12;
	abstractMethod() {
		return this.abstractField
	}
}

// Имплементация интерфейса
interface MyInterface<T> {
	field: string;
	method(): string
}

class NewClass<T> implements MyInterface<T> {
	public field = '123';
	method(): string {
		return this.field;
	}

}







