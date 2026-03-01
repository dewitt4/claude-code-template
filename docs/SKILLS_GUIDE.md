# Skills Guide for Claude Code

This comprehensive guide will help you create, manage, and optimize skills for Claude Code.

## Table of Contents

- [What Are Skills?](#what-are-skills)
- [How Skills Work](#how-skills-work)
- [Creating a Skill](#creating-a-skill)
- [Skill Best Practices](#skill-best-practices)
- [Advanced Techniques](#advanced-techniques)
- [Troubleshooting](#troubleshooting)

## What Are Skills?

Skills are modular, reusable instruction sets that extend Claude Code's capabilities. Each skill is a self-contained directory with a `SKILL.md` file that contains:

1. **Frontmatter**: YAML metadata with name and description
2. **Instructions**: Detailed guidance for Claude on how to handle specific tasks

Think of skills as specialized knowledge domains that Claude can load on-demand.

## How Skills Work

### Loading Process

1. **Startup**: Claude loads skill names and descriptions from all `SKILL.md` files
2. **Matching**: When you make a request, Claude semantically matches it against skill descriptions
3. **Confirmation**: You see a prompt asking to load the full skill content
4. **Execution**: Once loaded, Claude uses the skill's instructions to complete your task

### Priority Order

When skills have naming conflicts, Claude follows this priority:
1. **Enterprise** skills (managed by organization)
2. **Personal** skills (your user-level skills)
3. **Project** skills (in `.claude/skills/`)
4. **Plugin** skills

## Creating a Skill

### Step 1: Create the Directory

```bash
mkdir -p .claude/skills/my-skill
```

### Step 2: Create SKILL.md

Create `.claude/skills/my-skill/SKILL.md`:

```markdown
---
name: my-skill
description: A clear, 1-2 sentence description of when this skill should be used
---

# My Skill Name

## Purpose
Brief explanation of what this skill does

## Instructions
Detailed step-by-step instructions for Claude...

## Examples
Optional: Include examples of how to use this skill
```

### Step 3: Write Effective Instructions

#### Good Instruction Structure

```markdown
# Skill Name

## When to Use This Skill
- Scenario 1
- Scenario 2

## Process
1. First, analyze the [specific aspect]
2. Then, [specific action]
3. Finally, [specific output]

## Guidelines
- Guideline 1
- Guideline 2

## Output Format
Describe the expected output structure
```

### Step 4: Test and Iterate

1. Restart Claude Code
2. Test the skill with various requests
3. Refine the description for better matching
4. Improve instructions based on results

## Skill Best Practices

### Writing Descriptions

**Good Description** (Specific, searchable):
```yaml
description: Generate comprehensive unit tests with Jest, including edge cases, mocks, and coverage analysis for JavaScript/TypeScript functions
```

**Poor Description** (Too vague):
```yaml
description: Help with testing
```

### Crafting Instructions

#### ✅ Do's

- **Be specific**: "Use Jest's `describe` and `test` blocks"
- **Include structure**: Use headings, lists, code examples
- **Provide context**: Explain why, not just what
- **Set expectations**: Define output format clearly
- **Give examples**: Show concrete examples when helpful

#### ❌ Don'ts

- **Be vague**: "Do it well" ❌
- **Assume knowledge**: Claude needs explicit context
- **Overcomplicate**: Keep it focused and clear
- **Forget edge cases**: Address exceptions and alternatives

### Example: Well-Structured Skill

```markdown
---
name: api-endpoint-creator
description: Create RESTful API endpoints with Express.js including routes, controllers, validation, error handling, and tests
---

# API Endpoint Creator

## Process

### 1. Understand Requirements
- Identify the resource (users, posts, etc.)
- Determine HTTP method (GET, POST, PUT, DELETE)
- List required and optional parameters
- Define expected response format

### 2. Create the Route
```javascript
// routes/[resource].js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/[resource]');

router.get('/:id', controller.getById);
// ... more routes
```

### 3. Implement Controller
- Handle request validation
- Call service layer
- Format response
- Handle errors

### 4. Add Tests
- Test happy path
- Test validation errors
- Test not found scenarios
- Test authorization

## Output Structure
1. Route file with all endpoints
2. Controller with business logic
3. Validation middleware
4. Test file with comprehensive coverage
5. Brief usage documentation
```

## Advanced Techniques

### Conditional Instructions

Handle different scenarios within one skill:

```markdown
## If using TypeScript
- Include type definitions
- Use interfaces for request/response

## If using JavaScript
- Include JSDoc comments
- Use clear variable names
```

### Referencing Project Context

```markdown
## Before Starting
1. Check `.claude/CLAUDE.md` for project-specific conventions
2. Review existing similar code for patterns
3. Ensure consistency with codebase style
```

### Multi-Step Workflows

Break complex tasks into phases:

```markdown
## Phase 1: Analysis
- Read existing code
- Identify patterns
- Note dependencies

## Phase 2: Implementation
- Implement feature
- Follow patterns identified

## Phase 3: Testing
- Write tests
- Verify coverage
```

## Troubleshooting

### Skill Not Loading

**Issue**: Skill doesn't appear when expected

**Solutions**:
1. Verify `SKILL.md` file exists in `..claude/skills/[skill-name]/`
2. Check frontmatter YAML is valid
3. Restart Claude Code
4. Improve description to be more specific

### Wrong Skill Activating

**Issue**: Claude loads a different skill than intended

**Solutions**:
1. Make skill descriptions more distinct
2. Use more specific keywords in descriptions
3. Use more specific request phrasing

### Skill Instructions Unclear

**Issue**: Claude doesn't follow instructions correctly

**Solutions**:
1. Add more specific step-by-step guidance
2. Include examples of expected output
3. Break complex instructions into smaller steps
4. Test with different phrasings

## Examples of Effective Skills

### 1. Migration Assistant
```markdown
---
name: db-migration
description: Create database migration scripts with up/down methods, validation, and rollback support for SQL databases
---
```

### 2. Documentation Generator
```markdown
---
name: api-docs-generator
description: Generate OpenAPI/Swagger documentation from Express.js routes with examples, schemas, and response codes
---
```

### 3. Refactoring Guide
```markdown
---
name: code-refactoring
description: Refactor code to improve maintainability, applying SOLID principles, design patterns, and reducing technical debt
---
```

## Skill Management Commands

### List All Skills
Skills are in `.claude/skills/[skill-name]/SKILL.md`

### Disable a Skill Temporarily
Rename the directory: `mv my-skill _my-skill` (prefix with underscore)

### Remove a Skill
```bash
rm -rf .claude/skills/my-skill
```

### Update a Skill
1. Edit `.claude/skills/my-skill/SKILL.md`
2. Restart Claude Code

## Tips for Great Skills

1. **Start Simple**: Begin with basic instructions, add complexity as needed
2. **Test Often**: Try different phrasings to ensure matching works
3. **Document Examples**: Keep track of what works well
4. **Iterate**: Refine based on actual usage
5. **Be Consistent**: Use similar structure across your skills
6. **Stay Focused**: One skill = one clear purpose
7. **Include Context**: Help Claude understand the "why"

## Next Steps

- Review the [example skills](../.claude/skills/) in this template
- Create your first custom skill
- Test it with real workflows
- Share successful skills with your team

---

Need help? Open an issue or check the [Claude Code documentation](https://docs.anthropic.com/claude-code).