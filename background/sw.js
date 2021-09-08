let state = {
    mute: false
};
let commands = {
    mute: function () {
        state.mute = !state.mute;
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(async function (t) {
                await chrome.tabs.update(t.id, { muted: state.mute });
            });
        });
    },
    default: function () { }
};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.cmd in commands) {
        commands[request.cmd || 'default']();
    }
    sendResponse({
        request,
        sender,
        state
    });
});

//chrome.commands.onCommand.addListener((command) => {
//    state.mute = !state.mute;
//});