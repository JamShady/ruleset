import match from './match'

export default (differ: unknown, from: unknown): boolean => !match(differ, from)
