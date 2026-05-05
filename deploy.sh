#!/bin/bash
# Life Tracker デプロイスクリプト
set -e

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "📦 Copying latest files to www/..."
cp index.html www/
cp *.mp3 www/ 2>/dev/null || true

echo "🚀 Deploying to Firebase Hosting..."
firebase deploy --only hosting,firestore:rules

echo "✅ Deploy complete!"
echo "🌐 URL: https://life-taracker.web.app"
