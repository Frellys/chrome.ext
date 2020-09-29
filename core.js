let core = {
    muted: false
};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    request.msg.cmds.forEach(function (cmd) {
        switch (cmd.name) {
            case 'insertCSS': {
                chrome.tabs.insertCSS(sender.tab.id, { file: cmd.file, allFrames: true, cssOrigin: 'user' });
                break;
            }
            case 'executeScript': {
                chrome.tabs.executeScript(sender.tab.id, { file: cmd.file });
                break;
            }
            case 'invoke': {
                window[cmd.function](sendResponse);
                break;
            }
            case 'debug': {
                sendResponse({
                    location: window.location
                });
            }
            default: {
                break;
            }
        }
    });
    return true;
});