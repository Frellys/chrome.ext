chrome.commands.onCommand.addListener(function (command) {
    if (command == 'mute') {
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(function (tab) {
                chrome.tabs.update(tab.id, { muted: !core.muted });
            });
            core.muted = !core.muted;
        });
    }
});