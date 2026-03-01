# Skills for Claude Code

This directory contains custom skills for Claude Code. Each skill is a self-contained module with specific instructions.

## Available Skills

### Example Skills
The following example skills are included to demonstrate best practices:

- **code-review**: Comprehensive code review with focus on best practices, security, and maintainability
- **testing**: Generate and improve test cases with coverage analysis
- **documentation**: Create and maintain technical documentation

## Creating Your Own Skills

1. Create a new directory with your skill name: `.claude/skills/my-skill/`
2. Add a `SKILL.md` file with frontmatter and instructions
3. Restart Claude Code to load the new skill

### Skill Template

```markdown
---
name: skill-name
description: Clear description for semantic matching (1-2 sentences)
---

# Skill Name

Detailed instructions for Claude about how to handle this skill...
```

## Tips for Effective Skills

- **Clear descriptions**: Help Claude match the right skill to user requests
- **Focused scope**: Each skill should handle one type of task well
- **Actionable instructions**: Be specific about what Claude should do
- **Examples**: Include examples when helpful
- **Update regularly**: Refine based on what works
