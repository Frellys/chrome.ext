if (window.location.hostname == 'vk.com') {
    // main
    chrome.runtime.sendMessage({
        msg: {
            url: 'vk.com',
            cmds: [
                { name: 'insertCSS', file: 'content/vk.com/_main.styles.css' },
                { name: 'executeScript', file: 'content/vk.com/rm.brcs.js' },
                { name: 'executeScript', file: 'content/vk.com/rm.stl.js' },
                { name: 'executeScript', file: 'content/vk.com/show.ID.js' }
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