import {
    describe, it,
    expect,
} from 'vitest'

import gte from './gte'


describe('gte()', () => {

    const pass = (value: any, param: number, test?: string) => it(`${test || value} >= ${param}`, () => expect(gte(value, param)).to.be.true)
    const fail = (value: any, param: number, test?: string) => it(`${test || value} >= ${param}`, () => expect(gte(value, param)).to.be.false)

    fail(1,     5)
    fail(3.5,   5)
    fail('4.5', 5,  '"4.5"')
    pass(5,     5)
    pass(5.0,   5,  '5.0')
    pass('5',   5,  '"5"')
    pass('5.0', 5,  '"5.0"')
    pass(6.5,   5)
    pass('7.5', 5,  '"7.5"')

})
