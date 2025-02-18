#!/bin/bash

# Print colored output
print_step() {
  echo -e "\033[0;34m==>\033[0m $1"
}

print_error() {
  echo -e "\033[0;31mError:\033[0m $1"
}

print_success() {
  echo -e "\033[0;32m$1\033[0m"
}

# Check if npm is installed
if ! command -v npm &> /dev/null; then
  print_error "npm is not installed"
  exit 1
fi

# Check if port 5000 is in use and attempt to clean up
if lsof -i:5000 &> /dev/null; then
  print_step "Port 5000 is in use. Attempting to clean up existing processes..."
  pkill -f "node.*server/index.ts" || true
  sleep 2

  if lsof -i:5000 &> /dev/null; then
    print_error "Port 5000 is still in use. Please stop any running instances manually."
    exit 1
  fi
fi

print_step "Installing dependencies..."
if ! npm install; then
  print_error "Failed to install dependencies"
  exit 1
fi

print_step "Starting the development server..."
npm run dev &
SERVER_PID=$!

# Wait for the server to start
for i in {1..10}; do
  if lsof -i:5000 &> /dev/null; then
    print_success "\nSetup complete!"
    echo "The application is now running on http://localhost:5000"
    exit 0
  fi
  sleep 1
done

print_error "Failed to start the server. Check the logs for more details."
kill $SERVER_PID 2>/dev/null || true
exit 1