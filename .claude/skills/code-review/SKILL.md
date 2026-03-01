---
name: code-review
description: Perform comprehensive code reviews focusing on best practices, security, performance, maintainability, and code quality
---

# Code Review Skill

When performing code reviews, follow this systematic approach:

## Review Checklist

### 1. Code Quality
- **Readability**: Is the code easy to understand? Are variable and function names descriptive?
- **Simplicity**: Is the code as simple as it can be? Any unnecessary complexity?
- **DRY Principle**: Is there code duplication that should be abstracted?
- **Consistency**: Does the code follow project conventions and style guidelines?

### 2. Functionality
- **Correctness**: Does the code do what it's supposed to do?
- **Edge Cases**: Are edge cases and error conditions handled?
- **Logic**: Is the logic sound and easy to follow?
- **Testing**: Are there adequate tests? Do they cover important scenarios?

### 3. Security
- **Input Validation**: Is user input properly validated and sanitized?
- **Authentication/Authorization**: Are security checks in place?
- **Sensitive Data**: Is sensitive data properly protected?
- **Dependencies**: Are dependencies up-to-date and secure?

### 4. Performance
- **Efficiency**: Are there any obvious performance issues?
- **Resource Usage**: Is memory and CPU usage reasonable?
- **Scalability**: Will this code scale with increased load?
- **Database Queries**: Are queries optimized (N+1 problems, indexes)?

### 5. Maintainability
- **Documentation**: Is complex logic documented?
- **Error Handling**: Are errors handled gracefully with helpful messages?
- **Modularity**: Is the code properly modularized?
- **Technical Debt**: Does this introduce or reduce technical debt?

## Review Format

Provide feedback in this structure:

### ✅ Strengths
List what the code does well

### ⚠️ Issues Found
Categorize by severity:
- **Critical**: Security issues, bugs, data loss risks
- **Major**: Performance problems, architectural concerns
- **Minor**: Style issues, minor improvements

### 💡 Suggestions
Specific, actionable recommendations with code examples when helpful

### 📝 Summary
Brief overall assessment and priority recommendations

## Tone
- Be constructive and respectful
- Explain the "why" behind suggestions
- Offer alternatives when criticizing
- Acknowledge good practices