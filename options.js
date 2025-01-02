// Load saved settings
document.addEventListener('DOMContentLoaded', async () => {
  const settings = await browser.storage.local.get({
    endpoint: 'http://localhost:11434',
    apiKey: ''
  });
  
  document.getElementById('endpoint').value = settings.endpoint;
  document.getElementById('apiKey').value = settings.apiKey;
});

// Save settings
document.getElementById('settingsForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  await browser.storage.local.set({
    endpoint: document.getElementById('endpoint').value,
    apiKey: document.getElementById('apiKey').value
  });
  
  alert('Settings saved!');
});