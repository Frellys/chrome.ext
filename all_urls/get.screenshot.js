window.addEventListener('keyup', function (e) {
    if (e.code == 'PrintScreen' && e.ctrlKey) {
        document.body.style.overflow = 'hidden';
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'hidden';
        (function () {
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
        }())
        //setTimeout(function () {
        //    chrome.runtime.sendMessage({
        //        msg: {
        //            cmds: [
        //                {
        //                    name: 'invoke',
        //                    function: 'screenshot',
        //                    fullscreen: e.shiftKey
        //                }
        //            ]
        //        }
        //    }, function (response) {
        //        let link = document.createElement('a');
        //        link.download = window.location.hostname.toString() + '_' + Date.now() + '.png';
        //        link.href = response.data;
        //        link.click();
        //    });
        //}, 1);
        //chrome.runtime.sendMessage({
        //    msg: {
        //        cmds: [
        //            {
        //                name: 'invoke',
        //                function: 'screenshot',
        //                fullscreen: e.shiftKey
        //            }
        //        ]
        //    }
        //}, function (response) {
        //    let link = document.createElement('a');
        //    link.download = window.location.hostname.toString() + '_' + Date.now() + '.png';
        //    link.href = response.data;
        //    link.click();
        //});
    }
}, false);