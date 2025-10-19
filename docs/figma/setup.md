# Figma MCP Setup Guide for Claude Code

## What is Figma MCP?

**Model Context Protocol (MCP)** is a standard interface for AI models to interact with external tools and data sources. The **Figma MCP server** allows Claude to:

- 📐 Inspect Figma designs
- 🎨 Extract design tokens (colors, typography)
- 📦 Generate code from components
- 🖼️ Export assets and images
- 🔄 Sync design changes with code

---

## Prerequisites

- ✅ Claude Code installed
- ✅ Node.js 16+ (`npm` available)
- ✅ Figma account (free or paid)
- ✅ Access to Figma Developer API

---

## Step-by-Step Setup

### Step 1: Get Your Figma Personal Access Token

1. Go to [Figma Developer Settings](https://www.figma.com/developers/api#access-tokens)
2. Click **"Get personal access token"**
3. Create a new token with name (e.g., "Claude Code")
4. **Copy the token** (starts with `figd_`)
5. ⚠️ **Keep this token secure** - treat it like a password!

**Token Format:**
```
figd_xxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

### Step 2: Run Setup Script

#### **For Windows (PowerShell):**

```powershell
# Set your Figma token
$env:FIGMA_TOKEN = "figd_your_token_here"

# Run setup script
.\setup_figma_mcp.ps1
```

#### **For macOS/Linux (Bash):**

```bash
# Set your Figma token
export FIGMA_TOKEN="figd_your_token_here"

# Run setup script
chmod +x setup_figma_mcp.sh
./setup_figma_mcp.sh
```

---

### Step 3: Manual Configuration (If Scripts Don't Work)

#### **Windows:**
1. Open: `%APPDATA%\Claude\claude_desktop_config.json`
   - Or: `C:\Users\<YourUsername>\AppData\Roaming\Claude\claude_desktop_config.json`

#### **macOS:**
1. Open: `~/Library/Application Support/Claude/claude_desktop_config.json`

#### **Linux:**
1. Open: `~/.config/Claude/claude_desktop_config.json`

#### **Add this configuration:**

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-figma"
      ],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_your_token_here"
      }
    }
  }
}
```

**Replace** `figd_your_token_here` with your actual token.

---

### Step 4: Restart Claude Code

1. **Close** Claude Code completely (not just a window)
2. **Reopen** Claude Code
3. Wait a few seconds for MCP to initialize

---

### Step 5: Verify Setup

Once restarted, test the connection:

**In Claude Code, ask:**
```
"List the files in my Figma workspace"
```

Or provide a Figma file URL:
```
"Analyze the design from this Figma file: https://www.figma.com/file/xxx/MyProject"
```

---

## Common Issues & Fixes

### Issue: "MCP server failed to start"

**Solution:**
1. Verify your Figma token is correct
2. Check token hasn't expired
3. Ensure npx is in your PATH
4. Try running `npx @modelcontextprotocol/server-figma` directly to test

### Issue: "Permission denied" or "Cannot find token"

**Solution:**
1. Verify file permissions on `claude_desktop_config.json`
2. Restart Claude Code completely
3. Check environment variable is set correctly

### Issue: "401 Unauthorized"

**Solution:**
1. Token may have expired - generate a new one
2. Token may have wrong permissions - regenerate
3. Check no extra spaces in token value

### Issue: "File not found" for config file

**Solution:**
1. Create directory manually:
   - Windows: `mkdir %APPDATA%\Claude`
   - macOS: `mkdir -p ~/Library/Application\ Support/Claude`
   - Linux: `mkdir -p ~/.config/Claude`
2. Create JSON file with text editor
3. Restart Claude Code

---

## Using Figma MCP in Claude Code

### Example 1: Extract Design System

```
"I have a Figma file with my design system. Extract all colors, typography, 
and spacing tokens and generate TypeScript constants."
```

### Example 2: Generate React Components

```
"Generate React components from the UI components in my Figma file: 
https://www.figma.com/file/xxx/DesignSystem"
```

### Example 3: Analyze Designs

```
"Review my Figma designs for accessibility issues: 
https://www.figma.com/file/xxx/MyApp"
```

### Example 4: Create Implementation Spec

```
"Create an implementation specification for these Figma designs including 
all breakpoints and responsive rules: [Figma URL]"
```

---

## Best Practices

### ✅ DO:

- Store token securely (don't commit to git)
- Use `.gitignore` to exclude config file if needed
- Regenerate token if it leaks
- Keep MCP server updated: `npm install -g @modelcontextprotocol/server-figma@latest`

### ❌ DON'T:

- Hardcode token in version control
- Share token publicly
- Use production tokens for testing
- Modify config file while Claude Code is running

---

## Security Notes

🔒 **Your Figma Personal Access Token:**
- Has full access to your Figma account
- Should be treated like a password
- Can be revoked anytime from Figma settings
- Never commit to git repositories

**If token is compromised:**
1. Go to [Figma API Settings](https://www.figma.com/developers/api#access-tokens)
2. Revoke the token immediately
3. Generate a new token
4. Update Claude Code config

---

## Troubleshooting

### Check Claude Code MCP Status

In Claude Code, type:
```
/help
```

Look for `mcp__` commands which indicate MCP servers are loaded.

### View Server Logs

On most systems, you can check:
- **Windows:** Event Viewer
- **macOS:** Console.app
- **Linux:** `journalctl -u claude-code` or app logs

### Manual Test

```bash
# Test if Figma MCP server runs standalone
npx @modelcontextprotocol/server-figma

# Should show connection info
```

---

## Uninstalling Figma MCP

### Option 1: Remove from Config

Edit `claude_desktop_config.json` and remove the `figma` section from `mcpServers`.

### Option 2: Remove Package

```bash
npm uninstall -g @modelcontextprotocol/server-figma
```

---

## Additional Resources

- 📚 [Figma API Documentation](https://www.figma.com/developers/api)
- 📚 [Model Context Protocol](https://modelcontextprotocol.io/)
- 📚 [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code/claude_code_docs_map.md)
- 💬 [Figma Community Forum](https://forum.figma.com)

---

## Support

**If you encounter issues:**

1. Check this guide's troubleshooting section
2. Review Claude Code logs
3. Verify Figma API token at https://www.figma.com/developers/api
4. Report issues to [Figma Support](https://support.figma.com) or [Claude Support](https://support.anthropic.com)

---

**Happy designing with Claude Code! 🎨✨**
