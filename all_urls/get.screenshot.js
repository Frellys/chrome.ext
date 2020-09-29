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
                let dt = new Date();
                let ts =
                    (dt.getFullYear().toString()) +
                    (dt.getMonth() < 9 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1).toString();
            //link.download = window.location.hostname.toString() + '_' + Date.now() + '.png';
                link.download = window.location.hostname.toString() + '_' + ts + '.png';
            link.href = response.data;
            link.click();
        });
    }
}, false);