#!/bin/bash

# Figma MCP Setup Script for Claude Code (macOS/Linux)

echo "🎨 Figma MCP Setup for Claude Code"
echo "=================================="
echo ""

# Detect OS
if [[ "$OSTYPE" == "darwin"* ]]; then
    CONFIG_DIR="$HOME/Library/Application Support/Claude"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    CONFIG_DIR="$HOME/.config/Claude"
else
    echo "⚠️  Unsupported OS. Please configure manually."
    exit 1
fi

# Check for Figma token
if [ -z "$FIGMA_TOKEN" ]; then
    echo "⚠️  FIGMA_TOKEN environment variable not set"
    echo "Please set it before running this script:"
    echo ""
    echo 'export FIGMA_TOKEN="figd_your_token_here"'
    echo ""
    echo "To get a token:"
    echo "1. Go to https://www.figma.com/developers/api#access-tokens"
    echo "2. Click 'Get personal access token'"
    echo "3. Copy the token (starts with figd_)"
    echo ""
    exit 1
fi

# Create config directory
mkdir -p "$CONFIG_DIR"
echo "📁 Using config directory: $CONFIG_DIR"

# Create config file
CONFIG_FILE="$CONFIG_DIR/claude_desktop_config.json"
echo "📝 Creating configuration file..."

cat > "$CONFIG_FILE" << JSONEOF
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-figma"
      ],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "$FIGMA_TOKEN"
      }
    }
  }
}
JSONEOF

echo "✅ Config file created at: $CONFIG_FILE"
echo ""
echo "🔧 Configuration:"
cat "$CONFIG_FILE"
echo ""
echo "📋 Next Steps:"
echo "1. Close Claude Code completely"
echo "2. Reopen Claude Code"
echo "3. Test by asking about a Figma file"
echo ""
echo "✨ Setup complete!"
