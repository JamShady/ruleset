import isset from '../functions/isset'

export default (value: unknown, limit: number): boolean => {
    if (typeof value === 'number' && value <= limit) {
        return true
    }

    if (typeof value === 'string' && value.length <= limit) {
        return true
    }

    if (Array.isArray(value) && value.filter(isset).length <= limit) {
        return true
    }

    return false
}
