@echo off
echo Running Next.js development server directly...
echo.
echo The website will be available at http://localhost:3000
echo Press Ctrl+C to stop the server when done.
echo.

:: Try to find next command in common locations
if exist ".\node_modules\.bin\next.cmd" (
  .\node_modules\.bin\next dev
) else if exist ".\node_modules\.bin\next" (
  .\node_modules\.bin\next dev
) else (
  echo ERROR: Could not find the Next.js executable.
  echo.
  echo Please ensure you've installed dependencies first by running:
  echo - install-deps.bat
  echo - StyleHub.bat and selecting option 1
  echo - or: npm install
  echo.
  pause
  exit /b 1
) 