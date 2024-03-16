import superGet from './../src/superGet';

describe('superGet', () => {
    describe('object array', () => {
        const objectArray = [
            {
                key: 'value1',
                nested: {
                    key: 'value1',
                },
            },
            {
                key: 'value2',
                nested: {},
            },
            {
                key: 'value3',
                nested: {
                    key: 'value3',
                },
            },
        ];
        const object = {
            someKey: 'someValue',
            objectArray,
            nested: {
                objectArray,
            },
        };
        it('will get array value from object array', () => {
            expect(superGet(object, 'objectArray.[].key')).toEqual(['value1', 'value2', 'value3']);
            expect(superGet(object, 'objectArray.[].nested')).toEqual([
                {
                    key: 'value1',
                },
                {},
                {
                    key: 'value3',
                },
            ]);
            expect(superGet(object, 'objectArray.[].nested.key')).toEqual([
                'value1',
                undefined,
                'value3',
            ]);
        });
    });
});
