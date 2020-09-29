window.addEventListener('keypress', function (e) {
    if (e.code == 'KeyM' && e.ctrlKey) {
        e.preventDefault();
        chrome.runtime.sendMessage({
            msg: {
                cmds: [
                    {
                        name: 'invoke',
                        function: 'mute'
                    }
                ]
            }
        });
    }
}, false);