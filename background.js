// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log("OpenWebUI Connector installed.");
});

async function connectToOpenWebUI(endpoint, payload) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Response from OpenWebUI:", data);
    return data;
  } catch (error) {
    console.error("Failed to connect to OpenWebUI:", error);
    return null;
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "connectToOpenWebUI") {
      connectToOpenWebUI(message.endpoint, message.payload).then((data) => {
        sendResponse(data);
      });
      return true; // Keep the message channel open for asynchronous response
    }
  });
  