window.addEventListener('keyup', function (e) {
    if (e.code == 'PrintScreen' && e.ctrlKey) {
        let tags = [
            { name: 'html' },
            { name: 'body' }
        ];
        tags.forEach(function (tag) {
            tag.cssText = document.querySelector(tag.name).style.cssText;
            if (tag.cssText == '') {
                document.querySelector(tag.name).style.cssText = 'overflow: hidden !important;';
            }
            else {
                document.querySelector(tag.name).style.cssText += (tag.cssText.replace(/\s/g, '').split('').pop() == ';' ? '' : ';') + ' overflow: hidden !important;';
            }
        });
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
                tags.forEach(function (tag) {
                    document.querySelector(tag.name).style.cssText = tag.cssText;
                });
                let link = document.createElement('a');
                link.download = window.location.hostname.toString() + '_' + Date.now() + '.png';
                link.href = response.data;
                link.click();
            });
        }, 100);
    }
}, false);