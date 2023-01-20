// Listen for clicks on the browser action button
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
  });
  
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if( request.message === "open_options_page" ) {
    chrome.runtime.openOptionsPage();
    }
});
