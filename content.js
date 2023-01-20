// Listen for clicks on links
document.addEventListener("click", function(e) {
    if (e.target.tagName === "A") {
        // Send a message to the background script with the link's URL
        chrome.runtime.sendMessage({"message": "clicked_link", "link": e.target.href});
    }
});