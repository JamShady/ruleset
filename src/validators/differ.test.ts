import {
    describe, it,
    expect,
} from 'vitest'

import differ from './differ'


describe('differ()', () => {

    const toStr = (value: any) => typeof value === 'string' ? `"${value}"` : value
    const pass = (value: any, param: any) => it(`${toStr(value)} != ${toStr(param)}`, () => expect(differ(value, param)).to.be.true)
    const fail = (value: any, param: any) => it(`${toStr(value)} == ${toStr(param)}`, () => expect(differ(value, param)).to.be.false)


    fail('foo', 'foo')
    pass('bar', 'foo')

    fail('1',   '1')
    fail('1',    1)
    fail( 1,    '1')
    fail (1,     1)

    pass('1.0', '1') // both strings
    fail('1.0',  1)
    fail( 1.0,  '1')
    fail( 1.0,   1)

    pass('1',   '1.0') // both strings
    pass('1',   '1.0')
    fail('1',    1.0)
    fail( 1,     1.0)

    fail('1.0', '1.0')
    fail( 1.0,  '1.0')
    fail('1.0',  1.0)

    pass('1',   '1.1')
    pass('1.0', '1.1')
    pass( 1.0,  '1.1')
    pass('1',   '1.1')
    pass('1.0', '1.1')
    pass( 1.0,  '1.1')

    pass('1.1', '1')
    pass( 1.1,  '1')
    pass('1.1', '1.0')
    pass( 1.1,  '1.0')

})
