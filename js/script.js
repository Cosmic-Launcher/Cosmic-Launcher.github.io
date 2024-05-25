function downloadLauncher() {
    var link = document.createElement('a');
    link.href = 'https://github.com/Cosmic-Launcher/Cosmic-Launcher/releases/download/v1.1/cosmic-launcher-v1.1.jar';
    link.download = 'cosmic-launcher-v1.1.jar';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function detectOS() {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Windows NT") !== -1) return "windows";
    if (userAgent.indexOf("Mac OS X") !== -1) return "mac";
    if (userAgent.indexOf("Linux") !== -1) return "linux";
    return "unknown";
}

function updateImages() {
    const os = detectOS();
    const mainItems = document.querySelectorAll('.main-item');

    mainItems.forEach(item => {
        const img = item.querySelector('img');
        if (os === "windows") {
            img.src = item.getAttribute('data-windows-img');
        } else if (os === "mac") {
            img.src = item.getAttribute('data-mac-img');
        } else if (os === "linux") {
            img.src = item.getAttribute('data-linux-img');
        }
    });
}

document.addEventListener('DOMContentLoaded', updateImages);