/**
 * Merge class objects into one
 */
export default function mergeClasses(...args: any[]) {
    return Object.assign({}, ...args);
}
