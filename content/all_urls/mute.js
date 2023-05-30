window.addEventListener('keypress', function (e) {
    if (e.ctrlKey && e.code === 'KeyM') {
        chrome.runtime.sendMessage({ cmd: 'mute' }, function (response) {
            //console.log(response);
        });
    }
}, false);