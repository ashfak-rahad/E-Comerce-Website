@echo off
title StyleHub E-Commerce Quick Start
color 0A
cls

echo ======================================================
echo      StyleHub E-Commerce Website - Quick Start
echo ======================================================
echo.
echo This script will install dependencies and start the
echo development server automatically.
echo.

:: Check if dependencies are installed
if not exist "node_modules" (
  echo Dependencies not found. Installing now...
  echo.
  
  :: Try using the bypass technique first
  powershell.exe -ExecutionPolicy Bypass -NoProfile -Command "& {npm install}"
  
  :: Check if installation was successful
  if not exist "node_modules" (
    echo.
    echo ERROR: Failed to install dependencies using PowerShell.
    echo Trying alternative method...
    echo.
    
    :: Try using cmd directly
    call cmd /c npm install
    
    :: Check again
    if not exist "node_modules" (
      echo.
      echo ERROR: Could not install dependencies.
      echo.
      echo Please try one of the following:
      echo 1. Run as Administrator
      echo 2. Use StyleHub.bat
      echo 3. Manually run: npm install
      echo.
      pause
      exit /b 1
    )
  )
  
  echo.
  echo Dependencies installed successfully!
  echo.
)

echo Starting development server...
echo.
echo The website will be available at http://localhost:3000
echo Press Ctrl+C to stop the server when done.
echo.
pause

:: Try running with different methods
if exist ".\node_modules\.bin\next.cmd" (
  .\node_modules\.bin\next dev
) else (
  :: Try with PowerShell bypass
  powershell.exe -ExecutionPolicy Bypass -NoProfile -Command "& {npm run dev}"
)

:: If we get here, something failed
echo.
echo ERROR: Failed to start the development server.
echo.
echo Please try running StyleHub.bat instead.
echo.
pause 