let data;
// console.log(data);
// (async () => {
//     const src = chrome.runtime.getURL("your/content_main.js");
//     const collected_data = await import(src);
//     data = collected_data.collect();
// })();

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if(req.type === 'collect') {
        console.log(req);
        //data = collect();
        sendResponse({type: 'thanks', message: 'tysm'});
    }
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button#generate").addEventListener("click", () => alert(data), false);
}, false);

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button#options").addEventListener("click", () => chrome.runtime.openOptionsPage(), false);
}, false);
