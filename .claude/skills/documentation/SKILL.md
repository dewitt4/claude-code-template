---
name: documentation
description: Create and maintain technical documentation including README files, API docs, inline comments, architecture diagrams, and user guides
---

# Documentation Skill

When creating or updating documentation, follow these comprehensive guidelines:

## Documentation Types

### 1. README Files
Essential for every project and major module:

#### Structure
```markdown
# Project Name
Brief description (1-2 sentences)

## Features
- Key feature 1
- Key feature 2

## Installation
Step-by-step setup instructions

## Usage
Basic examples and common use cases

## Configuration
Environment variables, config files

## API Reference (if applicable)
Link to detailed API docs

## Contributing
How to contribute to the project

## License
License information
```

### 2. Code Comments

#### When to Comment
- **Complex Logic**: Algorithms, business rules, non-obvious decisions
- **Why, Not What**: Explain reasons, not obvious actions
- **Public APIs**: Document parameters, return values, exceptions
- **TODOs**: Track future work with context
- **Warnings**: Note gotchas, limitations, performance considerations

#### Comment Style
```javascript
// Good: Explains why
// Using binary search here because the array is always sorted
// and can contain millions of items (requirements doc §3.2)

// Bad: States the obvious
// Loop through the array
```

### 3. API Documentation

For each endpoint/function:
- **Purpose**: What it does
- **Parameters**: Name, type, required/optional, description, constraints
- **Return Value**: Type, structure, possible values
- **Errors**: What can go wrong, error codes
- **Examples**: Real-world usage examples
- **Authentication**: Required permissions/tokens
- **Rate Limits**: If applicable

#### Example Format (REST API)
```markdown
### GET /api/users/:id

Retrieve a user by ID.

**Parameters:**
- `id` (string, required): User UUID

**Response:** 200 OK
```json
{
  "id": "abc123",
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Errors:**
- 404: User not found
- 401: Unauthorized

**Example:**
```bash
curl -H "Authorization: Bearer token" https://api.example.com/api/users/abc123
```
```

### 4. Architecture Documentation

#### Key Elements
- **System Overview**: High-level architecture diagram
- **Components**: Major system components and responsibilities
- **Data Flow**: How data moves through the system
- **Dependencies**: External services, databases, libraries
- **Deployment**: How the system is deployed
- **Security**: Authentication, authorization, data protection
- **Scalability**: How the system scales

#### Document Patterns
- Architecture patterns used (MVC, microservices, etc.)
- Design patterns and where they're applied
- Important architectural decisions and rationale

### 5. User Guides

For end-users:
- **Getting Started**: Quick start guide
- **Tutorials**: Step-by-step walkthroughs
- **How-To Guides**: Task-oriented instructions
- **Troubleshooting**: Common issues and solutions
- **FAQ**: Frequently asked questions
- **Glossary**: Term definitions

## Documentation Best Practices

### Writing Style
- **Clear**: Use simple language, short sentences
- **Concise**: Remove unnecessary words
- **Active Voice**: "The function returns" not "is returned by"
- **Present Tense**: "Creates a user" not "will create"
- **Consistent**: Use same terms throughout
- **Accessible**: Avoid jargon, or explain it

### Structure
- **Progressive Disclosure**: Start simple, add detail
- **Logical Flow**: Organize information intuitively
- **Scannable**: Use headings, lists, code blocks
- **Search-Friendly**: Use clear, descriptive headings

### Maintenance
- **Keep Updated**: Update docs with code changes
- **Version Control**: Track docs with code
- **Review**: Include docs in code reviews
- **Test**: Verify examples and instructions work

### Visual Aids
- **Diagrams**: Architecture, flow charts, sequence diagrams
- **Screenshots**: UI documentation
- **Code Examples**: Realistic, working examples
- **Tables**: Comparisons, parameter lists

## Tools and Formats

### Documentation Tools
- **Markdown**: README, general docs (.md)
- **JSDoc/JavaDoc**: Inline code documentation
- **Swagger/OpenAPI**: API specifications
- **Mermaid**: Diagrams in markdown
- **Docusaurus/GitBook**: Documentation sites

### Diagram Tools
- **Mermaid**: Text-based diagrams in markdown
- **PlantUML**: UML diagrams from text
- **Draw.io**: Visual diagramming

## Documentation Checklist

When creating documentation:

- [ ] Purpose is clear
- [ ] Audience is appropriate
- [ ] Examples are included
- [ ] Prerequisites are listed
- [ ] Steps are numbered and clear
- [ ] Common issues are addressed
- [ ] Links are working
- [ ] Code examples are tested
- [ ] Spelling and grammar checked
- [ ] Diagrams are clear and labeled
- [ ] Contact info or support channel included

## Output Format

When generating documentation:

1. **Determine the type**: What kind of documentation is needed?
2. **Understand the audience**: Developers, end-users, admins?
3. **Structure appropriately**: Use the right format for the content
4. **Include examples**: Real, working examples
5. **Add visuals**: Diagrams or code snippets where helpful
6. **Review for clarity**: Is this understandable to the target audience?