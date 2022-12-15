/**
 * Merge class objects into one
 */
export function mergeClasses(...args: any[]) {
    return Object.assign({}, ...args);
}