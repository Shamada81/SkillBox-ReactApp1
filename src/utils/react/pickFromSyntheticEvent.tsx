import { SyntheticEvent } from 'react';

export function pickFromSyntheticEvent<T extends HTMLElement>() {
	return <K extends keyof T>(key: K) => <E extends ((t: T[K]) => void)>(fn: E) => (e: SyntheticEvent<T>) => fn(e.currentTarget[key]);
}
