# 🎨 Figma MCP for Claude Code - Complete Package Index

## 📦 What's Included

This complete package allows you to seamlessly integrate Figma with Claude Code, enabling design-to-code workflows.

---

## 📄 Files in This Package

### Setup Scripts

| File | OS | Purpose |
|------|----|---------| 
| `setup_figma_mcp.ps1` | Windows | Automated PowerShell setup |
| `setup_figma_mcp.sh` | macOS/Linux | Automated bash setup |

### Documentation

| File | Purpose | Reading Time |
|------|---------|--------------|
| `FIGMA_MCP_QUICK_START.md` | Get started in 5 minutes | 3 min |
| `FIGMA_MCP_SETUP.md` | Complete setup guide + troubleshooting | 10 min |
| `FIGMA_MCP_INTEGRATION_SUMMARY.md` | Overview and reference | 5 min |
| `FIGMA_MCP_INDEX.md` | This file | 2 min |

---

## 🚀 Getting Started (Choose One Path)

### Path 1: Ultra-Fast (2 minutes)

**Use automated script:**

```powershell
# Windows PowerShell
$env:FIGMA_TOKEN = "figd_your_token"
.\setup_figma_mcp.ps1
```

```bash
# macOS/Linux
export FIGMA_TOKEN="figd_your_token"
./setup_figma_mcp.sh
```

Then restart Claude Code.

### Path 2: Step-by-Step (5 minutes)

Follow `FIGMA_MCP_QUICK_START.md` for manual setup.

### Path 3: Detailed (10 minutes)

Read `FIGMA_MCP_SETUP.md` for comprehensive guide with all options.

---

## ⚡ Quick Reference

### Get Your Token
1. Go to https://www.figma.com/developers/api#access-tokens
2. Click "Get personal access token"
3. Copy token (starts with `figd_`)

### Config File Location
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Linux: `~/.config/Claude/claude_desktop_config.json`

### Min Config Needed
```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_your_token"
      }
    }
  }
}
```

---

## 📚 Documentation Guide

### Which Document Should I Read?

**I want to get started NOW:**
→ Read `FIGMA_MCP_QUICK_START.md` (3 min)

**I want step-by-step instructions:**
→ Read `FIGMA_MCP_SETUP.md` (10 min)

**I want an overview:**
→ Read `FIGMA_MCP_INTEGRATION_SUMMARY.md` (5 min)

**I need setup scripts:**
→ Use `setup_figma_mcp.ps1` (Windows) or `setup_figma_mcp.sh` (macOS/Linux)

**I have questions:**
→ Check troubleshooting in `FIGMA_MCP_SETUP.md`

---

## ✅ Verification Steps

After setup, verify success:

1. Close Claude Code completely
2. Reopen Claude Code
3. Wait 3-5 seconds for MCP to load
4. Ask Claude: **"What Figma files do I have access to?"**
5. Claude should respond with your Figma projects/files

---

## 🎯 What You Can Do

Once configured, ask Claude Code questions like:

```
"Generate React components from this Figma file: [URL]"

"Extract all colors and create Tailwind config from my design system"

"Create TypeScript types for all components in this design"

"Review these designs for accessibility issues"

"Convert this Figma prototype to Next.js pages"
```

---

## 🔐 Security Checklist

- [ ] Token saved securely (not in git)
- [ ] `claude_desktop_config.json` added to `.gitignore`
- [ ] Token not shared with anyone
- [ ] Token can be revoked anytime from Figma settings
- [ ] Created separate token for Claude Code (not personal/main)

---

## 🆘 Troubleshooting Quick Reference

| Problem | Solution |
|---------|----------|
| "Config file not found" | Create directory with `mkdir` first |
| "Token not found" | Verify token set, restart Claude Code |
| "401 Unauthorized" | Token expired - generate new one |
| "MCP failed to start" | Check npx is installed, JSON syntax |
| "npx not found" | Install Node.js, add to PATH |

Full troubleshooting in `FIGMA_MCP_SETUP.md`.

---

## 🔗 External Links

- [Figma Developer API](https://www.figma.com/developers/api)
- [Figma Personal Access Tokens](https://www.figma.com/developers/api#access-tokens)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Claude Code Docs](https://docs.claude.com/)

---

## 🎓 Suggested Learning Path

1. **5 min:** Read `FIGMA_MCP_QUICK_START.md`
2. **2 min:** Get Figma token from API settings
3. **2 min:** Run setup script or manual config
4. **1 min:** Restart Claude Code
5. **2 min:** Test with Figma question
6. **5 min:** Try example commands from setup guide

**Total: ~17 minutes to full integration**

---

## 📋 Pre-Setup Checklist

Before starting, verify you have:

- [ ] Claude Code installed
- [ ] Node.js 16+ (`npm --version` works)
- [ ] Figma account (free or paid)
- [ ] Access to Figma Developer API
- [ ] Text editor to edit config file
- [ ] Figma personal access token (to be created)

---

## 🎉 Success Criteria

Setup is complete when:

✅ Claude Code starts without errors  
✅ No MCP/token errors in logs  
✅ Claude responds to Figma questions  
✅ Can ask for Figma file analysis  
✅ Claude provides design-to-code suggestions  

---

## 💬 Common Questions

**Q: Is this secure?**
A: Yes, token is stored locally and only used by Claude Code.

**Q: Can I revoke access anytime?**
A: Yes, revoke token anytime in Figma API settings.

**Q: Will this work with my existing Claude Code setup?**
A: Yes, MCP adds to existing setup without affecting other features.

**Q: Can I use multiple Figma tokens?**
A: Yes, create separate tokens for different workspaces.

**Q: What if I leak my token?**
A: Immediately revoke it in Figma and generate a new one.

---

## 🚀 Ready to Start?

1. **Fast setup:** Use automated script (2 min)
2. **Manual setup:** Follow quick start guide (5 min)
3. **Detailed setup:** Read full guide (10 min)

Choose your path above and start integrating Figma with Claude Code! 🎨✨

---

**Questions?** Check the documentation files or troubleshooting section.

**Ready?** Start with `FIGMA_MCP_QUICK_START.md`!
