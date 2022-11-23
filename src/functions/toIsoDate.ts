export default (date: Date) => date
    .toISOString()
    .split('T')
    .shift()
