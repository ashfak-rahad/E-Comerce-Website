# StyleHub E-Commerce Website - Quick Start Guide

## Windows Users (PowerShell Execution Policy Issues)

### RECOMMENDED: One-Click Solution

The easiest way to get started:

1. Double-click `START-HERE.bat`
2. Wait for dependencies to install and server to start
3. Browse to http://localhost:3000 when ready

### Alternative Methods

If the above doesn't work, try these alternatives:

1. **Direct runners (no npm required):**
   - `run-dev-direct.bat` - Runs Next.js directly
   - `node-direct.bat` - Uses Node.js to run Next.js
   - `npm-alternative.bat` - Tries multiple methods

2. **Interactive menu:**
   - Double-click `StyleHub.bat` 
   - Select option 1 to install dependencies
   - Select option 2 to start the development server

3. **Command-line with bypass:**
   - `run-with-bypass.bat install` - Install dependencies
   - `run-with-bypass.bat dev` - Start development server

4. **Standard batch files:**
   - Double-click `setup.bat` to install dependencies and build
   - Double-click `start-dev.bat` to start the development server

## Manual Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm (usually comes with Node.js)

### Steps

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and go to http://localhost:3000

## Project Structure Overview

- `/src/app/page.tsx` - Main homepage
- `/src/app/categories/men/page.tsx` - Men's category page
- `/src/app/categories/women/page.tsx` - Women's category page
- `/src/app/product/[id]/page.tsx` - Product detail page
- `/src/data/products.ts` - Product data

## Available Scripts

### One-Click Solutions
- `START-HERE.bat` - Install & run in one step (recommended)
- `npm-alternative.bat` - Tries multiple methods to run dev server

### Interactive Menu
- `StyleHub.bat` - All-in-one menu for all operations

### Direct Runners
- `run-dev-direct.bat` - Run Next.js directly without npm
- `node-direct.bat` - Use Node.js to run Next.js directly

### PowerShell Execution Policy Bypass
- `run-with-bypass.bat install` - Install dependencies with bypass
- `run-with-bypass.bat dev` - Start development server with bypass
- `run-with-bypass.bat build` - Build for production with bypass
- `run-with-bypass.bat start` - Start production server with bypass

### Standard Batch Files
- `setup.bat` - Complete project setup (install & build)
- `install-deps.bat` - Install dependencies
- `start-dev.bat` - Start development server
- `build.bat` - Build for production
- `start-prod.bat` - Start production server 