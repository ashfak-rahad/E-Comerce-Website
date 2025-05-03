@echo off
echo StyleHub - PowerShell Execution Policy Bypass Script
echo ====================================================
echo.

echo This script will run commands using PowerShell with execution policy bypass.
echo.

set "PS_CMD=powershell.exe -ExecutionPolicy Bypass -NoProfile -Command"

if "%1"=="install" (
  echo Installing dependencies...
  %PS_CMD% "& {npm install}"
  goto end
)

if "%1"=="dev" (
  echo Starting development server...
  %PS_CMD% "& {npm run dev}"
  goto end
)

if "%1"=="build" (
  echo Building for production...
  %PS_CMD% "& {npm run build}"
  goto end
)

if "%1"=="start" (
  echo Starting production server...
  %PS_CMD% "& {npm start}"
  goto end
)

echo Usage:
echo.
echo run-with-bypass.bat install  - Install dependencies
echo run-with-bypass.bat dev      - Start development server
echo run-with-bypass.bat build    - Build for production
echo run-with-bypass.bat start    - Start production server
echo.

:end 