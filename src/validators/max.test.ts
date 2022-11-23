import {
    describe, it,
    expect,
} from 'vitest'

import max from './max'


describe('max', () => {

    const pass = (value: any, limit: number, test: string) => it(test, () => expect(max(value, limit)).to.be.true)
    const fail = (value: any, limit: number, test: string) => it(test, () => expect(max(value, limit)).to.be.false)

    fail(1,            0,    'numeric')
    pass(0,            1,    'numeric')

    pass('foo',        5,  'a short string')
    fail('fubar',      3,  'an long string')

    pass(['foo'],      2,  'an small array')
    fail([1,2,3,4,5],  3,  'an filled array')

})
