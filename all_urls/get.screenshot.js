window.addEventListener('keyup', function (e) {
    if (e.code == 'PrintScreen' && e.ctrlKey) {
        chrome.runtime.sendMessage({
            msg: {
                cmds: [
                    {
                        name: 'invoke',
                        function: 'screenshot',
                        fullscreen: e.shiftKey
                    }
                ]
            }
        }, function (response) {
            let link = document.createElement('a');
            link.download = window.location.hostname.toString() + '_' + Date.now() + '.png';
            link.href = response.data;
            link.click();
        });
    }
}, false);