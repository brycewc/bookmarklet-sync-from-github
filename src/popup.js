document.addEventListener('DOMContentLoaded', () => {
	// Load saved settings
	chrome.storage.sync.get(['org', 'repo', 'token', 'folderName'], (result) => {
		document.getElementById('org').value = result.org || '';
		document.getElementById('repo').value = result.repo || '';
		document.getElementById('token').value = result.token || '';
		document.getElementById('folderName').value = result.folderName || '';
	});

	document.getElementById('syncButton').addEventListener('click', async () => {
		const org = document.getElementById('org').value;
		const repo = document.getElementById('repo').value;
		const token = document.getElementById('token').value;
		const folderName = document.getElementById('folderName').value;

		// Save settings
		chrome.storage.sync.set({ org, repo, token, folderName });

		// Show loading icon
		const statusEl = document.getElementById('status');
		statusEl.innerHTML =
			'<span id="loading-icon" style="display:inline-block;width:20px;height:20px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke="#888" stroke-width="5" fill="none" stroke-dasharray="31.4 31.4" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></circle></svg></span>Syncing...';

		// Send message to background script to start sync
		chrome.runtime.sendMessage(
			{ action: 'startSync', org, repo, token, folderName },
			(response) => {
				// Hide loading icon and show status
				statusEl.innerHTML = response.message;
			}
		);
	});
});

// Replace any direct GitHub API calls with this pattern
// async function syncPrivateRepo() {
// 	try {
// 		const result = await chrome.runtime.sendMessage({
// 			type: 'makeGitHubRequest',
// 			url: 'https://api.github.com/repos/owner/repo/contents',
// 			options: {
// 				method: 'GET'
// 			}
// 		});
// 		// Handle the result
// 	} catch (error) {
// 		console.error('Error syncing private repo:', error);
// 	}
// }
