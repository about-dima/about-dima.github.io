function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var favicon = document.getElementById('favicon');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = favicon.href;

    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, 0, 0);
        ctx.globalCompositeOperation = 'difference';
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        favicon.href = canvas.toDataURL('image/png');
    };
}
function notifyOnBirthday() {
const today = new Date();
const birthday = new Date(today.getFullYear(), 7, 4);
if (today.getMonth() === 7 && today.getDate() === 4) {
    if (Notification.permission === "granted") {
        var notification = new Notification("Today is my birthday!");
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                var notification = new Notification("Today is my birthday!");
            }
        });
    }
}
}

notifyOnBirthday();

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
let currentLanguage = 'en';

function toggleLanguage() {
if (currentLanguage === 'en') {
translateToRussian();
currentLanguage = 'ru';
} else if (currentLanguage === 'ru') {
translateToUkrainian();
currentLanguage = 'ua';
} else {
translateToEnglish();
currentLanguage = 'en';
}
}

function translateToRussian() {
document.getElementById('about-me').innerText = 'Обо мне';
document.getElementById('intro').innerText = 'Привет, меня зовут Дима';
document.getElementById('pronouns').innerText = 'Местоимения: он/его';
document.getElementById('hobbies').innerText = 'Хобби:';
document.getElementById('hobby1').innerText = '- Создание веб-сайтов с использованием HTML и CSS';
document.getElementById('hobby2').innerText = '- Рисование (я не очень хорошо, но стараюсь)';
document.getElementById('links').innerText = 'Ссылки:';
document.getElementById('tg').innerHTML = '<img src="telegram.png" height="20" class="button1">Telegram канал';
document.getElementById('ot').innerText = 'Другое:';
document.getElementById('ds').innerHTML = '<img src="download.png" height="25" class="button6"> Скачать сайт';
document.getElementById('dl').innerHTML = '<img src="night-day.png" height="16" class="button_img">Светлая/тёмная тема';
document.getElementById('fav').innerText = 'Обо мне';
document.getElementById('lite').innerHTML = '<img src="icon_lite.png" width="16" height="16" class="button_img">Простая версия';
}

function translateToUkrainian() {
document.getElementById('about-me').innerText = 'Про мене';
document.getElementById('intro').innerText = 'Привіт, мене звати Діма';
document.getElementById('pronouns').innerText = 'Займенники: він/його';
document.getElementById('hobbies').innerText = 'Хобі:';
document.getElementById('hobby1').innerText = '- Створення веб-сайтів за допомогою HTML та CSS';
document.getElementById('hobby2').innerText = '- Малювання (я не дуже добре, але намагаюся)';
document.getElementById('links').innerText = 'Посилання:';
document.getElementById('tg').innerHTML = '<img src="telegram.png" height="20" class="button1">Telegram канал';
document.getElementById('ot').innerText = 'Інше:';
document.getElementById('ds').innerHTML = '<img src="download.png" height="25" class="button6">Завантажити сайт';
document.getElementById('dl').innerHTML = '<img src="night-day.png" height="16" class="button_img">Світла/темна тема';
document.getElementById('fav').innerText = 'Про мене';
document.getElementById('lite').innerHTML = '<img src="icon_lite.png" width="16" height="16" class="button_img">Проста версія';
}

function translateToEnglish() {
document.getElementById('about-me').innerText = 'About me';
document.getElementById('intro').innerText = 'Hi my name is Dima';
document.getElementById('pronouns').innerText = 'Pronouns: he/him';
document.getElementById('hobbies').innerText = 'Hobbies:';
document.getElementById('hobby1').innerText = '- Create websites using HTML and CSS';
document.getElementById('hobby2').innerText = '- Drawing (I’m not doing well, but I’m trying)';
document.getElementById('links').innerText = 'Links:';
document.getElementById('tg').innerHTML = '<img src="telegram.png" height="20" class="button1"> Telegram channel';
document.getElementById('ot').innerText = 'Other:';
document.getElementById('ds').innerHTML = '<img src="download.png" height="25" class="button6">Download site';
document.getElementById('dl').innerHTML = '<img src="night-day.png" height="16" class="button_img">Light/dark mode';
document.getElementById('fav').innerText = 'About me';
document.getElementById('lite').innerHTML = '<img src="icon_lite.png" width="16" height="16" class="button_img">Lite version';
}

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('sideMenu');
const closeMenuButton = document.querySelector('.close-menu');

closeMenuButton.addEventListener('click', () => {
sideMenu.classList.remove('open');
});

menuToggle.addEventListener('click', () => {
sideMenu.classList.toggle('open');
});