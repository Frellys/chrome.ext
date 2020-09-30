window.addEventListener('keyup', function (e) {
    if (e.code == 'PrintScreen' && e.ctrlKey) {
        document.querySelector('html').style.cssText = 'overflow: hidden !important;';
        setTimeout(function () {
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
        }, 0);
    }
}, false);