import {
    describe, it,
    expect,
} from 'vitest'

import email from './email'


describe('email', () => {

    const pass = (value: string) => it(value, () => expect(email(value)).to.be.true)
    const fail = (value: string) => it(value, () => expect(email(value)).to.be.false)


    pass('foo@bar.com')
    pass('foo@bar.com.uk')
    pass('foo.bar@baz.com.uk')
    pass('foo+bar@baz.com')

    fail('')
    fail('foo@')
    fail('@bar.com')
    fail('foo @bar.com')
    fail('foo@bar .com')

})
