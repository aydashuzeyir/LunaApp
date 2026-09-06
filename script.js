const root = document.documentElement;

/* =========================
   LUNA APP
   ========================= */

const apps = [
    {
        name: "Luna Music",
        icon: "🎵",
        category: "music",
        description: "Musiqilərini rahat dinlə."
    },
    {
        name: "Luna Video",
        icon: "🎬",
        category: "video",
        description: "Videolar üçün Luna player."
    },
    {
        name: "Luna AI",
        icon: "🤖",
        category: "ai",
        description: "Süni intellekt ilə söhbət et."
    },
    {
        name: "Luna Tools",
        icon: "🛠️",
        category: "tools",
        description: "Faydalı alətlər bir yerdə."
    }
];

const updates = [
    {
        title: "Luna App 1.0",
        text: "Luna App istifadəyə verildi."
    },
    {
        title: "AI bölməsi",
        text: "Luna AI bölməsi əlavə edildi."
    },
    {
        title: "Yeni dizayn",
        text: "Yeni rəng və şrift seçimləri əlavə edildi."
    }
];


/* =========================
   APP CARDS
   ========================= */

const appGrid = document.getElementById("appGrid");

function showApps(list = apps) {

    if (!appGrid) return;

    appGrid.innerHTML = "";

    list.forEach(app => {

        const card = document.createElement("div");

        card.className = "app-card";

        card.innerHTML = `
            <div class="app-icon">${app.icon}</div>
            <h3>${app.name}</h3>
            <p>${app.description}</p>
            <button class="btn btn-primary">
                Aç
            </button>
        `;

        appGrid.appendChild(card);
    });
}

showApps();


/* =========================
   SEARCH
   ========================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const value = searchInput.value.toLowerCase().trim();

        const filtered = apps.filter(app =>
            app.name.toLowerCase().includes(value) ||
            app.description.toLowerCase().includes(value)
        );

        showApps(filtered);
    });
}


/* =========================
   CATEGORIES
   ========================= */

const categoryButtons =
    document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.category;

        if (!category || category === "all") {
            showApps();
            return;
        }

        showApps(
            apps.filter(app =>
                app.category === category
            )
        );
    });
});


/* =========================
   UPDATES
   ========================= */

const updatesList =
    document.getElementById("updatesList");

if (updatesList) {

    updatesList.innerHTML = "";

    updates.forEach(update => {

        const item = document.createElement("div");

        item.className = "update-card";

        item.innerHTML = `
            <h3>${update.title}</h3>
            <p>${update.text}</p>
        `;

        updatesList.appendChild(item);
    });
}


/* =========================
   THEME
   ========================= */

const themeButton =
    document.getElementById("themeButton");

function setTheme(theme) {

    if (theme === "light") {
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
    }

    localStorage.setItem("luna-theme", theme);
}

const savedTheme =
    localStorage.getItem("luna-theme") || "dark";

setTheme(savedTheme);

if (themeButton) {

    themeButton.addEventListener("click", () => {

        const isLight =
            document.body.classList.contains("light");

        setTheme(isLight ? "dark" : "light");
    });
}


/* =========================
   COLORS
   ========================= */

const colorButtons =
    document.querySelectorAll(".color-option");

colorButtons.forEach(button => {

    button.addEventListener("click", () => {

        const color = button.dataset.color;

        if (!color) return;

        root.style.setProperty(
            "--primary",
            color
        );

        localStorage.setItem(
            "luna-color",
            color
        );

        colorButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");
    });
});

const savedColor =
    localStorage.getItem("luna-color");

if (savedColor) {
    root.style.setProperty(
        "--primary",
        savedColor
    );
}


/* =========================
   FONT
   ========================= */

const fontSelect =
    document.getElementById("fontSelect");

if (fontSelect) {

    const savedFont =
        localStorage.getItem("luna-font");

    if (savedFont) {

        fontSelect.value = savedFont;

        root.style.setProperty(
            "--font-family",
            savedFont
        );
    }

    fontSelect.addEventListener("change", () => {

        const font = fontSelect.value;

        root.style.setProperty(
            "--font-family",
            font
        );

        localStorage.setItem(
            "luna-font",
            font
        );
    });
}


/* =========================
   LIGHT / DARK BUTTONS
   ========================= */

const lightButton =
    document.getElementById("lightMode");

const darkButton =
    document.getElementById("darkMode");

if (lightButton) {

    lightButton.addEventListener(
        "click",
        () => setTheme("light")
    );
}

if (darkButton) {

    darkButton.addEventListener(
        "click",
        () => setTheme("dark")
    );
}


/* =========================
   RESET CUSTOMIZATION
   ========================= */

const resetButton =
    document.getElementById("resetCustomization");

if (resetButton) {

    resetButton.addEventListener("click", () => {

        localStorage.removeItem("luna-theme");
        localStorage.removeItem("luna-color");
        localStorage.removeItem("luna-font");

        root.style.setProperty(
            "--primary",
            "#8b5cf6"
        );

        root.style.setProperty(
            "--font-family",
            "'Inter', sans-serif"
        );

        setTheme("dark");

        if (fontSelect) {
            fontSelect.value =
                "'Inter', sans-serif";
        }

        alert("Luna App ayarları sıfırlandı! 🌙");
    });
}


/* =========================
   LUNA AI
   ========================= */

const aiMessages =
    document.getElementById("aiMessages");

const aiInput =
    document.getElementById("aiInput");

const aiSend =
    document.getElementById("aiSend");


function addAIMessage(text, type) {

    if (!aiMessages) return;

    const message =
        document.createElement("div");

    message.className =
        `ai-message ${type}`;

    message.textContent = text;

    aiMessages.appendChild(message);

    aiMessages.scrollTop =
        aiMessages.scrollHeight;
}


/*
   Bu hissə hələ demo cavab sistemidir.
   Real AI üçün təhlükəsiz backend bağlantısı
   əlavə etmək lazımdır.
*/

function lunaAI(message) {

    const text =
        message.toLowerCase().trim();

    if (
        text.includes("salam") ||
        text.includes("hello")
    ) {
        return "Salam! 😊 Mən Luna AI-yam. Sənə necə kömək edə bilərəm?";
    }

    if (
        text.includes("necəsən") ||
        text.includes("necesen")
    ) {
        return "Çox yaxşıyam! 🌙 Səninlə söhbət etməyə hazıram.";
    }

    if (
        text.includes("adın nədir") ||
        text.includes("adin nedir")
    ) {
        return "Mənim adım Luna AI-dır. 🤖🌙";
    }

    if (
        text.includes("luna")
    ) {
        return "Luna App-in süni intellekt köməkçisiyəm. 💜";
    }

    return "Maraqlı sualdır! 🤖 Hazırda Luna AI demo rejimindədir. Real süni intellekt cavabları üçün AI server bağlantısı əlavə edilməlidir.";
}


function sendAIMessage() {

    if (!aiInput) return;

    const message =
        aiInput.value.trim();

    if (!message) return;

    addAIMessage(message, "user");

    aiInput.value = "";

    setTimeout(() => {

        const answer =
            lunaAI(message);

        addAIMessage(answer, "bot");

    }, 500);
}


if (aiSend) {

    aiSend.addEventListener(
        "click",
        sendAIMessage
    );
}


if (aiInput) {

    aiInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                sendAIMessage();
            }

        }
    );
}


/* =========================
   START MESSAGE
   ========================= */

if (aiMessages) {

    addAIMessage(
        "Salam! 🌙 Mən Luna AI-yam. Mənə bir şey yaz.",
        "bot"
    );
}

console.log("🌙 Luna App hazırdır!");
