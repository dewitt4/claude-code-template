# Claude Code Template

A comprehensive template repository to jumpstart your Claude Code development workflow with best practices, skills, and project structure.

## 🚀 Quick Start

1. **Use this template**: Click "Use this template" button on GitHub
2. **Clone your repository**: `git clone <your-repo-url>`
3. **Open in VS Code**: Open the folder with Claude Code extension installed
4. **Customize**: Update `.claude/CLAUDE.md` with your project-specific instructions
5. **Start coding**: Begin your conversation with Claude Code

**Need detailed setup instructions?** See [GETTING_STARTED.md](GETTING_STARTED.md) for a comprehensive guide.

## 📁 Repository Structure

```
.
├── .claude/                    # Claude Code configuration
│   ├── CLAUDE.md              # Project-specific instructions for Claude
│   ├── PLAN.md                # Project plan and roadmap (optional)
│   └── skills/                # Custom skills for Claude
│       ├── SKILLS.md          # Skills overview
│       ├── SKILL_TEMPLATE.md  # Template for creating new skills
│       └── [skill-name]/      # Individual skill directories
│           └── SKILL.md       # Skill definition and instructions
├── .claude-plug-in/           # Claude plugins configuration
│   ├── README.md              # Plugin setup guide
│   └── marketplace.json       # Plugin marketplace configuration
├── src/                       # Your source code (customize as needed)
├── tests/                     # Test files
├── docs/                      # Project documentation
├── .gitignore                 # Git ignore rules
├── GETTING_STARTED.md         # Detailed setup guide
└── README.md                  # This file
```

## 🎯 What's Included

### Claude Configuration
- **CLAUDE.md**: Central place for project-specific instructions that Claude Code reads automatically
- **PLAN.md**: Comprehensive project plan template with architecture, phases, and requirements
- **Skills System**: Modular, reusable instruction sets that Claude loads on-demand
- **SKILL_TEMPLATE.md**: Template for creating new skills with best practices

### Example Skills
This template includes three production-ready skills:
- **code-review**: Comprehensive code review with quality, security, and performance checks
- **testing**: Generate tests with coverage analysis for unit, integration, and e2e
- **documentation**: Create technical docs, API documentation, and guides

### Project Structure
- Clean, organized directory layout
- Example source code and test structure
- Gitignore configured for common development scenarios
- Comprehensive documentation and guides

## 🧠 Understanding Skills

A skill is a directory containing a `SKILL.md` file with:
- **Frontmatter**: Metadata (name, description) in YAML format
- **Instructions**: Detailed guidance for Claude below the frontmatter

### How Skills Work

1. **Load Time**: Claude loads only skill names and descriptions at startup
2. **Matching**: Incoming requests are matched against descriptions using semantic matching
3. **Confirmation**: You get a confirmation prompt before Claude loads the full skill content
4. **Priority**: Enterprise → Personal → Project → Plugins (in case of name conflicts)

### Managing Skills

- **Add**: Create a new directory with `SKILL.md` in `.claude/skills/`
- **Update**: Edit the `SKILL.md` file directly
- **Remove**: Delete the skill directory
- **Apply Changes**: Restart Claude Code for changes to take effect

## 🔧 Customization Guide

### 1. Update Project Instructions
Edit `.claude/CLAUDE.md` with your project-specific context:
- Tech stack and architecture
- Coding conventions and standards
- Project goals and constraints
- Important file locations

### 2. Create Your Project Plan (Optional but Recommended)
Edit `.claude/PLAN.md` to define your project roadmap:
- Project goals and success criteria
- Technical architecture and design decisions
- Development phases and milestones
- Feature requirements with acceptance criteria
- Coding standards and API design
- Security, performance, and deployment strategy

**Why use a project plan?**
- Gives Claude full context about your project
- Ensures consistent architectural decisions
- Tracks progress through development phases
- Serves as single source of truth for requirements

### 3. Create Custom Skills
Use the provided template to create skills for your common tasks:

1. Copy `.claude/skills/SKILL_TEMPLATE.md` as reference
2. Create your skill directory:
```bash
mkdir -p .claude/skills/my-skill
```
3. Create `.claude/skills/my-skill/SKILL.md`:
```markdown
---
name: my-skill
description: Brief description for semantic matching
---

# Detailed instructions for Claude

Your detailed instructions here...
```

### 4. Configure Plugins
Update `.claude-plug-in/marketplace.json` if using Claude plugins

### 5. Adapt Project Structure
Modify the `src/`, `tests/`, `docs/`, and other directories to match your project needs

## 📚 Best Practices

1. **Be Specific**: Write clear, detailed instructions in CLAUDE.md
2. **Plan Your Project**: Use PLAN.md to document architecture and requirements
3. **Modular Skills**: Break complex workflows into focused skills
4. **Good Descriptions**: Skill descriptions should clearly indicate when they're relevant
5. **Version Control**: Commit your Claude configuration with your code
6. **Documentation**: Keep docs in sync with your Claude instructions
7. **Iterate**: Refine instructions based on what works best

## 🎓 Resources

- [Getting Started Guide](GETTING_STARTED.md) - Detailed setup instructions
- [Project Plan Template](.claude/PLAN.md) - Comprehensive planning example
- [Skills Guide](docs/SKILLS_GUIDE.md) - Complete guide to skills
- [Examples & Workflows](docs/EXAMPLES.md) - Practical usage examples
- [Skill Template](.claude/skills/SKILL_TEMPLATE.md) - Create new skills
- [Claude Code Documentation](https://docs.anthropic.com/claude-code) - Official docs
