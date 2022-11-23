import toIsoDate from './toIsoDate'
import toIsoTime from './toIsoTime'

export default (date: Date) => `${toIsoDate(date)} ${toIsoTime(date)}`
