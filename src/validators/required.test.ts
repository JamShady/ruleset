import {
    describe, it,
    expect,
} from 'vitest'

import required from './required'


describe('required', () => {

    const pass = (value: any, test: string) => it(test, () => expect(required(value)).to.be.true)
    const fail = (value: any, test: string) => it(test, () => expect(required(value)).to.be.false)


    pass('foo',        'a string')
    fail('',           'an empty string')
    pass(true,         'on true')
    fail(false,        'on false')

    pass(['foo'],      'an array')
    fail([],           'an empty array')
    fail([null],       'an array of null values')
    fail([undefined],  'an array of undefined values')
    pass([false],      'an array of falsey values')

    pass(0,            'a number 0')

})
