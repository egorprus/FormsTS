// export const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined)

export const required = (value: string) => value ? undefined : 'Required';

export const mustBeNumber = (value: string) => (isNaN(Number(value)) ? 'Must be a number' : undefined)

export const minLength = (min: number) => (value: string) => value.length >= min ? undefined : `min length is ${min}`;

export const onlyLetters = (value: string) => value.replace(/[^a-zA-Z]/g,'');

export const onlyNumber = (value: string) => value.replace(/\D/, '')

export const currentLength = (length: number) => (value: string) => value.length === length ? undefined : `Number must be ${length} numbers`