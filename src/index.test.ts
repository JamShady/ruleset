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

        it('Tests required email', () => expect(ruleSet(null, { required: true, email: true })).to.deep.equal(['required','email']))
        it('Tests email min length', () => expect(ruleSet('foo@bar.com', { email: true, min: 15 })).to.deep.equal(['min']))

    })

})
