const parseToDateAndTime = (datetime: string) => {
    const match = datetime.match(/^(\d{4}(?:-\d{2}){2})(?: (\d{2}(:\d{2}){2}))?$/)

    if (match) {
        return {
            date: match[1],
            time: match[2],
        }
    }

    throw new Error('datetime expected in YYYY-MM-DD[ HH:MM:SS] format')
}

const fromStr = (datetime: string, defaultTime: string) => {
    const { date, time } = parseToDateAndTime(datetime)

    return new Date(`${date} ${time || defaultTime}`)
}


export default (dateObjOrDateStrOrTimestamp: Date | string | number, defaultTime = '00:00:00') => {
    if (dateObjOrDateStrOrTimestamp instanceof Date) {
        return dateObjOrDateStrOrTimestamp
    }

    if (typeof dateObjOrDateStrOrTimestamp === 'number') {
        return new Date(dateObjOrDateStrOrTimestamp)
    }

    return fromStr(dateObjOrDateStrOrTimestamp, defaultTime)
}
