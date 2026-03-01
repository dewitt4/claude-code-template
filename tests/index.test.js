// Example test file - replace with your actual tests

const { main } = require('../src/index');

describe('Main', () => {
    test('should run without errors', () => {
        expect(() => main()).not.toThrow();
    });

    // Add your tests here
    test('example test', () => {
        expect(true).toBe(true);
    });
});
