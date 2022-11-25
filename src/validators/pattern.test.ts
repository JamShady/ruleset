import {
    describe, it,
    expect,
} from 'vitest'

import pattern from './pattern'


describe('pattern', () => {

    const pass = (value: any, regexp: string | RegExp, test: string) => it(test, () => expect(pattern(value, regexp)).to.be.true)
    const fail = (value: any, regexp: string | RegExp, test: string) => it(test, () => expect(pattern(value, regexp)).to.be.false)


    pass('foo', 'o+', 'basic string')
    pass('foo', '/o+/', 'regex string')
    pass('foo', /o+/, 'regex')
    pass('foo', new RegExp('o+'), 'RegExp')

    fail('foo', '^o+', 'failing string')

})
