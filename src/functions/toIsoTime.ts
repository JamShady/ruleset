export default (date: Date) => date
    .toTimeString()
    .split(' ')
    .shift()
