// Get saved links from storage
chrome.storage.sync.get(['savedLinks'], function(result) {
    var savedLinks = result.savedLinks || [];
    // Add links to the page
    for (var i = 0; i < savedLinks.length; i++) {
        var link = document.createElement('a');
        link.href = savedLinks[i];
        link.textContent = savedLinks[i];
        link.target = "_blank";
        document.getElementById('saved-links').appendChild(link);
    }
});

// Handle clear links button click
document.getElementById('clear-links').addEventListener('click', function() {
    chrome.storage.sync.set({'savedLinks': []}, function() {
        document.getElementById('saved-links').innerHTML = '';
    });
});
