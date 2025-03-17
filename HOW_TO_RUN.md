# How to Run the Nepal Infrastructure Projects Website

This website needs to be served through a web server to properly load the CSV data. Here are several ways to do that:

## Option 1: Using the included Node.js server

If you have Node.js installed:

1. Open your command prompt or terminal
2. Navigate to this folder:
   ```
   cd "c:\Users\bibas\2025-03-16\Sample website"
   ```
3. Run the server:
   ```
   node server.js
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Option 2: Using Python's built-in server

If you have Python installed:

1. Open your command prompt or terminal
2. Navigate to this folder:
   ```
   cd "c:\Users\bibas\2025-03-16\Sample website"
   ```
3. Start the server:
   - If you have Python 3:
     ```
     python -m http.server 8000
     ```
   - If you have Python 2:
     ```
     python -m SimpleHTTPServer 8000
     ```
4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Option 3: Using Visual Studio Code Live Server

If you're using Visual Studio Code:

1. Install the "Live Server" extension
2. Right-click on index.html in the file explorer
3. Select "Open with Live Server"
4. The website will automatically open in your default browser

## Troubleshooting

If you're still seeing the "Failed to fetch" error:

1. Make sure the CSV file exists at `data/nepal_projects.csv`
2. Check your browser's Console (F12) for more specific error messages
3. Make sure your web server has started correctly
4. Try a different browser, such as Chrome or Firefox
5. Clear your browser cache and reload the page
