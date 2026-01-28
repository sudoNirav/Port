#!/bin/bash
# ComposeBuild.sh - Toggle development mode for docker-compose.yml

YML_FILE="docker-compose.yml"

# Define the dev block to insert
DEV_BLOCK="    volumes:
      - .:/app
      - /app/node_modules
      - /app/.next
    command: npm run dev"

# Function to add dev fields
add_dev_fields() {
  # Remove any existing dev fields first
  remove_dev_fields silent
  # Insert after 'environment:' section
  awk -v block="$DEV_BLOCK" '
    /NODE_ENV: production/ {
      print $0
      print block
      next
    }
    { print $0 }
  ' "$YML_FILE" > "${YML_FILE}.tmp" && mv "${YML_FILE}.tmp" "$YML_FILE"
  echo "Development fields added."
}

# Function to remove dev fields
remove_dev_fields() {
  awk '
    BEGIN { skip=0 }
    # Start skipping at "volumes:" or "command:" lines with correct indentation
    /^[[:space:]]{4}volumes:/ { skip=1; next }
    /^[[:space:]]{4}command:/ { skip=1; next }
    # Continue skipping volume entries (6+ spaces) and command values
    skip && /^[[:space:]]{6}/ { next }
    # Stop skipping when we hit a new top-level field
    skip && /^[[:space:]]{4}[a-zA-Z_]+:/ { skip=0 }
    !skip { print $0 }
  ' "$YML_FILE" > "${YML_FILE}.tmp" && mv "${YML_FILE}.tmp" "$YML_FILE"
  [ "$1" != "silent" ] && echo "Development fields removed."
}

# Main prompt
read -p "Run in dev mode? (y/n): " yn
case "$yn" in
  [Yy]*) add_dev_fields ;;
  [Nn]*) remove_dev_fields ;;
  *) echo "Invalid input. Please enter y or n." ;;
esac
