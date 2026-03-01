---
name: testing
description: Generate comprehensive test cases, improve test coverage, and create testing strategies for unit, integration, and e2e tests
---

# Testing Skill

When working on testing tasks, follow these guidelines:

## Test Generation Approach

### 1. Understand the Code
- Analyze the function/module to be tested
- Identify inputs, outputs, and side effects
- Note dependencies and external interactions
- Understand the business logic and requirements

### 2. Test Categories

#### Unit Tests
- Test individual functions/methods in isolation
- Mock external dependencies
- Focus on single responsibility
- Fast execution

#### Integration Tests
- Test component interactions
- Use real or test doubles for dependencies
- Verify data flow between modules
- Test API endpoints with actual calls

#### End-to-End Tests
- Test complete user workflows
- Use real or staging environment
- Validate from user perspective
- Cover critical business paths

### 3. Test Coverage

Ensure tests cover:
- **Happy Path**: Normal, expected inputs and flows
- **Edge Cases**: Boundary values, empty inputs, maximum values
- **Error Cases**: Invalid inputs, missing data, exceptions
- **State Changes**: Before/after state verification
- **Side Effects**: Database changes, API calls, file operations

### 4. Test Structure (AAA Pattern)

```
// Arrange: Set up test data and conditions
// Act: Execute the code under test
// Assert: Verify the results
```

### 5. Best Practices

- **Clear Names**: Test names should describe what's being tested and expected behavior
  - Format: `test_[method]_[scenario]_[expectedResult]`
  - Example: `test_calculateTotal_withDiscount_returnsReducedAmount`
- **One Assert Per Test**: Each test should verify one behavior
- **Independent Tests**: Tests should not depend on each other
- **Fast Tests**: Keep unit tests fast (< 100ms)
- **Reliable Tests**: No flaky tests, no random data without seeds
- **Maintainable**: Easy to understand and update

### 6. Testing Frameworks

Adapt to the project's testing framework:
- **JavaScript/TypeScript**: Jest, Mocha, Vitest, Cypress
- **Python**: pytest, unittest, nose2
- **Java**: JUnit, TestNG, Mockito
- **C#**: NUnit, xUnit, MSTest
- **.NET**: xUnit, NUnit
- **Go**: testing package, testify
- **Ruby**: RSpec, Minitest

### 7. Mocking Strategy

- Mock external dependencies (APIs, databases, file system)
- Use test doubles appropriately:
  - **Mocks**: Verify interactions
  - **Stubs**: Provide predetermined responses
  - **Fakes**: Simplified working implementations
  - **Spies**: Record information about calls

### 8. Output Format

When generating tests, provide:

1. **Test file location and name**
2. **Necessary imports and setup**
3. **Complete test cases with:**
   - Descriptive names
   - Arrange/Act/Assert sections
   - Comments explaining complex scenarios
4. **Coverage summary**: What's tested, what's not
5. **Running instructions**: How to execute tests

## Code Coverage Goals

- **Minimum**: 70% overall coverage
- **Target**: 80%+ for critical business logic
- **Focus**: Quality over quantity - meaningful tests, not just coverage numbers

## When Improving Existing Tests

1. **Analyze current coverage**: Identify gaps
2. **Review existing tests**: Check for anti-patterns
3. **Prioritize**: Start with critical paths and low-coverage areas
4. **Refactor**: Make tests more maintainable
5. **Document**: Add comments for complex test scenarios