async function mute(sendResponse) {
    chrome.tabs.query({ }, function (tabs) {
        sendResponse({
            tabs: tabs
        });
    });
}