import {
    describe, it,
    expect,
} from 'vitest'

import onOrAfter from './onOrAfter'
import {
    numDaysFromNow,
    numMinsFromNow,
    toDateStr,
    toTimeStr,
} from '../support/onOr'


describe('onOrAfter()', () => {

    const pass = (value: string, limit: string) => it(`${value} >= ${limit}`, () => expect(onOrAfter(value, limit)).to.be.true)
    const fail = (value: string, limit: string) => it(`${value} >= ${limit}`, () => expect(onOrAfter(value, limit)).to.be.false)

    const compare = (fnFromNow: Function, toString: Function) => {
        const prev = toString(fnFromNow(-1))
        const curr = toString(fnFromNow( 0))
        const next = toString(fnFromNow( 1))

        pass(prev, prev) // is prev onOrAfter prev
        pass(curr, prev) // is curr onOrAfter prev
        pass(next, prev) // is next onOrAfter prev

        fail(prev, curr) // is prev onOrAfter curr
        pass(curr, curr) // is curr onOrAfter curr
        pass(next, curr) // is next onOrAfter curr

        fail(prev, next) // is prev onOrAfter next
        fail(curr, next) // is curr onOrAfter next
        pass(next, next) // is next onOrAfter next

        fail('invalid', curr)
    }

    describe('onOrAfter Date Tests', () => compare(numDaysFromNow, toDateStr))
    describe('onOrAfter Time Tests', () => compare(numMinsFromNow, toTimeStr))

    describe('onOrAfter Mixed Date/Time Tests', () => {
        const dateYesterday = toDateStr(numDaysFromNow(-1))
        const dateToday     = toDateStr(numDaysFromNow( 0))
        const dateTomorrow  = toDateStr(numDaysFromNow( 1))

        const timeNow       = toTimeStr(numMinsFromNow(0))

        pass(timeNow, dateYesterday)// now is onOrAfter yesterday
        pass(timeNow, dateToday)    // now is onOrAfter today
        fail(timeNow, dateTomorrow) // now is not onOrAfter tomorrow
    })

})
