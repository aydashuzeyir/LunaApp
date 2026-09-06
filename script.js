// Luna App JavaScript

document.addEventListener("DOMContentLoaded", () => {

    // APK düyməsi
    const apkButton = document.getElementById("apkButton");

    if (apkButton) {
        apkButton.addEventListener("click", () => {
            alert("🌙 Luna App APK tezliklə hazır olacaq!");
        });
    }

    // Luna AI düyməsi
    const aiButton = document.getElementById("aiButton");

    if (aiButton) {
        aiButton.addEventListener("click", () => {
            alert("🤖 Luna AI açılır...");
        });
    }

    // Musiqi düyməsi
    const musicButton = document.getElementById("musicButton");

    if (musicButton) {
        musicButton.addEventListener("click", () => {
            alert("🎵 Musiqi bölməsi açılır...");
        });
    }

    // Video düyməsi
    const videoButton = document.getElementById("videoButton");

    if (videoButton) {
        videoButton.addEventListener("click", () => {
            alert("🎬 Video Player açılır...");
        });
    }

});
