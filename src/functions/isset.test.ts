import {
    describe, it,
    expect,
} from 'vitest'

import isset from './isset'


describe('isset()', () => {

    const pass = (value: any, test: string) => it(test, () => expect(isset(value)).to.be.true)
    const fail = (value: any, test: string) => it(test, () => expect(isset(value)).to.be.false)


    pass(true,  'boolean true')
    pass(false, 'boolean false')

    pass('',       'string (empty)')
    pass('string', 'string')

    fail(null,      'null')
    fail(undefined, 'undefined')

    pass(1,   '+ive number')
    pass(-1,  '-ive number')
    pass(0,   'numeric zero')
    pass('0', 'string zero')

})
