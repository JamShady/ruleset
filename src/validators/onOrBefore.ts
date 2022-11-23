import toDate from '../functions/toDate'

export default (value: unknown, limit: Date | string | number): boolean => {
    try {
        if (typeof value === 'string' || typeof value === 'number' || value instanceof Date) {
            const subject = toDate(value)
            const latest = toDate(limit, '23:59:59')

            return subject.getTime() <= latest.getTime()
        }
    }
    catch(e) {
        // fall thru to return false
    }

    return false
}
