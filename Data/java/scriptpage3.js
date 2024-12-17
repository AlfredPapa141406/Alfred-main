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
        text: "Love, Every time na na-attend tayo ng mass, winiwish ko lagi kay Lord na lagi nya lagi tayo ibless and I wish you all the best na maachieve natin lahat ng goals natin in life na magkasama, and kahit na napapadalas ang ating mga tampuhan at away sana maging center parin natin si Lord until our last breath."
    },
    {
        src: "Data/Photos/1.jpg",
        text: "I love you Colleena, ganda ng pagkakapicture ko sayo dito with coffee, saan nga ba to? eto yung time na nag date tayo after natin mag badminton, sorry kasi di ako mahilig mag coffee and once na nag cocoffee ako sumasama pakiramdam ko. gusto sana kitang sabayan mag coffee lalo na gusto kita yayain lagi mag coffee date."
    },
    {
        src: "Data/Photos/2.jpg",
        text: "Love sa 1 year natin magkasama iilan lang yung photos natin together kaya ilang pictures lang din maiilalagay ko dito. pero kahit ganun thankful parin ako na kahit papaano may picture parin tayo together."
    },
    {
        src: "Data/Photos/MonthsaryGift.jpg",
        text: "Monthsary Gift 🎁, Naalala mo ba to? eto yung time na medyo nag stastart na yung busy days mo and kahit nasa office ka nag dala parin ako sa bahay nyo ng cake to celebrate our monthsary. and I wish yung mga binigay ko sayo is napapasaya kita kahit papaano and i hope na naappreciate mo mga efforts ko for the whole year 2024."
    },
    {
        src: "Data/Photos/ColleenaBirthday.jpg",
        text: "Colleena's Birthday 🎉 !!!. alam mo sobrang saya ko na makita ka na sobrang happy, hindi ko maipaliwanag yung saya ko for you. na kahit until now habang ginagawa ko to i still remember how i make you happy! na feeling ko gusto kitang yakapin and iparamdam sayo kung gaano kita kamahal na lahat lahat gagawin ko for you just to make you happy."
    },
    {
        src: "Data/Photos/HEHE.jpg",
        text: "Date! 🥳 Another beautiful day together that filled our hearts with happiness."
    },
    {
        src: "Data/Photos/Couplebracelet.jpg",
        text: "This bracelet holds our promise: no matter where life takes us, our connection lasts until our very last breath, and I promise you colleena sa araw-araw nating pag aaway I will always choose you no matter what happens in the future. and sabi nga nila: Love means being there for someone, not just when things are easy, but also when life throws challenges your way; it's about staying together through thick and thin ."
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
