chrome.storage.local.get(["badgeText"], ({ badgeText }) => {
    chrome.action.setBadgeText({ text: badgeText });
  });
  
// Listener is registered on on startup.
chrome.action.onClicked.addListener(handleActionClick);