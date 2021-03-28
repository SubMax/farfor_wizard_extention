chrome.runtime.onInstalled.addListener(() => {
    // console.log('api call')
    // chrome.storage.sync.set({lessons: 'lessons'});
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
            console.log(tab);
            chrome.tabs.executeScript(tab.id, {
                file: 'runLesson.js'
            })
        });
    }
);

