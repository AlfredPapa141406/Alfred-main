// Select elements
const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const closeButton = document.querySelector(".close");

// Array of images with corresponding modal text
const galleryItems = [
    {
        src: "Data/Photos/1stdate.jpg",
        text: "Hi Love! First Date natin na sobrang memorable na everytime na nakikita ko 'tong picture natin na to bumabalik lahat ng masasayang memories. Hindi hindi ko malilimutan yung YES mo and kung paano mo ako sinagot. Thank you colleena ❤️"
    },
    {
        src: "Data/Photos/1stmass.jpg",
        text: "Our first Mass! 🙏 A deeply meaningful experience where we shared faith and gratitude together."
    },
    {
        src: "Data/Photos/1.jpg",
        text: "Cute! 🐶 A lovely memory that always warms my heart."
    },
    {
        src: "Data/Photos/2.jpg",
        text: "Date 🍕 Another fun and memorable outing together. We had so much laughter!"
    },
    {
        src: "Data/Photos/MonthsaryGift.jpg",
        text: "Monthsary Gift 🎁 A thoughtful surprise that perfectly captured how much we care for each other."
    },
    {
        src: "Data/Photos/ColleenaBirthday.jpg",
        text: "Colleena's Birthday 🎉 A celebration of joy and love with unforgettable moments."
    },
    {
        src: "Data/Photos/HEHE.jpg",
        text: "Date! 🥳 Another beautiful day together that filled our hearts with happiness."
    },
    {
        src: "Data/Photos/Couplebracelet.jpg",
        text: "Bracelet 💕 A symbol of our connection and the cherished moments we share."
    }
];


// Play/Pause music functionality
let isPlaying = false;
musicButton.addEventListener("click", () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicButton.textContent = "Play Music";
    } else {
        backgroundMusic.play();
        musicButton.textContent = "Pause Music";
    }
    isPlaying = !isPlaying;
});

// Open modal function
function openModal(index) {
    const selectedItem = galleryItems[index];
    modalImage.src = selectedItem.src;
    modalText.textContent = selectedItem.text; // Display long text
    modal.style.display = "block";
}

// Close modal function
function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside modal content
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};

// Dynamically add click events to gallery items
document.querySelectorAll(".card").forEach((card, index) => {
    card.addEventListener("click", () => openModal(index));
});
