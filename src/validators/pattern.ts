const toRegExp = (regex: RegExp | string) => {
    if (typeof regex === 'string') {
        if (regex[0] === '/') {
            const [,r,m] = regex.split('/')
            return new RegExp(r, m)
        }
        return new RegExp(regex)
    }
    return regex
}

export default (value: unknown, regex: RegExp | string): boolean => typeof value === 'string'
    && value.match(toRegExp(regex)) !== null
