let expect = require('chai').expect;
let merge = require('../src/merge');

describe('Merge function', () => {
	class Case {
		constructor(firstObject, secondObject, result) {
			this.firstObject = firstObject;
			this.secondObject = secondObject;
			this.result = result;
		}
	}

	let objectWithNumberProperty = {
		a: 1
	};
	let objectWithArrayProperty = {
		b: ['a', 'b']
	};
	let objectWithObjectPropertyA = { 
		a: {
			a: 'a'
		}
	};
	let objectWithObjectPropertyB = {
		a: {
			b: 'b'
		}
	};
	let objectWithObjectPropertyACopy = { 
		a: {
			a: 'a'
		}
	};
	let objectWithObjectPropertyBCopy = {
		a: {
			b: 'b'
		}
	};

	const mergeCases = {
		'work with null argument': new Case( null, objectWithArrayProperty, objectWithArrayProperty ),
		'work with undefined argument': new Case( objectWithNumberProperty, undefined, objectWithNumberProperty ),
		'work with number and string arguments': new Case( objectWithNumberProperty, 2, objectWithNumberProperty ),
		'merge objects with different structure': new Case( objectWithNumberProperty, objectWithArrayProperty, {
			a: 1,
			b: ['a', 'b']
		} ),
		'merge plain object properties recursively': new Case( objectWithObjectPropertyA, objectWithObjectPropertyB, { 
			a: {
				a: 'a',
				b: 'b'
			}
		} )
	};

	for (let description in mergeCases) {
		it(`should ${description}`, () => {
			const actual = merge(mergeCases[description].firstObject, mergeCases[description].secondObject);
			expect(actual).to.be.deep.equal(mergeCases[description].result);
		});
	};

	it(`should not change inital objects`, () => {
		merge(objectWithObjectPropertyA, objectWithObjectPropertyB);
		expect(objectWithObjectPropertyA).to.be.deep.equal(objectWithObjectPropertyACopy);
		expect(objectWithObjectPropertyB).to.be.deep.equal(objectWithObjectPropertyBCopy);
	});
});