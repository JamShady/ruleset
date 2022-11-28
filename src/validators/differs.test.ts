import {
    describe, it,
    expect,
} from 'vitest'

import differs from './differs'


describe('differs()', () => {

    const toStr = (value: string | string[]) => (typeof value === 'string' ? [value] : value).map(v => `"${v}"`).join(', ')
    const pass = (value: string, from: string[]) => it(`${toStr(value)} != ${toStr(from)}`, () => expect(differs(value, from)).to.be.true)
    const fail = (value: string, from: string[]) => it(`${toStr(value)} == ${toStr(from)}`, () => expect(differs(value, from)).to.be.false)

    pass('foo', ['bar', 'baz'])
    fail('baz', ['bar', 'baz', 'bip'])

})
