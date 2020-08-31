if (window.location.hostname == 'steam.com') {
    // main
    chrome.runtime.sendMessage({
        msg: {
            url: 'steam.com',
            cmds: [
                { name: 'insertCSS', file: 'vk.com/_main.styles.css' },
                { name: 'executeScript', file: 'vk.com/rm.stl.js' }
            ]
        }
    });
}