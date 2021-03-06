// nanoid - генерирует уникальные ключи

import { assoc } from '../js/assoc';

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = (obj: object) => assoc('id', generateRandomString())(obj);

export const generateId = <O extends object>(obj: O) => assignId(obj);

