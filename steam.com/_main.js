if (window.location.hostname == 'steam.com') {
    // main
    chrome.runtime.sendMessage({
        msg: {
            url: 'steam.com',
            cmds: [
                { name: 'insertCSS', file: '' },
                { name: 'executeScript', file: '' }
            ]
        }
    });
}