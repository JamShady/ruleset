const toDateStr = (date: Date) => date.toISOString().split('T').shift()!
const toTimeStr = (date: Date) => date.toISOString().split('T').join(' ').split('.').shift()!

const adjustFromNow = (field: 'date' | 'minutes', adjustBy: number) => {
    const date = new Date

    if (field === 'date') {
        date.setDate(date.getDate() + adjustBy)
    }
    else if (field === 'minutes') {
        date.setMinutes(date.getMinutes() + adjustBy)
    }

    return date
}

const numDaysFromNow = (numDays: number) => adjustFromNow('date', numDays)
const numMinsFromNow = (numMins: number) => adjustFromNow('minutes', numMins)


export {
    numDaysFromNow,
    numMinsFromNow,
    toDateStr,
    toTimeStr,
}
