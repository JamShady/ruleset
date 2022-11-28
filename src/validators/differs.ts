import fnDiffer from './differ'

export default (differ: unknown, fromAll: unknown[]): boolean => fromAll.every(from => fnDiffer(differ, from))
