# Figma MCP Integration for Claude Code - Complete Setup Package

## 📦 What You Have

### Setup Scripts
1. **setup_figma_mcp.ps1** - Windows PowerShell setup script
2. **setup_figma_mcp.sh** - macOS/Linux bash setup script

### Documentation
1. **FIGMA_MCP_SETUP.md** - Comprehensive setup guide (detailed)
2. **FIGMA_MCP_QUICK_START.md** - Quick reference (5 min)
3. **FIGMA_MCP_INTEGRATION_SUMMARY.md** - This file

---

## 🚀 Quick Path to Success

### Fastest Way (2 minutes):

**Windows:**
```powershell
$env:FIGMA_TOKEN = "figd_your_token_here"
.\setup_figma_mcp.ps1
```

**macOS/Linux:**
```bash
export FIGMA_TOKEN="figd_your_token_here"
./setup_figma_mcp.sh
```

Then restart Claude Code.

---

## 📋 Step-by-Step Path (5 minutes):

1. Get token from https://www.figma.com/developers/api#access-tokens
2. Edit config file (see paths below)
3. Paste JSON configuration (see "Manual Config" section below)
4. Restart Claude Code
5. Test with Figma question

---

## 🔧 Manual Configuration

### Config File Locations

| OS | Location |
|----|----------|
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` |
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| **Linux** | `~/.config/Claude/claude_desktop_config.json` |

### Configuration Template

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

---

## 🔐 Getting Your Figma Token

1. Visit: https://www.figma.com/developers/api#access-tokens
2. Click: "Get personal access token"
3. Name it: "Claude Code" (or similar)
4. Click: "Create token"
5. **Copy the token immediately** (it won't show again)
6. Token format: `figd_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

**⚠️ Security:** 
- Never commit token to git
- Treat like a password
- Revoke anytime from Figma settings

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Claude Code starts without errors
- [ ] No "MCP" or "token" errors in logs
- [ ] Claude Code loads normally
- [ ] Ask Claude: "What Figma files do I have?"
- [ ] Claude responds with project/file list

---

## 🎯 What You Can Do Now

### Design System Extraction
```
"Extract all colors, typography, and spacing from my design system in Figma 
and create Tailwind CSS config"
```

### Component Generation
```
"Generate React components from the UI components in this Figma file: [URL]"
```

### Code Sync
```
"Keep my React component library in sync with these Figma designs: [URL]"
```

### Design Analysis
```
"Review these Figma designs for accessibility issues: [URL]"
```

### Type Generation
```
"Generate TypeScript types for all components in this design: [URL]"
```

---

## 🐛 Common Issues

### Issue: Config file not found
**Solution:** Create directory first
```bash
# Windows: mkdir %APPDATA%\Claude
# macOS: mkdir -p ~/Library/Application\ Support/Claude
# Linux: mkdir -p ~/.config/Claude
```

### Issue: Token errors after restart
**Solution:** 
1. Verify token starts with `figd_`
2. No extra spaces in JSON
3. Completely restart Claude Code
4. Check config file JSON is valid

### Issue: "MCP server failed"
**Solution:**
1. Test npm: `npm --version`
2. Test npx: `npx --version`
3. Reinstall package: `npm install -g @modelcontextprotocol/server-figma@latest`

### Issue: 401 Unauthorized
**Solution:** Token expired
1. Go to Figma API settings
2. Revoke old token
3. Generate new token
4. Update config file
5. Restart Claude Code

---

## 📚 Documentation Map

| Document | Purpose | Length |
|----------|---------|--------|
| FIGMA_MCP_QUICK_START.md | Get running ASAP | 3 min read |
| FIGMA_MCP_SETUP.md | Full details + troubleshooting | 10 min read |
| FIGMA_MCP_INTEGRATION_SUMMARY.md | This summary | 5 min read |

---

## 🔗 Resources

- [Figma Developer API](https://www.figma.com/developers/api)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Figma Community](https://forum.figma.com)
- [Figma Status](https://status.figma.com/)

---

## 🎓 Learning Path

1. **Start:** FIGMA_MCP_QUICK_START.md (5 min)
2. **Verify:** Run setup and restart Claude Code (2 min)
3. **Test:** Ask Claude a Figma question (1 min)
4. **Explore:** Try example commands (5 min)
5. **Troubleshoot:** Use FIGMA_MCP_SETUP.md if issues (as needed)

---

## 💡 Pro Tips

### Tip 1: Store Config Securely
```bash
# Create .gitignore entry
echo "claude_desktop_config.json" >> .gitignore
```

### Tip 2: Multiple Figma Workspaces
Create separate tokens for different workspaces, switch between them.

### Tip 3: Keep Updated
```bash
npm install -g @modelcontextprotocol/server-figma@latest
```

### Tip 4: Test Locally First
Test Figma MCP on personal files before production designs.

---

## 🆘 Need Help?

1. **Quick question?** Check FIGMA_MCP_QUICK_START.md
2. **Detailed help?** Check FIGMA_MCP_SETUP.md troubleshooting
3. **Token issues?** Verify at https://www.figma.com/developers/api
4. **Still stuck?** Contact Figma or Claude support

---

## ✨ Next Steps

1. ✅ Run setup script or manual config
2. ✅ Restart Claude Code
3. ✅ Test with a Figma question
4. ✅ Start generating code from designs!

---

**Happy designing! 🎨 Your designs are now just a question away from becoming code! ✨**
