// background.js
async function getSettings() {
  const settings = await browser.storage.local.get({
    endpoint: 'http://localhost:11434',
    apiKey: ''
  });
  return settings;
}

async function connectToAPI(payload) {
  try {
    const settings = await getSettings();
    const headers = {
      "Content-Type": "application/json"
    };

    // Add API key if it exists
    if (settings.apiKey) {
      headers["Authorization"] = `Bearer ${settings.apiKey}`;
    }

    const response = await fetch(settings.endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Handle streaming responses (for Ollama/OpenAI-like APIs)
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("text/event-stream")) {
      const reader = response.body.getReader();
      let accumulatedData = "";
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        // Convert the Uint8Array to text
        const chunk = new TextDecoder().decode(value);
        accumulatedData += chunk;
      }
      
      return { response: accumulatedData };
    }

    // Handle regular JSON responses
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("API connection failed:", error);
    return {
      error: true,
      message: error.message
    };
  }
}

// Listen for messages from the popup
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "connectToAPI") {
    // Return a promise that resolves with the API response
    return connectToAPI(message.payload);
  } else if (message.action === "getSettings") {
    // Return a promise that resolves with the current settings
    return getSettings();
  }
});

// Handle installation/update
browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === "install") {
    console.log("OpenWebUI Connector installed");
    
    // Set default settings
    await browser.storage.local.set({
      endpoint: 'http://localhost:11434',
      apiKey: ''
    });
  }
});

// Optional: Add error logging
browser.runtime.onError.addListener((error) => {
  console.error("Extension error:", error);
});