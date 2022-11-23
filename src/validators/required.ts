import isset from '../functions/isset'

export default (value: unknown): boolean => {
    if (!isset(value)) {
        return false
    }

    if (typeof value === 'boolean') {
        return value
    }

    if (typeof value === 'string' && value.length === 0) {
        return false
    }

    const arrayHasValue = (values: any[]) => values.some(value => isset(value))

    if (Array.isArray(value) && !arrayHasValue(value)) {
        return false
    }

    if (typeof value === 'object' && !arrayHasValue(Object.values(value as object))) {
        return false
    }

    return true
}
