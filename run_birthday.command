#!/bin/bash
# One-click launcher for Himanshu's Birthday Surprise Suite

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

PORT=8000
# Check if port is in use, increment if needed
while lsof -i:$PORT >/dev/null 2>&1; do
    PORT=$((PORT + 1))
done

echo "=========================================================="
echo "   🎂 Starting Himanshu's Birthday Code Surprise 💖        "
echo "=========================================================="
echo "Opening your romantic birthday suite at: http://localhost:$PORT"
echo "Press Ctrl+C in this terminal window to stop the server."
echo ""

# Open browser
python3 -c "import webbrowser, time; time.sleep(0.5); webbrowser.open('http://localhost:$PORT')" &

# Start python server
python3 -m http.server $PORT

