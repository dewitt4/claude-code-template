# Skill Template

Use this template to create new skills for Claude Code.

Copy this file to `.claude/skills/[your-skill-name]/SKILL.md` and customize.

---

```markdown
---
name: skill-name
description: Clear, semantic description (1-2 sentences) that helps Claude match requests to this skill. Be specific about when this skill should be used.
---

# Skill Name

One sentence overview of what this skill does.

## Purpose

Explain what this skill is for and when it should be used.

## When to Use This Skill

- Scenario 1
- Scenario 2
- Scenario 3

## Process

### Step 1: [First Major Step]
- Sub-step or detail
- Another sub-step
- Important consideration

### Step 2: [Second Major Step]
- What to do
- How to do it
- What to check

### Step 3: [Additional Steps as Needed]
- Continue the process
- Include all necessary steps

## Guidelines

### Important Rules
- Rule or convention to follow
- Another important guideline
- Best practice to apply

### Best Practices
- Recommended approach 1
- Recommended approach 2
- Recommended approach 3

### Things to Avoid
- Anti-pattern or mistake to avoid
- Another thing to watch out for

## Output Format

Describe what the final output should look like:

1. **Component 1**: Description
2. **Component 2**: Description
3. **Component 3**: Description

## Examples

### Example 1: [Common Use Case]

**Input/Request**:
```
Description of what the user might ask
```

**Expected Output**:
```
What Claude should produce
```

### Example 2: [Another Scenario]

**Input/Request**:
```
Another example request
```

**Expected Output**:
```
Another example output
```

## Error Handling

How to handle edge cases or errors:

- **If [condition]**: Do [action]
- **If [another condition]**: Do [different action]
- **When [edge case]**: Handle by [approach]

## Related Skills

- **[Related Skill 1]**: When to use that instead
- **[Related Skill 2]**: How they work together

## References

Optional: Links to relevant documentation, standards, or resources:
- [Resource 1](url)
- [Resource 2](url)

---

## Notes for Skill Author

- Keep the description focused and searchable
- Use clear, actionable language
- Include examples when helpful
- Test with various request phrasings
- Update based on actual usage patterns
```

---

## Tips for Writing Your Skill

### 1. Description
- This is crucial for semantic matching
- Include keywords that users might say
- Be specific about the skill's scope
- Keep it 1-2 sentences but information-rich

**Good**: "Create React components with TypeScript, including props interfaces, state management with hooks, and comprehensive unit tests with React Testing Library"

**Bad**: "Help with React"

### 2. Structure
- Use clear headings and hierarchy
- Break complex processes into steps
- Include both "what" and "why"
- Make it scannable with bullets and lists

### 3. Examples
- Real-world scenarios
- Show both input and output
- Cover common use cases
- Demonstrate best practices

### 4. Testing
After creating your skill:
1. Restart VS Code
2. Try various ways of asking for the skill
3. Verify Claude interprets instructions correctly
4. Refine based on results

### 5. Maintenance
- Update as you learn what works
- Refine the description if matching is off
- Add examples from real usage
- Remove sections that Claude doesn't use

## Quick Checklist

Before finalizing your skill, verify:

- [ ] Valid YAML frontmatter with name and description
- [ ] Clear, searchable description
- [ ] Well-organized structure with headings
- [ ] Step-by-step instructions
- [ ] Guidelines and best practices included
- [ ] Output format specified
- [ ] Examples provided (if helpful)
- [ ] Edge cases addressed
- [ ] Tested with Claude Code
- [ ] No grammar or spelling errors

## Common Skill Patterns

### Code Generation Skill
```markdown
1. Requirements analysis
2. Code structure planning
3. Implementation
4. Testing approach
5. Documentation
```

### Review/Analysis Skill
```markdown
1. Initial assessment
2. Detailed analysis checklist
3. Issue categorization
4. Recommendations
5. Summary format
```

### Documentation Skill
```markdown
1. Content type identification
2. Audience consideration
3. Structure template
4. Writing guidelines
5. Quality checklist
```

### Process/Workflow Skill
```markdown
1. Context gathering
2. Sequential steps
3. Decision points
4. Output format
5. Validation
```

---

Ready to create your skill? Copy the template above and start customizing!
