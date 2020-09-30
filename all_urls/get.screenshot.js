window.addEventListener('keyup', function (e) {
    if (e.code == 'PrintScreen' && e.ctrlKey) {
        let tags = [
            { name: 'html' },
            { name: 'body' }
        ];
        tags.forEach(function (tag) {
            tag.cssText = document.querySelector(tag.name).cssText;
        });
        let defaultHTMLcssText = document.querySelector('html').style.cssText;
        //document.querySelector('html').style.cssText += defaultHTMLcssText == '' ? 'overflow: hidden !important;' : defaultHTMLcssText + ' overflow: hidden !important;';
        //document.querySelector('html').style.cssText += ((defaultHTMLcssText == '' ? '' : ' ') + 'overflow: hidden !important;');
        document.querySelector('html').style.cssText = 'overflow: hidden !important;';
        document.body.style.cssText = 'overflow: hidden !important;';
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
                //document.querySelector('html').style.cssText = defaultHTMLcssText;
                let link = document.createElement('a');
                link.download = window.location.hostname.toString() + '_' + Date.now() + '.png';
                link.href = response.data;
                link.click();
            });
        }, 100);
    }
}, false);