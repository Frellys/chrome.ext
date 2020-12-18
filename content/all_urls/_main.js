chrome.runtime.sendMessage({
    msg: {
        url: '*',
        cmds: [
            { name: 'executeScript', file: 'content/all_urls/get.screenshot.js' }
        ]
    }
});