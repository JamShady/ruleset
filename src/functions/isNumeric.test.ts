import {
    describe, it,
    expect,
} from 'vitest'

import isNumeric from './isNumeric'


describe('isNumeric()', () => {

    const pass = (value: any, test: string) => it(test, () => expect(isNumeric(value)).to.be.true)
    const fail = (value: any, test: string) => it(test, () => expect(isNumeric(value)).to.be.false)


    pass(1, 'numeric one')
    pass('1', 'string one')

    pass(0, 'numeric zero')
    pass('0', 'string zero')

    pass(-1, 'numeric negative number')
    pass('-1', 'string negative number')

    fail('string', 'some string')
    fail([], 'array')
    fail({}, 'object')
    fail(true, 'boolean true')
    fail(false, 'boolean false')

})
