// type casting
const mistake = [] as Array<number>
mistake.push(1);
// mistake.push('1');	// -> ошибка		

let bigObject = {
	"commit": {
		"id": 'fhgkdsfjghdsgdsfjgsdgf;slkglfdskglsdkg',
		"short_id": 'dfjghsdkjg',
		"title": 'hjfdghsl',
		"author_name": "jgs;ldkjgs;dl",
		"author_email": "sjgdfg@ghdfkgj.ru",
		"created_at": "32342-234-42342",
	},
	"commits": {
		"id": 'fhgkdsfjghdsgdsfjgsdgf;slkglfdskglsdkg',
		"short_id": 'dfjghsdkjg',
		"title": 'hjfdghsl',
		"author_name": "jgs;ldkjgs;dl",
		"author_email": "sjgdfg@ghdfkgj.ru",
		"created_at": "32342-234-42342",
	},
	"difft": [{
		"id": 'fhgkdsfjghdsgdsfjgsdgf;slkglfdskglsdkg',
		"short_id": 'dfjghsdkjg',
		"title": 'hjfdghsl',
		"author_name": "jgs;ldkjgs;dl",
		"author_email": "sjgdfg@ghdfkgj.ru",
		"created_at": "32342-234-42342",
	}],
	"compare_timeout": false,
	"compare_same_ref": false
};


type TMyBigObject = typeof bigObject;

// const typedBigObject: Readonly<TMyBigObject> = bigObject;


// Делаем readonly для всех уровней
// type MyReadonly = {
// 	readonly [N in 'asd' | 'qwe']: N
// }
// В JS
// for (let N of ['asd', 'qwe']) {}

type TObjKeys = keyof TMyBigObject;			// выдает все типы ключей из TMyBigObject
type TCommitType = TMyBigObject['commit'];	// Выдает тип по конкретному ключу


// type MyReadonly = {
// 	readonly [N in keyof TMyBigObject]: TMyBigObject[N]
// }

// Через generics
type MyReadonly<T> = {
	// mapped types (типы, которые перебирают другие типы)
	readonly [N in keyof T]: T[N]
}


// const some: MyReadonly<TMyBigObject> = {
// 	// 'asd': 'asd',
// 	// 'qwe': 'qwe'
// 	"compare_same_ref": true
// };

const typedBigObject: MyReadonly<TMyBigObject> = bigObject;



type MyPartial<T> = {
	[N in keyof T]?: T[N]
}

const myPartial: MyPartial<TMyBigObject> = bigObject

type MyPick<T, K extends keyof T> = {
	[N in K]: T[N] 
}


type MyReadonlyDeep<T> = {
	readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}


const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;
typedBigObjectDeep.commit.author_email



// Убираем все значения readonly
type TSomeType = MyReadonlyDeep<TMyBigObject>

// type inference 
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer U> ? U: T

type TTest = RemoveReadonly<TSomeType>


// Применение
function greaterThenZero(a: number, b: string) {
	return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never
type FnParametrs<T> = T extends ((...args: infer R) => any) ? R: never

type TReturnType= FnReturnType<typeof greaterThenZero>
type TArgType = FnParametrs<typeof greaterThenZero>




