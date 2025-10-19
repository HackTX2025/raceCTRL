# Figma MCP Quick Start (5 Minutes)

## ⚡ Super Quick Setup

### 1. Get Token
- Go to https://www.figma.com/developers/api#access-tokens
- Click "Get personal access token"
- Copy token (starts with `figd_`)

### 2. Set Environment Variable

**Windows (PowerShell):**
```powershell
$env:FIGMA_TOKEN = "figd_your_token_here"
```

**macOS/Linux:**
```bash
export FIGMA_TOKEN="figd_your_token_here"
```

### 3. Edit Config File

**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

**Linux:** `~/.config/Claude/claude_desktop_config.json`

### 4. Paste This Config

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_your_token_here"
      }
    }
  }
}
```

### 5. Restart Claude Code

Close and reopen Claude Code completely.

### 6. Test It

In Claude Code, ask:
```
"What Figma files do I have access to?"
```

---

## ✅ Success Signs

- ✅ Claude Code starts without errors
- ✅ No token errors in logs
- ✅ Claude responds to Figma questions
- ✅ Can provide Figma file URLs

---

## 🚀 Common Commands

```
"Export the components from my Figma file"

"Generate TypeScript types from this design: [URL]"

"Convert this Figma design to React code: [URL]"

"Extract all colors from this Figma file: [URL]"

"Create Tailwind CSS classes for this design: [URL]"
```

---

## ❌ Troubleshooting

| Problem | Fix |
|---------|-----|
| "Token not found" | Restart Claude Code, verify token is set |
| "401 Unauthorized" | Token expired - generate new one |
| "MCP failed to start" | Check config JSON syntax, restart |
| "npx not found" | Node.js not installed or not in PATH |

---

**Need help?** See `FIGMA_MCP_SETUP.md` for detailed guide.
