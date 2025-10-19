# Figma MCP Setup Script for Claude Code
# This script sets up the Figma MCP server configuration

Write-Host "🎨 Figma MCP Setup for Claude Code" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check if Figma token is provided
$figmaToken = $env:FIGMA_TOKEN
if (-not $figmaToken) {
    Write-Host "⚠️  FIGMA_TOKEN environment variable not set" -ForegroundColor Yellow
    Write-Host "Please set it before running this script:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host '$env:FIGMA_TOKEN = "figd_your_token_here"' -ForegroundColor Green
    Write-Host ""
    Write-Host "To get a token:" -ForegroundColor Cyan
    Write-Host "1. Go to https://www.figma.com/developers/api#access-tokens" -ForegroundColor Cyan
    Write-Host "2. Click 'Get personal access token'" -ForegroundColor Cyan
    Write-Host "3. Copy the token (starts with figd_)" -ForegroundColor Cyan
    Write-Host ""
    exit 1
}

# Step 2: Create config directory
$configDir = "$env:APPDATA\Claude"
if (-not (Test-Path $configDir)) {
    Write-Host "📁 Creating Claude config directory..." -ForegroundColor Cyan
    New-Item -ItemType Directory -Path $configDir | Out-Null
}

# Step 3: Create or update config file
$configFile = "$configDir\claude_desktop_config.json"
Write-Host "📝 Creating/updating claude_desktop_config.json..." -ForegroundColor Cyan

$config = @{
    mcpServers = @{
        figma = @{
            command = "npx"
            args = @(
                "-y",
                "@modelcontextprotocol/server-figma"
            )
            env = @{
                FIGMA_PERSONAL_ACCESS_TOKEN = $figmaToken
            }
        }
    }
}

$config | ConvertTo-Json -Depth 10 | Set-Content -Path $configFile

Write-Host "✅ Config file created at: $configFile" -ForegroundColor Green
Write-Host ""
Write-Host "🔧 Configuration:" -ForegroundColor Cyan
Get-Content $configFile | Write-Host

Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Close Claude Code completely" -ForegroundColor Yellow
Write-Host "2. Reopen Claude Code" -ForegroundColor Yellow
Write-Host "3. Test by asking about a Figma file" -ForegroundColor Yellow
Write-Host ""
Write-Host "✨ Setup complete!" -ForegroundColor Green
