import isNumeric from '../functions/isNumeric'

export default (value: unknown, limit: number): boolean => isNumeric(value)
    && isNumeric(limit)
    && Number(value) <= Number(limit)
