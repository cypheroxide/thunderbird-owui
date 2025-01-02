// popup.js
document.addEventListener('DOMContentLoaded', async () => {
  // Load current settings to show the endpoint being used
  const settings = await browser.runtime.sendMessage({
    action: "getSettings"
  });
  
  // Optionally display the current endpoint
  const endpointDisplay = document.createElement('div');
  endpointDisplay.textContent = `Connected to: ${settings.endpoint}`;
  document.body.insertBefore(endpointDisplay, document.getElementById('connectForm'));
});

document.getElementById("connectForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const inputData = document.getElementById("inputData").value;
  const responseDiv = document.getElementById("response");
  
  // Show loading state
  responseDiv.textContent = "Connecting...";
  
  try {
    const response = await browser.runtime.sendMessage({
      action: "connectToAPI",
      payload: { prompt: inputData }
    });

    if (response.error) {
      responseDiv.textContent = `Error: ${response.message}`;
      return;
    }

    // Format and display the response
    responseDiv.innerHTML = '<pre>' + JSON.stringify(response, null, 2) + '</pre>';
  } catch (error) {
    console.error("Error:", error);
    responseDiv.textContent = "Connection failed: " + error.message;
  }
});