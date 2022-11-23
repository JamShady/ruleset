import isNumeric from '../functions/isNumeric'

export default (match: unknown, against: unknown): boolean => {
    if (match === against || (typeof match === typeof against && JSON.stringify(match) === JSON.stringify(against))) {
        return true
    }


    if (typeof match !== typeof against && isNumeric(match) && isNumeric(against)) {
        return Number(match) === Number(against)
    }

    return false
}
