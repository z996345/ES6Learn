/**
 * @author michael / https://github.com/z996345
 */

'use strict';

const CustonVariable = Symbol('custonVariable');

export default class Foo {
	/**
	 * Foo Constructor
	 * @constructor
	 * @memberOf Foo
	 */
	constructor() {
		this[CustonVariable] = 'Hello World';
	}
	get() {
		return this[CustonVariable];
	}
	set(value) {
		if (!value || (typeof value !== 'string')) {
			throw 'Invalid Value';
		}
		this[CustonVariable] = value;
	}
	showOnConsole() {
		console.log(this[CustonVariable]);
	}

}