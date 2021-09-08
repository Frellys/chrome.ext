window.addEventListener('keypress', function (e) {
    if (e.code === 'KeyM' && e.ctrlKey) {
        chrome.runtime.sendMessage({ cmd: 'mute' }, function (response) {
            //console.log(response);
        });
    }
}, false);