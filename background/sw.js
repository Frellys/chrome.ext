const state = {
    mute: false
};


const commands = {
    mute: () => {
        state.mute = !state.mute;
        chrome.tabs.query({}, (tabs) => {
            tabs.forEach(async function (tab) {
                await chrome.tabs.update(tab.id, { muted: state.mute });
            });
        });
    },
    fetch: () => {
        // TODO
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

// chrome.contextMenus.create({
//     title: 'test',
//     id: 'test'
// });


//chrome.commands.onCommand.addListener((command) => {
//    state.mute = !state.mute;
//});


// from manifest (styles)
// {
//     "matches": [
//         "https://vk.com/im*"
//     ],
//     "run_at": "document_idle",
//     "css": [
//         "content/vk.com/styles.css"
//     ]
// },
// {
//     "matches": [
//         "https://www.youtube.com/*"
//     ],
//     "run_at": "document_idle",
//     "css": [
//         "content/youtube.com/styles.css"
//     ]
// }