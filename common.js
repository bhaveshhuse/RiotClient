// Navigation bar boxes styling on hovering
// Box 1 styling
function changeNew() {
    var cubes = document.getElementsByClassName("cube");

    for (let i = 0; i < cubes.length; i++) {
        cubes[i].style.backgroundColor = "rgb(235, 235, 235)";
    }
}

function changeBack() {
    var cubes = document.getElementsByClassName("cube");

    for (let i = 0; i < cubes.length; i++) {
        cubes[i].style.backgroundColor = "rgb(150, 150, 150)";
    }
}

// Box 2 styling
function changeImg2() {
    document.getElementById("userimg").src = "icons/icons8-user-100h.png";
}

function changeImg2Back() {
    document.getElementById("userimg").src = "icons/icons8-user-100.png";
}

function home() {
    window.location.href = "/Riot Client/RiotClientHome.html";
}

// Box 3 & 4 styling
var video = document.getElementById("trailer");
var box3 = document.getElementsByClassName("box3");
var box4 = document.getElementsByClassName("box4");

// Box 3 on click actions
box3[0].addEventListener('click', function (e) {
    if (video.muted) {
        if (video.paused) {
            document.getElementById("audiobtn").src = "icons/icons8-no-audio-light-100.png";
        } else {
            video.muted = false;
            document.getElementById("audiobtn").src = "icons/icons8-audio-light-100.png";
        }
    } else {
        video.muted = true;
        document.getElementById("audiobtn").src = "icons/icons8-no-audio-light-100.png";
    }
})

// Box 3 on hover styling
box3[0].addEventListener('mouseover', function (e) {
    if (video.paused == true || video.muted == true) {
        document.getElementById("audiobtn").src = "icons/icons8-no-audio-light-100.png";
    } else {
        document.getElementById("audiobtn").src = "icons/icons8-audio-light-100.png";
    }
})

// Box 3 on mouse leave styling
box3[0].addEventListener('mouseleave', function (e) {
    if (video.paused == true || video.muted == true) {
        document.getElementById("audiobtn").src = "icons/icons8-no-audio-dark-100.png";
    } else {
        document.getElementById("audiobtn").src = "icons/icons8-audio-dark-100.png";
    }
})

// Box 4 on click actions
box4[0].addEventListener('click', function (e) {
    if (video.paused) {
        video.play();
        document.getElementById("videobtn").src = "icons/icons8-video-light-100.png";
    } else {
        video.pause();
        video.load();
        document.getElementById("videobtn").src = "icons/icons8-no-video-dark-100.png";
        document.getElementById("audiobtn").src = "icons/icons8-no-audio-dark-100.png";
        video.muted = true;
    }
})

// Box 4 on hover styling
box4[0].addEventListener('mouseover', function (e) {
    if (video.paused) {
        document.getElementById("videobtn").src = "icons/icons8-no-video-light-100.png";
    } else {
        document.getElementById("videobtn").src = "icons/icons8-video-light-100.png";
    }
})

// Box 4 on mouse leave styling
box4[0].addEventListener('mouseleave', function (e) {
    if (video.paused) {
        document.getElementById("videobtn").src = "icons/icons8-no-video-dark-100.png";
    } else {
        document.getElementById("videobtn").src = "icons/icons8-video-dark-100.png";
    }
})

// video.addEventListener('ended', function (e) {
//     video.load();
//     video.muted = true;
// })

// Hiding Box 3 & 4 on scrolling down
var lastScrollY = window.scrollY;

window.addEventListener('scroll', function () {
    if (lastScrollY < window.scrollY) {
        box3[0].style.visibility = "hidden";
        box4[0].style.visibility = "hidden";
    } else {
        box3[0].style.visibility = "visible";
        box4[0].style.visibility = "visible";
    }
    lastScrollY = window.scrollY;
})

// Button icon's radius styling
function increase() {
    document.getElementById("circle").style.outline = "solid 3px rgb(20, 20, 20)";
    document.getElementById("circle").style.transition = "outline 0.13s ease-in-out";
}

function decrease() {
    document.getElementById("circle").style.outline = "solid 0px rgb(20, 20, 20)";
    document.getElementById("circle").style.transition = "outline 0.13s ease-in-out";
}