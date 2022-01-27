// Generics
interface MyArray<T> {
	[N:number]: T

	map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
}

const myArray: MyArray<number> = [1,2,3];
let vaiable = myArray[0]

const ab = myArray.map(item => `${item}`);
console.log(ab)


function identity<T>(arg: T): T {
	return arg
}

let result = identity(12)

// МОй вариант
function getLength<T>(arr: T[]): number {
	return arr.length
}

let lenArray = getLength([1,2,3,4,5])


// Вариант сенесея
function getLength2<T extends Array<any>>(arr: T): number {
	return arr.length
}

interface IValueWithType<T> {
	type: string,
	value: T
}

function withType<U>(arg: U): IValueWithType<U> {
	return {
		type: typeof arg,
		value: arg
	}
}



// Встроенные Generics
interface IExample<T> {
	type: string;
	value: T;
	isEmpty: boolean;
}

const omettedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
	type: 'asd'
}

const picked: Pick<IExample<number>, 'isEmpty' | 'value'> = {
	isEmpty: true,
	value: 123
}

const partial: Partial<IExample<object>> = {
	
}






