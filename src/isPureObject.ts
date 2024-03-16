function isPureObject(item: any) {
    return typeof item === 'object' && !Array.isArray(item) && item !== null;
}

export default isPureObject;
