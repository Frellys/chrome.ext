window.addEventListener('keyup', function (e) {
    if (e.code == 'PrintScreen' && e.ctrlKey) {
        chrome.runtime.sendMessage({
            msg: {
                cmds: [
                    { name: 'debug', fullscreen: e.shiftKey }
                ]
            }
        }, function (response) {
            let link = document.createElement('a');
            link.download = Date.now() + '.png';
            link.href = response.data;
            link.click();
        });
    }
}, false);