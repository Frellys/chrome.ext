chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (let cmd of request.msg.cmds) {
        switch (cmd.name) {
            case 'insertCSS':
                chrome.tabs.insertCSS(sender.tab.id, { file: cmd.file, allFrames: true, cssOrigin: 'user' });
                break;
            case 'executeScript':
                chrome.tabs.executeScript(sender.tab.id, { file: cmd.file });
                break;
            default:
                break;
        }
    }
});