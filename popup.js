// popup.js
document.getElementById("connectForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const inputData = document.getElementById("inputData").value;
  const endpoint = "http://localhost:8080/api"; // Adjust to your OpenWebUI API endpoint
  
  try {
    const response = await chrome.runtime.sendMessage({
      action: "connectToOpenWebUI",
      endpoint: endpoint,
      payload: { data: inputData }
    });

    document.getElementById("response").textContent = JSON.stringify(response, null, 2);
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("response").textContent = "Connection failed.";
  }
});
