chrome.runtime.sendMessage({
    msg: {
        url: '*',
        cmds: [
            { name: 'executeScript', file: 'all_urls/get.screenshot.js' },
            { name: 'executeScript', file: 'all_urls/set.mute.js' }
            //{ name: 'executeScript', file: 'all_urls/set.wasdScroll.js' }
        ]
    }
});