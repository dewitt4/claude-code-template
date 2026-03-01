# Claude Plugins Configuration

This directory contains the Claude plugins marketplace configuration.

## marketplace.json

The `marketplace.json` file defines Claude plugins for your project.

### Structure

```json
{
  "name": "my-project-plugins",
  "owner": {
    "name": "Your Organization"
  },
  "plugins": [
    {
      "name": "plugin-name",
      "source": "./plugin-directory",
      "description": "What this plugin does"
    }
  ]
}
```

### Adding Plugins

1. Create a plugin directory (e.g., `./my-plugin`)
2. Add the plugin files to that directory
3. Update `marketplace.json` to reference the plugin:

```json
{
  "name": "my-new-plugin",
  "source": "./my-plugin",
  "description": "Brief description of the plugin functionality"
}
```

### Plugin vs Skill

**Skills** (`.claude/skills/`):
- Project-specific instructions
- Loaded on-demand based on semantic matching
- Written in Markdown
- Lightweight, instruction-based

**Plugins** (`.claude-plug-in/`):
- Can contain executable code
- More complex functionality
- Can include MCP servers
- May have dependencies

## Using Plugins

Once configured, Claude Code will recognize and load your plugins automatically when relevant to the task at hand.

## Resources

- [Claude Code Plugins Documentation](https://docs.anthropic.com/claude-code/plugins)
- [MCP Servers Guide](https://docs.anthropic.com/claude-code/mcp)

---

**Note**: The example configuration in this template is a placeholder. Replace it with your actual plugin configurations.
