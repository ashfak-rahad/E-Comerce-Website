# StyleHub E-Commerce Website

A responsive e-commerce website for men's and women's clothing built with Next.js 15.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Product listings with filtering options
- Men's and women's clothing categories
- Product detail pages
- Featured products section
- Modern UI with Tailwind CSS
- Clean and intuitive user experience

## Project Structure

```
/src
  /app                  # Next.js app directory
    /categories         # Category pages
      /men             
      /women           
    /product           # Product detail pages
      /[id]           
    layout.tsx         # Root layout
    page.tsx           # Homepage
    globals.css        # Global styles
  /components          # Reusable components
  /data                # Data files (product data)
  /lib                 # Utility functions and helpers
```

## Getting Started

### RECOMMENDED: One-Click Start (Windows)

Simply double-click `START-HERE.bat` to install dependencies and start the development server in one step.

### Using Interactive Menu (Windows)

Double-click `StyleHub.bat` and use the interactive menu to:
1. Install dependencies
2. Start the development server
3. Build for production
4. Start the production server

This script automatically bypasses PowerShell execution policy restrictions.

### Troubleshooting Development Server Issues

If you have trouble starting the development server, try these alternatives:

1. `run-dev-direct.bat` - Runs Next.js directly without npm
2. `node-direct.bat` - Uses Node.js to run Next.js directly
3. `npm-alternative.bat` - Tries multiple methods to run the development server

### Using Batch Files with Bypass (Windows)

If you're encountering PowerShell execution policy restrictions, use:

```
run-with-bypass.bat install  # Install dependencies
run-with-bypass.bat dev      # Start development server
run-with-bypass.bat build    # Build for production
run-with-bypass.bat start    # Start production server
```

### Using Standard Batch Files (Windows)

1. Run `setup.bat` for complete setup (installs dependencies and builds the project)
2. Alternatively, you can:
   - Run `install-deps.bat` to install dependencies
   - Run `start-dev.bat` to start the development server
   - Run `build.bat` to build for production
   - Run `start-prod.bat` to start the production server

### Using NPM Commands

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

To build the project for production:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Technologies Used

- Next.js 15
- Tailwind CSS
- TypeScript
- React Icons

## Screenshots

[Screenshots would be added here in a real project]

## Future Enhancements

- User authentication
- Shopping cart functionality
- Order processing
- Admin dashboard
- Product search
- Wishlist feature
- Customer reviews

## Troubleshooting

### PowerShell Execution Policy Restrictions

If you encounter PowerShell execution policy restrictions, you have several options:

1. Use the `START-HERE.bat` file (recommended)
2. Use the `StyleHub.bat` interactive menu
3. Try alternative runners:
   - `run-dev-direct.bat`
   - `node-direct.bat`
   - `npm-alternative.bat`
4. Use the `run-with-bypass.bat` script which automatically bypasses the restrictions
5. Run PowerShell as administrator and execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

6. Use standard batch files that don't rely on PowerShell 