const messages = [
    "are you sure?",
    "dis nigga??",
    "abe???? ati hotay bhai?",
    "plsplsplsplpslpslpslplspls",
    "agar apni jaan pyaari hai toh yes kar!",
    "agar no pe click kiya toh i'll kms",
    "are pls bhai karde yes",
    "acha thike mat kar dusre navre ko yes kar",
    "acha thike mujhe puchna hi nahi hai",
    "are bhava bolde plsplsplslsplsplps"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}