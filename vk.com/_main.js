if (window.location.hostname == 'vk.com') {
    // main
    chrome.runtime.sendMessage({
        msg: {
            url: 'vk.com',
            cmds: [
                { name: 'insertCSS', file: 'vk.com/_main.styles.css' },
                { name: 'executeScript', file: 'vk.com/rm.stl.js' }
            ]
        }
    });
    // /friends
    if (window.location.pathname == '/friends') {
        chrome.runtime.sendMessage({
            msg: {
                url: 'vk.com',
                cmds: [
                    { name: 'insertCSS', file: 'vk.com/pn.friends.css' }
                ]
            }
        });
    }
}