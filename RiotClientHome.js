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
function changeImg() {
    document.getElementById("userimg").src = "icons/icons8-user-100h.png";
}

function changeImgBack() {
    document.getElementById("userimg").src = "icons/icons8-user-100.png";
}

// My Games styling on hover
function imgShadow() {
    var img = document.getElementById("coverimage");
   
    // create style object
    var styles = {
        outline: 'solid 3px rgb(180, 180, 180)',
        transition: '0.1s ease-in-out'
    }
   
    // apply styles to img
    Object.assign(img.style,styles);

    document.getElementById("valorantsample").style.boxShadow = "0 0 60px -3px #da2949";
    document.getElementById("valorantsample").style.transition = "0.1s ease-in-out"
}

function imgShadowRemove() {
    document.getElementById("coverimage").style.outline = "none";
    document.getElementById("valorantsample").style.boxShadow = "none";
}

// All Games styling on hover
// Cover image 1 styling
function imgShadow1ON() {
    document.getElementById("coverimage1").style.outline = "solid 3px rgb(180, 180, 180)";
    document.getElementById("coverimage1").style.transition = "0.1s ease-in-out";

    var img1 = document.getElementById("coverimg1");

    //create style object
    var style1 = {
        boxShadow: '0 0 70px -3px #d45f24',
        transition: '0.1s ease-in-out'
    }

    // apply style to img1
    Object.assign(img1.style,style1);
}

function imgShadow1OFF(){
    document.getElementById("coverimage1").style.outline = "none";
    document.getElementById("coverimg1").style.boxShadow = "none";
}

function goToGame1() {
    window.location.href = "/Riot Client/LeagueofLegendsMainPage.html";
}

// Cover image 2 styling
function imgShadow2ON() {
    document.getElementById("coverimage2").style.outline = "solid 3px rgb(180, 180, 180)";
    document.getElementById("coverimage2").style.transition = "0.1s ease-in-out";

    var img2 = document.getElementById("coverimg2");

    //create style object
    var style2 = {
        boxShadow: '0 0 70px -3px #2cb2db',
        transition: '0.1s ease-in-out'
    }

    // apply style to img2
    Object.assign(img2.style,style2);
}

function imgShadow2OFF(){
    document.getElementById("coverimage2").style.outline = "none";
    document.getElementById("coverimg2").style.boxShadow = "none";
}

function goToGame2() {
    window.location.href = "/Riot Client/LOLWildRiftMainPage.html";
}

// Cover image 3 styling
function imgShadow3ON() {
    document.getElementById("coverimage3").style.outline = "solid 3px rgb(180, 180, 180)";
    document.getElementById("coverimage3").style.transition = "0.1s ease-in-out";

    var img3 = document.getElementById("coverimg3");

    //create style object
    var style3 = {
        boxShadow: '0 0 70px -3px #e87bdd',
        transition: '0.1s ease-in-out'
    }

    // apply style to img3
    Object.assign(img3.style,style3);
}

function imgShadow3OFF(){
    document.getElementById("coverimage3").style.outline = "none";
    document.getElementById("coverimg3").style.boxShadow = "none";
}

function goToGame3() {
    window.location.href = "/Riot Client/LegendsofRuneterra.html";
}

// Cover image 4 styling
function imgShadow4ON() {
    document.getElementById("coverimage4").style.outline = "solid 3px rgb(180, 180, 180)";
    document.getElementById("coverimage4").style.transition = "0.1s ease-in-out";

    var img4 = document.getElementById("coverimg4");

    //create style object
    var style4 = {
        boxShadow: '0 0 70px -3px #ebd936',
        transition: '0.1s ease-in-out'
    }

    // apply style to img4
    Object.assign(img4.style,style4);
}

function imgShadow4OFF(){
    document.getElementById("coverimage4").style.outline = "none";
    document.getElementById("coverimg4").style.boxShadow = "none";
}

function goToGame4() {
    window.location.href = "/Riot Client/TeamFightMainPage.html";
}

// Cover image 5 styling
function imgShadow5ON() {
    document.getElementById("coverimage5").style.outline = "solid 3px rgb(180, 180, 180)";
    document.getElementById("coverimage5").style.transition = "0.1s ease-in-out";

    var img5 = document.getElementById("coverimg5");

    //create style object
    var style5 = {
        boxShadow: '0 0 70px -3px #da2949',
        transition: '0.1s ease-in-out'
    }

    // apply style to img5
    Object.assign(img5.style,style5);
}

function imgShadow5OFF(){
    document.getElementById("coverimage5").style.outline = "none";
    document.getElementById("coverimg5").style.boxShadow = "none";
}

function goToGame5() {
    window.location.href = "/Riot Client/ValorantMainPage.html";
}

// Video styling on hover
let Video = document.getElementById("vid");

// Applying mouseover event on video clip and then 
// we call play() function to play the video when the mouse is over the video

Video.addEventListener('mouseover', function(e){
    Video.play();
    Video.style.outline = "solid 3px rgb(180, 180, 180)";
    Video.style.boxShadow = "0 0 10px 3px #ffffff";
    Video.style.transition = "0.1s ease-in-out";
})

// Applying mouseout event on video clip and then 
// we call pause() function to stop the video when the mouse is out the video

Video.addEventListener('mouseout', function(e){
    Video.pause();
    Video.style.outline = "none";
    Video.style.boxShadow = "none";
    Video.style.transition = "0.1s ease-in-out";
})

// Display thumbnail back after video ends
Video.addEventListener('ended', function(e){
    Video.load();
})

// Go to next page after clicking on video
function nextPage(){
    window.location.href = "/Riot Client/ArcaneMainPage.html";
}