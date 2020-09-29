window.addEventListener('keyup', function (e) {
    if (e.code == 'PrintScreen' && e.ctrlKey) {
        console.log(e);
        chrome.runtime.sendMessage({
            msg: {
                cmds: [
                    { name: 'debug' }
                ]
            }
        }, function (response) {
            console.log(response);
        });
    }
}, false);