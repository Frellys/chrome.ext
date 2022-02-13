if (window.location.hostname == 'vk.com') {
    // main
    chrome.runtime.sendMessage({
        msg: {
            url: 'vk.com',
            cmds: [
                { name: 'insertCSS', file: 'content/vk.com/_main.styles.css' }
            ]
        }
    });
    // /friends
    if (window.location.pathname == '/friends') {
        chrome.runtime.sendMessage({
            msg: {
                url: 'vk.com',
                cmds: [
                    { name: 'insertCSS', file: 'content/vk.com/pn_friends.css' },
                    { name: 'executeScript', file: 'content/vk.com/pn_friends.shutTabs.js' }
                ]
            }
        });
    }
    // im
    if (window.location.pathname == '/im') {
        chrome.runtime.sendMessage({
            msg: {
                url: 'vk.com',
                cmds: [
                    { name: 'executeScript', file: 'content/vk.com/pn_im.peerShortcut.js' }
                ]
            }
        });
    }
}