let openScihub = document.getElementById('openScihub');

openScihub.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        var newUrl = "https://sci-hub.tw/" + url;
        chrome.tabs.create({url: newUrl, active: true });
    });
  };