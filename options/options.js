document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button#submit').addEventListener("click", () => {
        chrome.runtime.sendMessage({type: 'update-user', newUser: {
            name: document.getElementById('name').value,
            context: document.getElementById('context').value
        }}, (response) => console.log(response))
    }, false);
}, false);
