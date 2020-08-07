chrome.runtime.sendMessage({
    msg: {
        url: '*',
        cmds: [
            { name: 'executeScript', file: 'all_urls/wasd.scroll.js' }
        ]
    }
});