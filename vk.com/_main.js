if (window.location.hostname == 'vk.com') {
    chrome.runtime.sendMessage({
        msg: {
            url: 'vk.com',
            cmds: [
                { name: 'insertCSS', file: 'vk.com/styles.css' },
                { name: 'executeScript', file: 'vk.com/stl.remove.js' }
            ]
        }
    });
}