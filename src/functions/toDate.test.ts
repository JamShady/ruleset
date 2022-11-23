import {
    describe, it,
    expect,
} from 'vitest'

import toDate from './toDate'
import toIsoDate from './toIsoDate'
import toIsoDateTime from './toIsoDateTime'


describe('toDate()', () => {

    const pass = (value: any) => it(value, () => expect(toDate(value).toLocaleTimeString()).to.be.a.string)
    const fail = (value: any, test: string) => it(`Fail with ${test}`, () => expect(() => toDate(value)).to.throw('format'))


    pass(toIsoDate(new Date))
    pass(toIsoDateTime(new Date))

    fail('foo', 'string')

})
