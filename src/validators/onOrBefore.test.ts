import {
    describe, it,
    expect,
} from 'vitest'

import onOrBefore from './onOrBefore'
import {
    numDaysFromNow,
    numMinsFromNow,
    toDateStr,
    toTimeStr,
} from '../support/onOr'


describe('onOrBefore()', () => {

    const pass = (value: string, limit: string) => it(`${value} <= ${limit}`, () => expect(onOrBefore(value, limit)).to.be.true)
    const fail = (value: string, limit: string) => it(`${value} <= ${limit}`, () => expect(onOrBefore(value, limit)).to.be.false)

    const compare = (fnFromNow: Function, toString: Function) => {
        const prev = toString(fnFromNow(-1))
        const curr = toString(fnFromNow( 0))
        const next = toString(fnFromNow( 1))

        pass(prev, prev) // is prev onOrBefore prev
        fail(curr, prev) // is curr onOrBefore prev
        fail(next, prev) // is next onOrBefore prev

        pass(prev, curr) // is prev onOrBefore curr
        pass(curr, curr) // is curr onOrBefore curr
        fail(next, curr) // is next onOrBefore curr

        pass(prev, next) // is prev onOrBefore next
        pass(curr, next) // is curr onOrBefore next
        pass(next, next) // is next onOrBefore next

        fail('invalid', curr)
    }

    describe('onOrBefore Date Tests', () => compare(numDaysFromNow, toDateStr))
    describe('onOrBefore Time Tests', () => compare(numMinsFromNow, toTimeStr))

    describe('onOrBefore Mixed Date/Time Tests', () => {
        const dateYesterday = toDateStr(numDaysFromNow(-1))
        const dateToday     = toDateStr(numDaysFromNow( 0))
        const dateTomorrow  = toDateStr(numDaysFromNow( 1))

        const timeNow       = toTimeStr(numMinsFromNow(0))

        fail(timeNow, dateYesterday)// now is not onOrBefore yesterday
        pass(timeNow, dateToday)    // now is onOrBefore today
        pass(timeNow, dateTomorrow) // now is onOrBefore tomorrow
    })

})
