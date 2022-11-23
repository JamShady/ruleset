import isEmail from 'validator/lib/isEmail'

export default (value: unknown): boolean => {
    try {
        return isEmail(value as string)
    }
    catch(e) {
        return false
    }
}
