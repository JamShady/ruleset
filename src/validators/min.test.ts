import {
    describe, it,
    expect,
} from 'vitest'

import min from './min'


describe('min', () => {

    const pass = (value: any, limit: number, test: string) => it(test, () => expect(min(value, limit)).to.be.true)
    const fail = (value: any, limit: number, test: string) => it(test, () => expect(min(value, limit)).to.be.false)

    pass(1,            0,    'numeric')
    fail(0,            1,    'numeric')

    pass('',           0,    'zero min')

    pass('foo',        1,    'a string')
    fail('',           1,    'an empty string')

    pass(['foo'],      1,    'a single-value array')
    fail([],           1,    'an empty array')
    fail([null],       1,    'an array of null values')
    fail([undefined],  1,    'an array of undefined values')
    pass([false],      1,    'an array of falsey values')

})
