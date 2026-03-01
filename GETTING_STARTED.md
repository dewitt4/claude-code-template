# Getting Started with Claude Code Template

Welcome! This guide will help you set up and start using this template in minutes.

## Prerequisites

- VS Code installed
- Claude Code extension installed and configured
- Git installed (for cloning)
- Node.js installed (if using the example JavaScript setup)

## Setup Steps

### 1. Create Your Repository

**Option A: Use Template on GitHub**
1. Click "Use this template" button
2. Name your new repository
3. Clone it to your local machine

**Option B: Clone Directly**
```bash
git clone https://github.com/kpmg-us/claude-code-template.git my-project
cd my-project
rm -rf .git  # Remove template's git history
git init      # Start fresh
```

### 2. Customize for Your Project

#### Update Package Information
Edit `package.json`:
```json
{
  "name": "my-awesome-project",
  "description": "My project description",
  "author": "Your Name"
}
```

#### Configure Claude Instructions
Edit `.claude/CLAUDE.md` with your project specifics:
```markdown
# My Project

## Tech Stack
- List your technologies
- Frameworks used
- Key libraries

## Coding Standards
- Your conventions
- Style guidelines
- Best practices

## Project Structure
- Explain your layout
- Important directories
- Key files
```

#### Create Your Project Plan (Optional but Recommended)
Edit `.claude/PLAN.md` to create a comprehensive project roadmap. The template includes:
- Project overview and goals
- Technical architecture and tech stack
- Development phases with milestones
- Feature requirements with acceptance criteria
- Coding standards and conventions
- API design and database schema
- Security and performance requirements
- Deployment strategy

The PLAN.md helps Claude understand your complete project context and make consistent architectural decisions throughout development.

**Quick start**: The template already includes a detailed example. Review it and customize for your needs, or delete sections that aren't relevant.

#### Update README
1. Replace template content with your project info
2. Keep the parts about skills if still relevant
3. Add your specific setup instructions

### 3. Install Dependencies

```bash
# If using Node.js
npm install

# Or with Yarn
yarn install

# Or with pnpm
pnpm install
```

### 4. Open with Claude Code

1. Open your project folder in VS Code
2. Ensure Claude Code extension is active
3. Start a conversation with Claude!

### 5. Test the Setup

Try these commands to test Claude Code with the template:

```
You: "Explain the project structure"
Claude: [Will read and explain based on your setup]

You: "Review the example code"
Claude: [Will use the code-review skill]

You: "Generate tests for src/index.js"
Claude: [Will use the testing skill]
```

## First Tasks

### Customize Skills

1. Review example skills in `.claude/skills/`
2. Decide which to keep, modify, or remove
3. Create your own project-specific skills

### Set Up Your Tech Stack

Replace the example code with your actual stack:

```bash
# Remove example files
rm src/index.js tests/index.test.js

# Set up your framework
# For React:
npx create-react-app .

# For Next.js:
npx create-next-app .

# For Express API:
npm init -y && npm install express

# etc.
```

### Configure Git

```bash
git add .
git commit -m "feat: initialize project from claude-code-template"
git remote add origin <your-repo-url>
git push -u origin main
```

## Quick Commands Reference

### Development
```bash
npm start          # Start the application
npm test           # Run tests
npm test:coverage  # Run tests with coverage
npm run lint       # Lint code
```

### Claude Code
- Open chat: `Cmd/Ctrl + Shift + P` → "Claude: Open Chat"
- Use skills: Just ask naturally, Claude will match skills
- Reload skills: Restart VS Code after skill changes

## Common Issues

### Skills Not Loading
- **Solution**: Restart VS Code
- **Check**: `.claude/skills/*/SKILL.md` files exist and have valid frontmatter

### Claude Doesn't Follow Project Conventions
- **Solution**: Update `.claude/CLAUDE.md` with more explicit instructions
- **Tip**: Be specific and include examples

### Example Code Conflicts with Your Setup
- **Solution**: Delete the example files in `src/` and `tests/`
- **Note**: They're just placeholders to demonstrate structure

## Next Steps

1. ✅ Read [docs/SKILLS_GUIDE.md](docs/SKILLS_GUIDE.md) for deep dive into skills
2. ✅ Explore [docs/EXAMPLES.md](docs/EXAMPLES.md) for workflow ideas
3. ✅ Create your first custom skill
4. ✅ Start building with Claude Code!

## Resources

- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [Template README](README.md)
- [Contributing Guide](CONTRIBUTING.md)

## Need Help?

- Check [docs/EXAMPLES.md](docs/EXAMPLES.md) for common scenarios
- Review existing skills for inspiration
- Open an issue if you find a problem with the template

---

**You're all set! Start building amazing things with Claude Code!** 🚀

*Tip: Keep this file for reference, or delete it once you're comfortable with the setup.*
