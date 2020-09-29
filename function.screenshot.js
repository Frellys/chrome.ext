function screenshot(sendResponse) {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataURI) {
        sendResponse({
            data: dataURI
        });
    });
}