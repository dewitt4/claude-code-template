# Tests

This directory contains all test files for the project.

## Test Organization

```
tests/
├── unit/          # Unit tests
├── integration/   # Integration tests
├── e2e/          # End-to-end tests
└── fixtures/     # Test data and fixtures
```

## Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test path/to/test

# Run in watch mode
npm test -- --watch
```

## Writing Tests

Follow the AAA pattern (Arrange, Act, Assert):

```javascript
test('description of what is being tested', () => {
  // Arrange: Set up test data and conditions
  const input = 'test data';
  
  // Act: Execute the code under test
  const result = functionToTest(input);
  
  // Assert: Verify the results
  expect(result).toBe(expectedValue);
});
```

## Test Naming Conventions

- Use descriptive names that explain what is being tested
- Format: `test_[function]_[scenario]_[expectedResult]`
- Example: `test_calculateTotal_withDiscount_returnsReducedAmount`

## Coverage Goals

- Aim for 80%+ coverage for critical code paths
- Focus on quality over quantity
- Test edge cases and error conditions
