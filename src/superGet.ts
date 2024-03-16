import { get, head, isEmpty, isString, map, slice, split } from 'lodash';

const ARRAY_SEPARATOR = '[]';

function superGet(object: any, path: Array<string> | string, defaultValue: any = undefined): any {
    if (isEmpty(path)) {
        return object;
    }

    if (isString(path)) {
        path = split(path, '.');
    }

    const firstPath = head(path);
    const remainPath = slice(path, 1);
    if (firstPath === ARRAY_SEPARATOR) {
        if (Array.isArray(object)) {
            return map(object, (item) => superGet(item, remainPath, defaultValue));
        } else {
            return undefined;
        }
    }

    if (isEmpty(firstPath)) {
        return superGet(object, remainPath, defaultValue);
    }

    const remainObject = get(object, firstPath!, defaultValue);
    return superGet(remainObject, remainPath, defaultValue);
}

export default superGet;
