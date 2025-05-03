@echo off
title StyleHub - Alternative NPM Runner
color 0E
cls

echo ======================================================
echo        StyleHub - Alternative NPM Runner
echo ======================================================
echo.
echo This script attempts multiple methods to run the
echo development server when PowerShell restrictions exist.
echo.

echo METHOD 1: Using CMD directly
echo -----------------------------
echo.
echo Attempting to run npm dev using CMD...
echo.

cmd /c npm run dev

echo.
echo METHOD 2: Using Batch Commands
echo -----------------------------
echo.
echo Attempting to run Next.js directly using batch commands...
echo.

if exist ".\node_modules\.bin\next.cmd" (
  call .\node_modules\.bin\next.cmd dev
) else (
  echo Next.js batch command not found, trying next method...
  echo.
)

echo.
echo METHOD 3: Using Node Directly
echo -----------------------------
echo.
echo Attempting to run Next.js with Node directly...
echo.

if exist ".\node_modules\next\dist\bin\next" (
  node .\node_modules\next\dist\bin\next dev
) else (
  echo Next.js script not found.
  echo.
)

echo.
echo -----------------------------
echo All methods failed. Please check:
echo 1. Node.js is installed correctly (run 'node --version')
echo 2. Dependencies are installed ('npm install' completed successfully)
echo 3. Try running as Administrator
echo.
pause 