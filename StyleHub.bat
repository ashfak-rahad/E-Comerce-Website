@echo off
title StyleHub E-Commerce Application
color 0A
cls

echo ======================================================
echo      StyleHub E-Commerce Website - Welcome!
echo ======================================================
echo.

set "PS_CMD=powershell.exe -ExecutionPolicy Bypass -NoProfile -Command"

:menu
echo Select an option:
echo.
echo [1] Install dependencies
echo [2] Start development server
echo [3] Build for production
echo [4] Start production server
echo [5] Exit
echo.
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
  cls
  echo Installing dependencies...
  echo.
  %PS_CMD% "& {npm install}"
  echo.
  echo Dependencies installed successfully!
  echo.
  pause
  cls
  goto menu
)

if "%choice%"=="2" (
  cls
  echo Starting development server...
  echo.
  echo Server will start at http://localhost:3000
  echo Press Ctrl+C to stop the server when done.
  echo.
  pause
  %PS_CMD% "& {npm run dev}"
  goto menu
)

if "%choice%"=="3" (
  cls
  echo Building for production...
  echo.
  %PS_CMD% "& {npm run build}"
  echo.
  echo Build completed successfully!
  echo.
  pause
  cls
  goto menu
)

if "%choice%"=="4" (
  cls
  echo Starting production server...
  echo.
  echo Server will start at http://localhost:3000
  echo Press Ctrl+C to stop the server when done.
  echo.
  pause
  %PS_CMD% "& {npm start}"
  goto menu
)

if "%choice%"=="5" (
  cls
  echo Thank you for using StyleHub!
  echo.
  pause
  exit
)

echo Invalid choice. Please try again.
echo.
pause
cls
goto menu 