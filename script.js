function openGift() {
    const welcome = document.getElementById("welcome");
    const gift = document.getElementById("gift");

    if (!welcome || !gift) {
        return;
    }

    welcome.classList.add("hidden");
    gift.classList.remove("hidden");
}


function showMessage() {
    const message = document.getElementById("message");
    const typedMessage = document.getElementById("typedMessage");

    if (!message || !typedMessage) {
        return;
    }

    message.classList.remove("hidden");

    const text = `Happy Birthday, Dhivya Challum! 🎂❤️

It’s been four years, and honestly, I never thought that you would become someone whom I care about this much. We started as just normal friends, but somewhere along the way, you became my Challum—someone truly special and important to me.

You are the one person who really knows me and cares about me. You understand me in ways that I don’t always have to explain, and that means more to me than I can properly put into words.

Sometimes I wish I could promise that I’ll always be there beside you throughout your life, through every happy moment and every difficult one. I can’t predict what the future will bring, but I truly hope that our friendship remains special no matter where life takes us.

Even if we aren’t in each other’s lives the same way after 12th, I want you to remember that you’ll always be someone I’m grateful to have known. I’ll carry the memories of these four years with me wherever life takes me, and I’ll always wish the best for you.

And most importantly, I just want you to know this from my heart—I love you. ❤️ You’re incredibly special to me, and I’m genuinely grateful that these four years brought you into my life.

Happy Birthday once again, Dhivya Challum! 🎉💖 I hope this year brings you countless reasons to smile, lots of happiness, and everything you deserve.`;

    typedMessage.textContent = "";

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typedMessage.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 35);
        }
    }

    typeWriter();
}


function confetti() {
    for (let i = 0; i < 60; i++) {
        const piece = document.createElement("div");

        piece.className = "confetti";
        piece.textContent = "🎉";

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 4000);
    }
}


/* =====================================================
   LITTLE SURPRISE
   ===================================================== */

function showSurprise() {

    const surprise =
        document.getElementById("surpriseText");

    const intro =
        document.getElementById("surpriseIntro");

    const giftStage =
        document.getElementById("surpriseGiftStage");

    const ticketStage =
        document.getElementById("vipTicketStage");

    const doorStage =
        document.getElementById("vipDoorStage");

    const memoriesStage =
        document.getElementById("fourMemoriesStage");


    if (
        !surprise ||
        !intro ||
        !giftStage ||
        !ticketStage ||
        !doorStage ||
        !memoriesStage
    ) {
        return;
    }


    surprise.classList.remove("hidden");

    surprise.classList.add(
        "surprise-active"
    );


    intro.classList.remove("hidden");

    giftStage.classList.add("hidden");

    ticketStage.classList.add("hidden");

    doorStage.classList.add("hidden");

    memoriesStage.classList.add("hidden");


    document.body.classList.add(
        "surprise-open"
    );
}


/* =====================================================
   OPEN THE BIG GIFT BOX
   ===================================================== */

function openLittleSurprise() {

    const intro =
        document.getElementById("surpriseIntro");

    const giftStage =
        document.getElementById("surpriseGiftStage");


    if (!intro || !giftStage) {
        return;
    }


    intro.classList.add(
        "surprise-opening"
    );


    setTimeout(() => {

        intro.classList.add("hidden");

        intro.classList.remove(
            "surprise-opening"
        );


        giftStage.classList.remove(
            "hidden"
        );

        giftStage.classList.add(
            "surprise-reveal-active"
        );

    }, 650);
}


/* =====================================================
   OPEN VIP GIFT BOX
   ===================================================== */

function openVipBox() {

    const giftStage =
        document.getElementById(
            "surpriseGiftStage"
        );

    const ticketStage =
        document.getElementById(
            "vipTicketStage"
        );


    if (!giftStage || !ticketStage) {
        return;
    }


    const box =
        document.querySelector(
            ".vip-gift-box"
        );


    if (box) {

        box.classList.add(
            "gift-box-opening"
        );

    }


    confetti();


    setTimeout(() => {

        giftStage.classList.add(
            "hidden"
        );

        giftStage.classList.remove(
            "surprise-reveal-active"
        );


        ticketStage.classList.remove(
            "hidden"
        );

        ticketStage.classList.add(
            "ticket-stage-visible"
        );


    }, 900);
}


/* =====================================================
   PRESENT VIP TICKET
   ===================================================== */

function presentVipTicket() {

    const ticket =
        document.getElementById(
            "vipTicket"
        );

    const ticketStage =
        document.getElementById(
            "vipTicketStage"
        );

    const doorStage =
        document.getElementById(
            "vipDoorStage"
        );


    if (
        !ticket ||
        !ticketStage ||
        !doorStage
    ) {
        return;
    }


    ticket.classList.add(
        "ticket-presented"
    );


    setTimeout(() => {

        ticketStage.classList.add(
            "hidden"
        );


        doorStage.classList.remove(
            "hidden"
        );

        doorStage.classList.add(
            "door-stage-visible"
        );


    }, 1000);
}


/* =====================================================
   UNLOCK THE DOOR
   ===================================================== */

function unlockMemoryDoor() {

    const door =
        document.getElementById(
            "door"
        );

    const status =
        document.getElementById(
            "doorStatus"
        );

    const doorStage =
        document.getElementById(
            "vipDoorStage"
        );

    const memoriesStage =
        document.getElementById(
            "fourMemoriesStage"
        );


    if (
        !door ||
        !status ||
        !doorStage ||
        !memoriesStage
    ) {
        return;
    }


    door.classList.add(
        "door-opening"
    );


    status.textContent =
        "🔓 Access granted...";


    setTimeout(() => {

        doorStage.classList.add(
            "hidden"
        );


        memoriesStage.classList.remove(
            "hidden"
        );

        memoriesStage.classList.add(
            "memories-stage-visible"
        );


        showVipYear(1);

        confetti();


    }, 1200);
}


/* =====================================================
   CLOSE SURPRISE
   ===================================================== */

function closeSurprise() {

    const surprise =
        document.getElementById(
            "surpriseText"
        );

    const intro =
        document.getElementById(
            "surpriseIntro"
        );

    const giftStage =
        document.getElementById(
            "surpriseGiftStage"
        );

    const ticketStage =
        document.getElementById(
            "vipTicketStage"
        );

    const doorStage =
        document.getElementById(
            "vipDoorStage"
        );

    const memoriesStage =
        document.getElementById(
            "fourMemoriesStage"
        );


    if (!surprise) {
        return;
    }


    surprise.classList.remove(
        "surprise-active"
    );

    document.body.classList.remove(
        "surprise-open"
    );


    setTimeout(() => {

        surprise.classList.add(
            "hidden"
        );


        /* RESET INTRO */

        if (intro) {

            intro.classList.remove(
                "hidden",
                "surprise-opening"
            );

        }


        /* RESET GIFT */

        if (giftStage) {

            giftStage.classList.add(
                "hidden"
            );

            giftStage.classList.remove(
                "surprise-reveal-active"
            );

        }


        /* RESET TICKET */

        if (ticketStage) {

            ticketStage.classList.add(
                "hidden"
            );

            ticketStage.classList.remove(
                "ticket-stage-visible"
            );

        }


        /* RESET DOOR */

        if (doorStage) {

            doorStage.classList.add(
                "hidden"
            );

            doorStage.classList.remove(
                "door-stage-visible"
            );

        }


        /* RESET MEMORY ROOM */

        if (memoriesStage) {

            memoriesStage.classList.add(
                "hidden"
            );

            memoriesStage.classList.remove(
                "memories-stage-visible"
            );

        }


        /* RESET GIFT BOX */

        const box =
            document.querySelector(
                ".vip-gift-box"
            );

        if (box) {

            box.classList.remove(
                "gift-box-opening"
            );

        }


        /* RESET TICKET */

        const ticket =
            document.getElementById(
                "vipTicket"
            );

        if (ticket) {

            ticket.classList.remove(
                "ticket-presented"
            );

        }


        /* RESET DOOR */

        const door =
            document.getElementById(
                "door"
            );

        if (door) {

            door.classList.remove(
                "door-opening"
            );

        }


        const status =
            document.getElementById(
                "doorStatus"
            );

        if (status) {

            status.textContent =
                "🔒 Ticket required";

        }


        


        document
            .querySelectorAll(
                ".vip-memory-panel"
            )
            .forEach(
                function (panel, index) {

                    panel.classList.add(
                        "hidden"
                    );

                    panel.classList.remove(
                        "vip-memory-panel-show"
                    );


                    if (index === 0) {

                        panel.classList.remove(
                            "hidden"
                        );

                    }

                }
            );


        document
            .querySelectorAll(
                ".vip-year"
            )
            .forEach(
                function (yearButton, index) {

                    yearButton.classList.remove(
                        "active"
                    );


                    if (index === 0) {

                        yearButton.classList.add(
                            "active"
                        );

                    }

                }
            );


        updateVipNavigation();


    }, 350);
}


/* =====================================================
   PHOTO SYSTEM
   ===================================================== */

let currentPhoto = 0;


function openPhoto(src) {

    const popup =
        document.getElementById(
            "photoPopup"
        );

    const largePhoto =
        document.getElementById(
            "largePhoto"
        );


    if (!popup || !largePhoto) {
        return;
    }


    const photos =
        document.querySelectorAll(
            ".photo-card img"
        );


    photos.forEach(
        (photo, index) => {

            if (photo.src === src) {

                currentPhoto = index;

            }

        }
    );


    largePhoto.src = src;

    popup.classList.add("show");
}


function closePhoto() {

    const popup =
        document.getElementById(
            "photoPopup"
        );


    if (!popup) {
        return;
    }


    popup.classList.remove("show");
}


/* =====================================================
   BIRTHDAY COUNTDOWN
   ===================================================== */

const birthdayDate =
    new Date(
        "June 23, 2027 00:00:00"
    ).getTime();


function updateCountdown() {

    if (
        !document.getElementById(
            "welcome"
        )
    ) {
        return;
    }


    const now =
        new Date().getTime();

    const distance =
        birthdayDate - now;


    const welcomeTitle =
        document.querySelector(
            "#welcome h1"
        );

    const welcomeText =
        document.querySelector(
            "#welcome > p"
        );

    const giftArea =
        document.querySelector(
            ".gift-area"
        );

    const giftHint =
        document.querySelector(
            ".gift-hint"
        );

    const countdown =
        document.getElementById(
            "countdown-section"
        );


    if (
        !welcomeTitle ||
        !welcomeText ||
        !giftArea ||
        !giftHint ||
        !countdown
    ) {
        return;
    }


    if (distance <= 0) {

        countdown.classList.add(
            "hidden"
        );

        welcomeTitle.classList.remove(
            "hidden"
        );

        welcomeText.classList.remove(
            "hidden"
        );

        giftArea.classList.remove(
            "hidden"
        );

        giftHint.classList.remove(
            "hidden"
        );

        giftArea.classList.add(
            "birthday-unlock"
        );

        confetti();

        return;
    }


    welcomeTitle.classList.add(
        "hidden"
    );

    welcomeText.classList.add(
        "hidden"
    );

    giftArea.classList.add(
        "hidden"
    );

    giftHint.classList.add(
        "hidden"
    );


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );


    const daysElement =
        document.getElementById(
            "days"
        );

    const hoursElement =
        document.getElementById(
            "hours"
        );

    const minutesElement =
        document.getElementById(
            "minutes"
        );

    const secondsElement =
        document.getElementById(
            "seconds"
        );


    if (daysElement) {
        daysElement.textContent =
            days;
    }

    if (hoursElement) {
        hoursElement.textContent =
            hours;
    }

    if (minutesElement) {
        minutesElement.textContent =
            minutes;
    }

    if (secondsElement) {
        secondsElement.textContent =
            seconds;
    }
}


/* =====================================================
   START PAGE
   ===================================================== */

if (
    window.location.hash === "#gift"
) {

    openGift();

} else {

    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );

}


/* =====================================================
   🎵 BIRTHDAY PLAYLIST
   ===================================================== */

const playlist = [

    {
        title: "Kannu Thangom",
        artist: "MassTamilan",
        file: "Kannu-Thangom-MassTamilan.fm.mp3"
    },

    {
        title: "Dheema",
        artist: "MassTamilan",
        file: "Dheema.mp3"
    },

    {
        title: "Magale",
        artist: "MassTamilan",
        file: "Magale.mp3"
    }

];


let currentSong = 0;
let shuffleMode = false;
let repeatMode = false;


const birthdayMusic =
    document.getElementById(
        "birthdayMusic"
    );

const musicProgress =
    document.getElementById(
        "musicProgress"
    );

const currentTimeDisplay =
    document.getElementById(
        "currentTime"
    );

const durationDisplay =
    document.getElementById(
        "duration"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );

const songTitle =
    document.getElementById(
        "songTitle"
    );

const songArtist =
    document.getElementById(
        "songArtist"
    );


function loadSong(
    index,
    autoPlay = false
) {

    if (!birthdayMusic) {
        return;
    }


    currentSong = index;

    const song =
        playlist[currentSong];


    birthdayMusic.src =
        song.file;


    if (songTitle) {

        songTitle.textContent =
            song.title;

    }


    if (songArtist) {

        songArtist.textContent =
            song.artist;

    }


    if (musicProgress) {

        musicProgress.value = 0;

    }


    if (currentTimeDisplay) {

        currentTimeDisplay.textContent =
            "0:00";

    }


    if (durationDisplay) {

        durationDisplay.textContent =
            "0:00";

    }


    if (autoPlay) {

        birthdayMusic.play();

        if (musicButton) {

            musicButton.textContent =
                "Ⅱ";

        }

    } else {

        if (musicButton) {

            musicButton.textContent =
                "▶";

        }

    }
}


function toggleMusic() {

    if (!birthdayMusic) {
        return;
    }


    if (birthdayMusic.paused) {

        birthdayMusic.play();

        if (musicButton) {

            musicButton.textContent =
                "Ⅱ";

        }

    } else {

        birthdayMusic.pause();

        if (musicButton) {

            musicButton.textContent =
                "▶";

        }

    }
}


function nextSong() {

    if (!birthdayMusic) {
        return;
    }


    if (shuffleMode) {

        let newSong;

        do {

            newSong =
                Math.floor(
                    Math.random() *
                    playlist.length
                );

        } while (
            newSong === currentSong &&
            playlist.length > 1
        );


        currentSong =
            newSong;

    } else {

        currentSong++;

        if (
            currentSong >=
            playlist.length
        ) {

            currentSong = 0;

        }

    }


    loadSong(
        currentSong,
        true
    );
}


function previousSong() {

    if (!birthdayMusic) {
        return;
    }


    if (
        birthdayMusic.currentTime >
        5
    ) {

        birthdayMusic.currentTime =
            0;

        return;

    }


    currentSong--;


    if (currentSong < 0) {

        currentSong =
            playlist.length - 1;

    }


    loadSong(
        currentSong,
        true
    );
}


function toggleShuffle() {

    shuffleMode =
        !shuffleMode;


    const button =
        document.getElementById(
            "shuffleButton"
        );


    if (!button) {
        return;
    }


    if (shuffleMode) {

        button.style.opacity =
            "1";

        button.style.transform =
            "scale(1.15)";

    } else {

        button.style.opacity =
            "0.5";

        button.style.transform =
            "scale(1)";

    }
}


function toggleRepeat() {

    repeatMode =
        !repeatMode;


    const button =
        document.getElementById(
            "repeatButton"
        );


    if (!button) {
        return;
    }


    if (repeatMode) {

        button.style.opacity =
            "1";

        button.style.transform =
            "scale(1.15)";

    } else {

        button.style.opacity =
            "0.5";

        button.style.transform =
            "scale(1)";

    }
}


/* =====================================================
   MUSIC EVENTS
   ===================================================== */

if (birthdayMusic) {

    birthdayMusic.addEventListener(
        "ended",
        function () {

            if (repeatMode) {

                birthdayMusic.currentTime =
                    0;

                birthdayMusic.play();

            } else {

                nextSong();

            }

        }
    );


    birthdayMusic.addEventListener(
        "loadedmetadata",
        function () {

            if (durationDisplay) {

                durationDisplay.textContent =
                    formatTime(
                        birthdayMusic.duration
                    );

            }

        }
    );


    birthdayMusic.addEventListener(
        "timeupdate",
        function () {

            if (!birthdayMusic.duration) {
                return;
            }


            const progress =
                (
                    birthdayMusic.currentTime /
                    birthdayMusic.duration
                ) * 100;


            if (musicProgress) {

                musicProgress.value =
                    progress;

            }


            if (currentTimeDisplay) {

                currentTimeDisplay.textContent =
                    formatTime(
                        birthdayMusic.currentTime
                    );

            }

        }
    );

}


if (
    musicProgress &&
    birthdayMusic
) {

    musicProgress.addEventListener(
        "input",
        function () {

            if (!birthdayMusic.duration) {
                return;
            }


            birthdayMusic.currentTime =
                (
                    musicProgress.value /
                    100
                ) *
                birthdayMusic.duration;

        }
    );

}


function formatTime(seconds) {

    if (!Number.isFinite(seconds)) {
        return "0:00";
    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        Math.floor(
            seconds % 60
        );


    return (
        minutes +
        ":" +
        String(
            remainingSeconds
        ).padStart(2, "0")
    );
}


/* =====================================================
   LOAD FIRST SONG
   ===================================================== */

if (birthdayMusic) {

    loadSong(0);

}


/* =====================================================
   VIP MEMORY TIMELINE
   ===================================================== */



function showVipYear(year) {

    const panels =
        document.querySelectorAll(
            ".vip-memory-panel"
        );

    const years =
        document.querySelectorAll(
            ".vip-year"
        );


    if (
        !panels.length ||
        !years.length
    ) {
        return;
    }


    if (
        year < 1 ||
        year > 4
    ) {
        return;
    }


    currentVipYear =
        year;


    panels.forEach(
        function (panel) {

            panel.classList.add(
                "hidden"
            );

            panel.classList.remove(
                "vip-memory-panel-show"
            );

        }
    );


    years.forEach(
        function (button) {

            button.classList.remove(
                "active"
            );

        }
    );


    const panel =
        document.getElementById(
            "vipMemory" + year
        );


    const selectedYear =
        document.getElementById(
            "vipYear" + year
        );


    if (panel) {

        panel.classList.remove(
            "hidden"
        );


        setTimeout(
            function () {

                panel.classList.add(
                    "vip-memory-panel-show"
                );

            },
            30
        );

    }


    if (selectedYear) {

        selectedYear.classList.add(
            "active"
        );

    }


    updateVipNavigation();
}


function previousVipYear() {

    if (
        currentVipYear > 1
    ) {

        showVipYear(
            currentVipYear - 1
        );

    }
}


function nextVipYear() {

    if (
        currentVipYear < 4
    ) {

        showVipYear(
            currentVipYear + 1
        );

    }
}


function updateVipNavigation() {

    const counter =
        document.getElementById(
            "vipYearCounter"
        );


    const previousButton =
        document.getElementById(
            "vipPreviousButton"
        );


    const nextButton =
        document.getElementById(
            "vipNextButton"
        );


    if (counter) {

        counter.textContent =
            "Year " +
            currentVipYear +
            " of 4";

    }


    if (previousButton) {

        previousButton.disabled =
            currentVipYear === 1;

    }


    if (nextButton) {

        nextButton.disabled =
            currentVipYear === 4;

    }
}


/* =====================================================
   PHOTO NAVIGATION
   ===================================================== */

function previousPhoto(event) {

    if (event) {

        event.stopPropagation();

    }


    const photos =
        document.querySelectorAll(
            ".photo-card img"
        );


    if (!photos.length) {
        return;
    }


    currentPhoto--;


    if (currentPhoto < 0) {

        currentPhoto =
            photos.length - 1;

    }


    const largePhoto =
        document.getElementById(
            "largePhoto"
        );


    if (largePhoto) {

        largePhoto.src =
            photos[
                currentPhoto
            ].src;

    }
}


function nextPhoto(event) {

    if (event) {

        event.stopPropagation();

    }


    const photos =
        document.querySelectorAll(
            ".photo-card img"
        );


    if (!photos.length) {
        return;
    }


    currentPhoto++;


    if (
        currentPhoto >=
        photos.length
    ) {

        currentPhoto = 0;

    }


    const largePhoto =
        document.getElementById(
            "largePhoto"
        );


    if (largePhoto) {

        largePhoto.src =
            photos[
                currentPhoto
            ].src;

    }
}


/* =====================================================
   PHONE SWIPE
   ===================================================== */

let touchStartX = 0;
let touchEndX = 0;


const photoPopup =
    document.getElementById(
        "photoPopup"
    );


if (photoPopup) {

    photoPopup.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0]
                    .screenX;

        }
    );


    photoPopup.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0]
                    .screenX;


            const swipeDistance =
                touchEndX -
                touchStartX;


            if (
                Math.abs(
                    swipeDistance
                ) < 50
            ) {

                return;

            }


            if (
                swipeDistance > 0
            ) {

                previousPhoto(event);

            } else {

                nextPhoto(event);

            }

        }
    );

}


/* =====================================================
   KEYBOARD CONTROLS
   ===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        const popup =
            document.getElementById(
                "photoPopup"
            );


        if (
            !popup ||
            !popup.classList.contains(
                "show"
            )
        ) {

            return;

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            event.preventDefault();

            previousPhoto(event);

        }

        else if (
            event.key ===
            "ArrowRight"
        ) {

            event.preventDefault();

            nextPhoto(event);

        }

        else if (
            event.key ===
            "Escape"
        ) {

            event.preventDefault();

            closePhoto();

        }

    }
);
// =====================================================
// ❤️ VIP MEMORY YEAR NAVIGATION
// =====================================================



// Show one memory at a time
function showVipYear(year) {

    const panels =
        document.querySelectorAll(".vip-memory-panel");

    const years =
        document.querySelectorAll(".vip-year");

    // Safety check
    if (!panels.length || !years.length) {
        return;
    }

    // Keep year between 1 and 4
    year = Math.max(1, Math.min(4, year));

    currentVipYear = year;


    // Hide every memory
    panels.forEach(function (panel) {

        panel.classList.add("hidden");

        panel.classList.remove(
            "vip-memory-panel-show"
        );

    });


    // Remove active state from every year button
    years.forEach(function (button) {

        button.classList.remove("active");

    });


    // Show selected memory
    const selectedPanel =
        document.getElementById(
            "vipMemory" + year
        );


    // Activate selected year
    const selectedYear =
        document.getElementById(
            "vipYear" + year
        );


    if (selectedPanel) {

        selectedPanel.classList.remove("hidden");

        // Small delay so the animation actually plays
        setTimeout(function () {

            selectedPanel.classList.add(
                "vip-memory-panel-show"
            );

        }, 30);

    }


    if (selectedYear) {

        selectedYear.classList.add("active");

    }


    updateVipNavigation();

}


// =====================================================
// PREVIOUS YEAR
// =====================================================

function previousVipYear() {

    if (currentVipYear > 1) {

        showVipYear(
            currentVipYear - 1
        );

    }

}


// =====================================================
// NEXT YEAR
// =====================================================

function nextVipYear() {

    if (currentVipYear < 4) {

        showVipYear(
            currentVipYear + 1
        );

    }

}


// =====================================================
// UPDATE PREVIOUS / NEXT / COUNTER
// =====================================================

function updateVipNavigation() {

    const counter =
        document.getElementById(
            "vipYearCounter"
        );

    const previousButton =
        document.getElementById(
            "vipPreviousButton"
        );

    const nextButton =
        document.getElementById(
            "vipNextButton"
        );


    // Update counter
    if (counter) {

        counter.textContent =
            "Year " +
            currentVipYear +
            " of 4";

    }


    // Disable Previous on Year 1
    if (previousButton) {

        previousButton.disabled =
            currentVipYear === 1;

    }


    // Disable Next on Year 4
    if (nextButton) {

        nextButton.disabled =
            currentVipYear === 4;

    }

}


// =====================================================
// INITIAL VIP YEAR
// =====================================================

function initializeVipMemoryRoom() {

    const memoriesStage =
        document.getElementById(
            "fourMemoriesStage"
        );

    if (!memoriesStage) {
        return;
    }

    showVipYear(1);

}
// =====================================================
// ❤️ VIP MEMORY YEAR NAVIGATION
// =====================================================

let currentVipYear = 1;

function showVipYear(year) {

    const panels =
        document.querySelectorAll(".vip-memory-panel");

    const years =
        document.querySelectorAll(".vip-year");

    if (!panels.length || !years.length) {
        return;
    }

    year = Math.max(1, Math.min(4, year));

    currentVipYear = year;

    panels.forEach(function (panel) {
        panel.classList.add("hidden");
        panel.classList.remove("vip-memory-panel-show");
    });

    years.forEach(function (button) {
        button.classList.remove("active");
    });

    const selectedPanel =
        document.getElementById("vipMemory" + year);

    const selectedYear =
        document.getElementById("vipYear" + year);

    if (selectedPanel) {

        selectedPanel.classList.remove("hidden");

        setTimeout(function () {
            selectedPanel.classList.add(
                "vip-memory-panel-show"
            );
        }, 30);
    }

    if (selectedYear) {
        selectedYear.classList.add("active");
    }

    updateVipNavigation();
}


function previousVipYear() {

    if (currentVipYear > 1) {
        showVipYear(currentVipYear - 1);
    }

}


function nextVipYear() {

    if (currentVipYear < 4) {
        showVipYear(currentVipYear + 1);
    }

}


function updateVipNavigation() {

    const counter =
        document.getElementById("vipYearCounter");

    const previousButton =
        document.getElementById("vipPreviousButton");

    const nextButton =
        document.getElementById("vipNextButton");

    if (counter) {
        counter.textContent =
            "Year " + currentVipYear + " of 4";
    }

    if (previousButton) {
        previousButton.disabled =
            currentVipYear === 1;
    }

    if (nextButton) {
        nextButton.disabled =
            currentVipYear === 4;
    }
}