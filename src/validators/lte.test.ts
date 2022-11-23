import {
    describe, it,
    expect,
} from 'vitest'

import lte from './lte'


describe('lte()', () => {

    const pass = (value: any, param: number, test?: string) => it(`${test || value} <= ${param}`, () => expect(lte(value, param)).to.be.true)
    const fail = (value: any, param: number, test?: string) => it(`${test || value} <= ${param}`, () => expect(lte(value, param)).to.be.false)

    pass(1,     5)
    pass(3.5,   5)
    pass('4.5', 5,  '"4.5"')
    pass(5,     5)
    pass(5.0,   5,  '5.0')
    pass('5',   5,  '"5"')
    pass('5.0', 5,  '"5.0"')
    fail(6.5,   5)
    fail('7.5', 5,  '"7.5"')

})
