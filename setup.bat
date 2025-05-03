@echo off
echo StyleHub E-commerce Website Setup
echo ================================
echo.

echo Step 1: Installing dependencies...
call install-deps.bat
echo.

echo Step 2: Building the project...
call build.bat
echo.

echo Setup completed! You can now run the following commands:
echo.
echo - start-dev.bat: Start the development server
echo - start-prod.bat: Start the production server
echo.
echo Thank you for using StyleHub! 