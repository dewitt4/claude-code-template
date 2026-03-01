# Claude Code Template Examples

This document provides practical examples of how to use Claude Code effectively with this template.

## Getting Started Examples

### Example 1: Setting Up a New Project

**Scenario**: You're starting a new Node.js API project

**Steps**:
1. Use this template to create your repository
2. Update `.claude/CLAUDE.md`:
   ```markdown
   # My API Project
   
   ## Tech Stack
   - Node.js 18+ with Express.js
   - PostgreSQL database
   - Jest for testing
   - TypeScript
   
   ## Conventions
   - Use async/await, not callbacks
   - Follow REST API best practices
   - All endpoints must have tests
   - Use dependency injection pattern
   ```
3. Ask Claude: "Set up the basic Express.js project structure with TypeScript"
4. Claude will create the project structure following your conventions

### Example 2: Using the Code Review Skill

**Scenario**: You want Claude to review your pull request

**What you say**:
> "Review this pull request for code quality, security, and performance issues"

**What happens**:
1. Claude's code-review skill is automatically matched to your request
2. You confirm loading the skill
3. Claude performs a comprehensive review using the skill's checklist
4. You get structured feedback with severity levels and actionable suggestions

### Example 3: Generating Tests

**Scenario**: You have a new function that needs tests

**What you say**:
> "Generate comprehensive tests for the userController.js file"

**What happens**:
1. The testing skill is matched and loaded
2. Claude analyzes your function
3. Generates unit tests covering:
   - Happy path
   - Edge cases
   - Error conditions
   - Mocking external dependencies
4. Provides test coverage summary

## Workflow Examples

### Workflow 1: Feature Development

**Complete workflow for adding a new feature**:

1. **Planning**:
   ```
   You: "I need to add user authentication with JWT tokens"
   Claude: [Analyzes requirements, proposes architecture]
   ```

2. **Implementation**:
   ```
   You: "Implement the JWT authentication middleware"
   Claude: [Creates middleware with token validation, error handling]
   ```

3. **Testing**:
   ```
   You: "Generate tests for the auth middleware"
   Claude: [Uses testing skill to create comprehensive test suite]
   ```

4. **Documentation**:
   ```
   You: "Document the authentication flow"
   Claude: [Uses documentation skill to create API docs]
   ```

5. **Review**:
   ```
   You: "Review all the authentication code"
   Claude: [Uses code-review skill for final check]
   ```

### Workflow 2: Bug Fixing

**Debugging and fixing an issue**:

1. **Analyze**:
   ```
   You: "Users are getting 500 errors on /api/posts/:id"
   Claude: [Examines code, identifies potential issues]
   ```

2. **Fix**:
   ```
   You: "Fix the null pointer issue in the posts controller"
   Claude: [Implements fix with proper error handling]
   ```

3. **Test**:
   ```
   You: "Add tests to prevent this regression"
   Claude: [Creates tests for the bug scenario]
   ```

4. **Document**:
   ```
   You: "Add inline comments explaining the fix"
   Claude: [Adds clear documentation]
   ```

### Workflow 3: Refactoring

**Improving existing code**:

1. **Assessment**:
   ```
   You: "Review src/utils/dataProcessor.js for refactoring opportunities"
   Claude: [Uses code-review skill, identifies issues]
   ```

2. **Refactor**:
   ```
   You: "Refactor this to follow SOLID principles"
   Claude: [Restructures code, extracts classes/functions]
   ```

3. **Verify**:
   ```
   You: "Ensure all existing tests still pass"
   Claude: [Runs tests, updates if needed]
   ```

4. **Document Changes**:
   ```
   You: "Update the README to reflect the new structure"
   Claude: [Updates documentation]
   ```

## Custom Skill Examples

### Example: Creating a Git Commit Message Skill

**Need**: Standardized, informative commit messages

**Create skill**:
```markdown
---
name: git-commit-message
description: Generate conventional commit messages following team standards with proper formatting and scope
---

# Git Commit Message Generator

## Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

## Types
- feat: New feature
- fix: Bug fix
- docs: Documentation
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance

## Guidelines
- Subject: 50 chars max, imperative mood
- Body: Wrap at 72 chars, explain what and why
- Footer: Reference issues (Closes #123)

## Examples
```
feat(auth): add JWT token refresh mechanism

Implement automatic token refresh to improve UX.
Tokens refresh 5 minutes before expiration.

Closes #42
```
```

**Usage**:
```
You: "Create a commit message for the authentication changes"
Claude: [Generates properly formatted commit message]
```

### Example: Creating a PR Description Skill

```markdown
---
name: pr-description
description: Generate comprehensive pull request descriptions with changes summary, testing notes, and review checklist
---

# Pull Request Description Generator

## Template
```markdown
## Changes
- List of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- How tested
- Edge cases covered

## Screenshots
[If UI changes]

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No lint errors
- [ ] Follows code style

## Related Issues
Closes #[issue number]
```

## Instructions
- Analyze git diff to list changes
- Categorize type of change
- Describe testing approach
- Generate appropriate checklist
```

## Integration Examples

### Example: CI/CD Pipeline Setup

**Scenario**: Set up automated testing and deployment

**Conversation**:
```
You: "Set up GitHub Actions for testing and deployment"

Claude: [Creates .github/workflows/ci.yml with:
- Automated testing on PRs
- Code coverage reporting
- Deployment to staging/production
- Following project conventions from CLAUDE.md]
```

### Example: Database Integration

**Scenario**: Add database with migrations

**Conversation**:
```
You: "Set up PostgreSQL with Prisma ORM and create migrations"

Claude: [
1. Installs dependencies
2. Creates prisma/schema.prisma
3. Sets up migration scripts
4. Creates example models
5. Adds database connection code
6. Generates tests
7. Updates documentation
]
```

## Tips for Effective Prompts

### ✅ Good Prompts

- **Specific**: "Generate Jest tests for the validateEmail function with edge cases"
- **Contextual**: "Following our REST API conventions, create an endpoint for user profile updates"
- **Clear Intent**: "Refactor the data processing module to improve performance"

### ❌ Poor Prompts

- **Too Vague**: "Make it better"
- **No Context**: "Add a function" (which function? where?)
- **Ambiguous**: "Fix it" (fix what?)

## Common Patterns

### Pattern 1: Read-Understand-Implement

```
1. "Show me the current auth implementation"
2. [Claude reads and explains code]
3. "Add OAuth support following the same pattern"
4. [Claude implements consistently]
```

### Pattern 2: Example-Based

```
You: "Create a user model similar to posts.model.js"
Claude: [Analyzes example, creates consistent new model]
```

### Pattern 3: Iterative Refinement

```
You: "Create a data validation utility"
Claude: [Creates basic version]
You: "Add custom validation rules support"
Claude: [Extends with new feature]
You: "Add TypeScript types"
Claude: [Adds type safety]
```

## Troubleshooting Common Scenarios

### Scenario: Claude Doesn't Follow Project Conventions

**Solution**: Update `.claude/CLAUDE.md` with explicit conventions

```markdown
## Coding Standards
- ALWAYS use arrow functions for React components
- NEVER use var, only const/let
- File naming: camelCase for files, PascalCase for classes
```

### Scenario: Skills Not Activating

**Solution**: Use more explicit trigger phrases

Instead of: "Look at this code"
Use: "Review this code for quality issues" (triggers code-review skill)

## Advanced Use Cases

### Multi-File Refactoring

```
You: "Refactor the entire /services directory to use dependency injection"
Claude: [
- Analyzes all files
- Creates systematic refactoring plan
- Updates files incrementally
- Updates tests
- Verifies no breaking changes
]
```

### Architecture Documentation

```
You: "Generate architecture documentation for this project"
Claude: [
- Analyzes code structure
- Creates architecture diagrams (mermaid)
- Documents patterns used
- Explains data flow
- Creates component documentation
]
```

### Migration Projects

```
You: "Help migrate from JavaScript to TypeScript"
Claude: [
- Creates migration plan
- Converts files incrementally
- Adds type definitions
- Updates tests
- Ensures no runtime changes
]
```

## Next Steps

1. Try the examples above with your own code
2. Create custom skills for your specific workflows
3. Share successful patterns with your team
4. Refine `.claude/CLAUDE.md` based on what works

---

Have a great workflow example? Consider contributing it back to this template!