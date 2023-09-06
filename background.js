//importScripts('./scripts/linkedin_data.js');

console.log("I'M A BACKGROUND PROCESS");

let User = {
    name: 'Szabó Áron',
    context: 'I have three years of professional experience in the field of software engineering and cyber security.  My hard skills include TypeScript, NodeJS, React, Angular, Java, Microsoft Azure. I also have excellent written and verbal communication skills in multiple languages, as well as good organizational and interpersonal skills, good stress tolerance, systematic thinking and above all a questioning attitude.I am actively looking for a job related to software engineer / designer / cyber security engineer. I believe my experience has provided me with a strong practical foundation that has enabled me to develop my skills as an engineer and person.'
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if(req.type === 'collect') {
        console.log("AAAAA");
        collect();
    } else if(req.type === 'update-user') {
        User = req.newUser;
        console.log(User);
        sendResponse("Successfully updated user data");
    } else if (req.type === 'get-user') {
        sendResponse(User);
    }
});



chrome.runtime.onConnect.addListener(function(port) {
    console.log("Connected to port " + port);
    port.onMessage.addListener(function(msg) {
        alert("MESSAGE RECEIVED: " + msg);
        port.portMessage("HELLO");
    });
});

const contextMenuItem = {
    "id": "linkedInCoverLetterGenerator",
    "title": "Generate and Download Cover Letter",
    "contexts": ["all"],
    "type": "normal"
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((onClickData) => {
    if(onClickData.menuItemId !== "linkedInCoverLetterGenerator") return;
    console.log("CONTEXTMENU CLICKED ");
});