import React from 'react';

import { getValue  } from '../utils/react/pickFromSyntheticEvent';
import { preventDefault } from '../utils/react/preventDefault';
import { stopPropagation } from '../utils/react/stopPropagation';

function InputExample ({ value, onChange }: any) {
	return (
		<input 
			value={value}
			// onChange={preventDefault(stopPropagation(getValue(onChange)))}
			// onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
			onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
		/>
	)
}


function compose <U>(...fns: Function[]) {
	return <E,>(initialValue: any): U => 
		fns.reduceRight((previosValue, fn) => fn(previosValue), initialValue)
}

function pipe<U>(...fns: Function[]) {
	return <E,>(initialValue: any): U => fns.reduce((previosValue, fn) => fn(previosValue), initialValue)
}


// Вспомогательные функции
function pick<K extends string>(prop: K) {
	return <O extends Record<K, any>>(obj: O) => obj[prop];
}

function isEqual<T>(left: T) {
	return <E extends T>(rigth: E) => left === rigth;
}


// Применение функции pick
const some = pick('value')({ value: 1})		// -> 1

const comments = [{id: 22, text: 'text one'}, {id: 44, text: 'text two'}];

// const filteredComments = comments.filter(({ id }) => id !== 22);
// применяя композиции функций 
// const filteredComments = comments.filter(pipe(pick('id'), isEqual(22), cond));

// const filterWithId = (id: number) => pipe(pick('id'), isEqual(id), cond)
// const filteredComments = comments.filter(filterWithId(22));

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);
const filterWithId = createFilterBy('id')
const filteredComments = comments.filter(filterWithId(22));
const filterByValue = createFilterBy('value')


// Функция для расширения
// --- Для отрицания --//
function cond(b: boolean) {
	return !b
}


const getValueName = pipe<number>(
	pick('currentTarget'),
	pick('value'),
	parseInt
)




