# Bookmarklet Sync from GitHub

A Chromium extension to creates bookmarklets from a GitHub repository of JavaScript files in your browser favorites bar. Originally created from [yeger00/marklet-hub](https://github.com/yeger00/marklet-hub) - updated the process of converting the JavaScript to bookmarklet code to use the same process as [bookmarkletify](https://marketplace.visualstudio.com/items?itemName=saasan.bookmarkletify).

## Installation Instructions

### Option 1:

- [Chrome Web Store - Bookmarklet Sync from GitHub](https://chromewebstore.google.com/detail/bookmarklet-sync-from-git/hfckbalabggfedpkmlhmnelkjnnfmgjj) (also works for Edge)
- Edge Add-ons - Under review, coming soon

### Option 2: Manual Installation

1. Download the files in the dist directory to your local machine
2. Open your browser and navigate to `chrome://extensions/` (`edge://extensions/` for Edge)
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" button in the top left
5. Select the folder you downloaded containing the extension files (note: this folder has to stay on your computer for the extension to run from, so place it somewhere permanent)

## Usage

1. Click the extension icon in your browser toolbar
2. Enter the GitHub organization and repository names
3. (Optional) Enter a GitHub personal access token if you need to access private repositories
4. (Optional) Specify a custom folder name for the bookmarklets
5. Click "Sync" to create bookmarklets from all .js files in the repository

## Features

- Automatically converts JavaScript files to bookmarklets
- Maintains folder structure from the GitHub repository
- Supports both public and private repositories
- Updates existing bookmarklets when re-syncing

## Notes

- Only .js files will be converted to bookmarklets
- The extension requires permission to manage your bookmarks
- For private repositories, you'll need to provide a GitHub personal access token

## Creating a GitHub Personal Access Token

1. Go to GitHub Settings > Developer Settings > [Fine-grained tokens](https://github.com/settings/tokens?type=beta)
2. Click "Generate new token"
3. Set a token name (e.g., "Bookmarklet Sync") and expiration
4. Under "Repository access":
   - Select "Only select repositories"
   - Choose the repository you want to sync
5. Under "Permissions":
   - Expand "Repository permissions"
   - Set "Contents" to "Read-only"
6. Click "Generate token"
7. Copy the token immediately (you won't be able to see it again)
8. Paste the token in the extension's "GitHub Token" field

**Note**: Keep your token secure and never share it. If your token is compromised, you can revoke it in GitHub settings.

## Contributing

Feel free to open issues or submit pull requests if you experience any bugs or have improvement suggestions.

This extension was created with [Extension CLI](https://oss.mobilefirst.me/extension-cli/).

### Available Commands

| Commands        | Description                         |
| --------------- | ----------------------------------- |
| `npm run start` | build extension, watch file changes |
| `npm run build` | generate release version            |
| `npm run docs`  | generate source code docs           |
| `npm run clean` | remove temporary files              |
| `npm run test`  | run unit tests                      |
| `npm run sync`  | update config files                 |

For CLI instructions see [User Guide &rarr;](https://oss.mobilefirst.me/extension-cli/)

### Learn More

**Extension Developer guides**

- [Getting started with extension development](https://developer.chrome.com/extensions/getstarted)
- Manifest configuration: [version 2](https://developer.chrome.com/extensions/manifest) - [version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Permissions reference](https://developer.chrome.com/extensions/declare_permissions)
- [Chrome API reference](https://developer.chrome.com/docs/extensions/reference/)

**Extension Publishing Guides**

- [Publishing for Chrome](https://developer.chrome.com/webstore/publish)
- [Publishing for Edge](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension)
- [Publishing for Opera addons](https://dev.opera.com/extensions/publishing-guidelines/)
- [Publishing for Firefox](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/)
