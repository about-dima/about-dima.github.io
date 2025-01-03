function highlightElement(id) {
    var highlightedElements = document.querySelectorAll('.highlighted');

    highlightedElements.forEach(function(element) {
        element.classList.remove('highlighted');
    });

    var target = document.getElementById(id);
    if (target) {
        target.classList.remove('highlighted');
        void target.offsetWidth;
        target.classList.add('highlighted');

        window.location.hash = id;
    } else {
        console.error('Element with ID "' + id + '" not found.');
    }
}

function highlightAnchor() {
    highlightElement('links');
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

async function downloadSite() {
    const zip = new JSZip();

    const urls = [
        'index.html',
    ];

    const photoUrls = [
        'img/link.png',
        'img/user.png',
        'img/github.png',
        'img/warning.png',
        'img/download.png',
        'img/reddit.png',
        'img/icon.png',
        'img/night-mode.png',
        'img/light-mode.png',
        'img/telegram.png',
        'img/twitter.png',
        'img/youtube.png',
        'img/python.png',
        'img/mail.png',
    ];

    const jsUrls = [
        'js/script.js',
        'js/FileSaver.min.js',
        'js/jszip.min.js',
    ];

    const cssUrls = [
        'css/style.css',
    ];

    async function addFilesToZip(urls) {
        for (const url of urls) {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Failed to fetch ${url}`);
                const data = await response.blob();
                zip.file(url, data);
            } catch (error) {
                console.error(`Error fetching ${url}:`, error);
            }
        }
    }

    await addFilesToZip(urls);
    await addFilesToZip(photoUrls);
    await addFilesToZip(jsUrls);
    await addFilesToZip(cssUrls);

    try {
        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, 'site.zip');
    } catch (error) {
        console.error('Error generating ZIP file:', error);
    }
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('visible');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('visible');
}

function updateTime() {
    const options = {
        timeZone: 'Europe/Kiev',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB', options);

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();
