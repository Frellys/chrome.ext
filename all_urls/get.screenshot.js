window.addEventListener('keyup', function (e) {
    if (e.code == 'PrintScreen' && e.ctrlKey) {
        chrome.runtime.sendMessage({
            msg: {
                cmds: [
                    { name: 'debug' }
                ]
            }
        }, function (response) {
                console.log(response);
                let image = new Image();
                image.addEventListener('load', function () {
                    document.body.appendChild(image);
                }, { once: true });
                image.src = response.data;
        });
    }
}, false);