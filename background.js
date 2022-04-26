chrome.action.onClicked.addListener(function(tab) {
  chrome.scripting.executeScript(tab.id, {
    target: {
      tabId: tab.id
    },
    files: ["bookmarklet.js"]
  })
});
