console.log("start");


document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#edit-order")

    button.addEventListener("click", () => {
        console.log('click')
        chrome.runtime.sendMessage('lesson started');
    });
})



