window.addEventListener('keyup', function (e) {
    if (e.code == 'PrintScreen' && e.ctrlKey) {
        //document.documentElement.setAttribute('overflow', 'hidden');
        //document.body.setAttribute('overflow', 'hidden');
        //document.body.setAttribute('height', '100%');
        //document.body.setAttribute('overflow-x', 'hidden');
        //document.body.setAttribute('overflow-y', 'hidden');
        document.body.style.overflow = 'hidden !inportant';
        document.body.style.overflowX = 'hidden !inportant';
        document.body.style.overflowY = 'hidden !inportant';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
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