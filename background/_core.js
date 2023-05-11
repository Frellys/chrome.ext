const core = {
    muted: false
};


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    request.msg.cmds.forEach((cmd) => {
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
            default: {
                break;
            }
        }
    });
    return true;
});