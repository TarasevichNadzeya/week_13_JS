const nameInput = document.querySelector("#name");
const textarea = document.querySelector("#comment");
const avatarInput = document.querySelector("#avatar");
const sendBtn = document.querySelector("#send");

const messages = document.querySelector(".messages");

const checkName = () => {
    const name = nameInput.value;
    const userName = name.trim().split(" ");
    const changedName = [];

    userName.forEach((element) => {
        let newName = element[0].toUpperCase() + element.slice(1).toLowerCase();
        changedName.push(newName);
    });

    const nameFormatted = changedName.join(" ");
    return nameFormatted;
};

nameInput.addEventListener("change", () => {
    nameInput.value = checkName();
});

const checkMessage = (spam) => {
    const str = spam.replace(/viagra|XXX/gi, '***');
    return str;
};


function createMessage() {
    const message = document.createElement("div");
    message.className = "message";
    messages.prepend(message);

    const messageUserName = document.createElement("p");
    messageUserName.className = "message_name";
    if (nameInput.value !== "") {
        messageUserName.textContent = checkName();
    } else {
        messageUserName.textContent = "Username";
    }
    message.append(messageUserName);

    const messageText = document.createElement("p");
    messageText.className = "message_text";
    messageText.innerHTML = checkMessage(textarea.value);
    message.append(messageText);
    nameInput.value = "";
    avatarInput.value = "";
}

const date = new Date().toLocaleString();
const divTime = document.getElementById("show");
divTime.textContent = date;


function showImage() {
    let image = avatarInput.value;
    image.src = src;
    const container = document.getElementById("show");
    container.append(image);
}

const supportArray = [
    "./image/1.jpg",
    "./image/2.jpg",
    "./image/3.jpg",
    "./image/4.jpg",
    "./image/5.jpg"
];

function sendSupport() {
    const randomNum = Math.floor(Math.random() * (supportArray.length - 1));
    if (showImage === " ")
        container.append(randomNum);
}



sendBtn.addEventListener("click", () => {
    createMessage();
    showImage(src);
    textarea.value = "";
});

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const formUser2 = document.getElementById("form");

formUser2.addEventListener("submit", (event) => {
    event.preventDefault();
    if (yes.checked) {
        yes.checked = false;
        no.checked = true;
    } else {
        return messageUserName();
    }
});




// Задание со *//

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}


console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 4 * 1000))); // вчерашняя дата вроде 31.11.2022, 20:00