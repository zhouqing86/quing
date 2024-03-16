import isPureObject from './../src/isPureObject';

describe('isPureObject', () => {
    it('return false when it is not pure object', () => {
        expect(isPureObject(null)).toBeFalsy();
        expect(isPureObject('string')).toBeFalsy();
        expect(isPureObject(123)).toBeFalsy();
        expect(isPureObject([])).toBeFalsy();
    });

    it('return true when it is pure object', () => {
        expect(isPureObject({ a: 1 })).toBeTruthy();
        expect(isPureObject({})).toBeTruthy();
    });
});
