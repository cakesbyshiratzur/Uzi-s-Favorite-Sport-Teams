@echo off
echo ========================================
echo Uzi's Favorite Sport Teams - Quick Setup
echo ========================================
echo.

echo Step 1: Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js found: 
node --version
echo.

echo Step 2: Installing dependencies...
echo This may take a few minutes...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install dependencies!
    pause
    exit /b 1
)
echo.

echo ========================================
echo Setup complete! 
echo ========================================
echo.
echo Next steps:
echo   1. Run 'npm run dev' to start development server
echo   2. Open http://localhost:3000 in your browser
echo   3. See GETTING_STARTED.md for more information
echo.
echo To start development now, type: npm run dev
echo.
pause

