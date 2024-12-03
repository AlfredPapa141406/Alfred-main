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
        text: "Our first date! 🥰 This was a magical and unforgettable moment. It felt like the start of something truly special. Every little detail, from the place we visited to the conversations we had, made it an amazing experience. I still smile whenever I think about it. ❤️Our first date! 🥰 This was a magical and unforgettable moment. It felt like the start of something truly special. Every little detail, from the place we visited to the conversations we had, made it an amazing experience. I still smile whenever I think about it. ❤️Our first date! 🥰 This was a magical and unforgettable moment. It felt like the start of something truly special. Every little detail, from the place we visited to the conversations we had, made it an amazing experience. I still smile whenever I think about it. ❤️Our first date! 🥰 This was a magical and unforgettable moment. It felt like the start of something truly special. Every little detail, from the place we visited to the conversations we had, made it an amazing experience. I still smile whenever I think about it. ❤️Our first date! 🥰 This was a magical and unforgettable moment. It felt like the start of something truly special. Every little detail, from the place we visited to the conversations we had, made it an amazing experience. I still smile whenever I think about it. ❤️"
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
