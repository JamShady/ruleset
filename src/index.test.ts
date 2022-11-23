import {
    describe, it,
    expect,
} from 'vitest'

import ruleSet from './index'


describe('RuleSet', () => {

    describe('Ignore Disabled Rules', () => {

        it('Ignores false required', () => [false,undefined].forEach(required => expect(ruleSet(null, { required })).to.deep.equal([])))

    })


    describe('Tests Failed Rules', () => {

        it('Tests required', () => expect(ruleSet(null, { required: true })).to.deep.equal(['required']))

    })


    describe('Tests Compound Rules', () => {

        it('Tests min length', () => expect(ruleSet('foo', { required: true, min: 5 })).to.deep.equal(['min']))

    })

})
