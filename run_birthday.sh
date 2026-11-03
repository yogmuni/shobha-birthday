#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

PORT=8000
while lsof -i:$PORT >/dev/null 2>&1; do
    PORT=$((PORT + 1))
done

echo "Starting birthday web server on http://localhost:$PORT..."
python3 -c "import webbrowser, time; time.sleep(0.5); webbrowser.open('http://localhost:$PORT')" &
python3 -m http.server $PORT

