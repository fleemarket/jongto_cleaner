const sendMessageToCurrentPage = (name, message) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (pages) => {
      chrome.tabs.sendMessage(pages[0].id, { name, message });
    });
  };
  
  setInterval(() => {
    sendMessageToCurrentPage("firstMessage", "Hi Content Script!");
  }, 10000);
  