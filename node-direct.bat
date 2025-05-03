@echo off
echo Using Node.js directly to run Next.js development server...
echo.

:: Try to locate the Next.js start script
if exist ".\node_modules\next\dist\bin\next" (
  echo Found Next.js script. Starting server...
  echo.
  echo The website will be available at http://localhost:3000
  echo Press Ctrl+C to stop the server when done.
  echo.
  
  :: Run directly with node
  node .\node_modules\next\dist\bin\next dev
) else (
  echo ERROR: Could not find the Next.js script.
  echo.
  echo Please ensure you've installed dependencies first.
  echo.
  pause
  exit /b 1
) 