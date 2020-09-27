window.addEventListener('keypress', function (e) {
    if (e.code == 'KeyM' && e.ctrlKey) {
        e.preventDefault();
        console.log(e);
        chrome.runtime.sendMessage({
            msg: {
                cmds: [
                    { name: 'invoke', function: 'mute' }
                ]
            }
        }, function (response) {
            console.log(response);
        });
    }
}, false);