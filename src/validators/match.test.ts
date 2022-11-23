import {
    describe, it,
    expect,
} from 'vitest'

import match from './match'


describe('match()', () => {

    const toStr = (value: any) => typeof value === 'string' ? `"${value}"` : value
    const pass = (value: any, param: any) => it(`${toStr(value)} == ${toStr(param)}`, () => expect(match(value, param)).to.be.true)
    const fail = (value: any, param: any) => it(`${toStr(value)} != ${toStr(param)}`, () => expect(match(value, param)).to.be.false)


    pass('foo', 'foo')
    fail('bar', 'foo')

    pass('1',   '1')
    pass('1',    1)
    pass( 1,    '1')
    pass (1,     1)

    fail('1.0', '1') // both strings
    pass('1.0',  1)
    pass( 1.0,  '1')
    pass (1.0,   1)

    fail('1',   '1.0') // both strings
    fail('1',   '1.0')
    pass('1',    1.0)
    pass( 1,     1.0)

    pass('1.0', '1.0')
    pass( 1.0,  '1.0')
    pass('1.0',  1.0)

    fail('1',   '1.1')
    fail('1.0', '1.1')
    fail( 1.0,  '1.1')
    fail('1',   '1.1')
    fail('1.0', '1.1')
    fail( 1.0,  '1.1')

    fail('1.1', '1')
    fail( 1.1,  '1')
    fail('1.1', '1.0')
    fail( 1.1,  '1.0')

})
