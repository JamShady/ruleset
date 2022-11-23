import toDate from '../functions/toDate'

export default (value: unknown, limit: Date | string | number): boolean => {
    try {
        if (typeof value === 'string' || typeof value === 'number' || value instanceof Date) {
            const subject = toDate(value)
            const earliest = toDate(limit)

            return subject.getTime() >= earliest.getTime()
        }
    }
    catch(e) {
        // fall thru to return false
    }

    return false
}
