export default (value: any) => typeof value === 'number'
    || (typeof value === 'string' && value.match(/^-?\d+(\.\d+)?$/) !== null)
