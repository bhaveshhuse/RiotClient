var check = function () {
    var fieldvalue1 = document.getElementById("textfield1").value;
    var fieldvalue2 = document.getElementById("textfield2").value;
    var btn = document.getElementById("btn");

    if (fieldvalue1.length != 0 && fieldvalue2.length != 0) {
        btn.style.backgroundColor = "#E13D3D";
        btn.style.borderStyle = "none";
        btn.style.cursor = "pointer";
    }
    else {
        btn.style.backgroundColor = "white";
        btn.style.border = "solid 2px rgb(225, 225, 225)";
        btn.style.cursor = "default";
    }
}

function changeBG() {
    var fv1 = document.getElementById("textfield1").value;
    var fv2 = document.getElementById("textfield2").value;
    var btn = document.getElementById("btn");

    if (fv1.length != 0 && fv2.length != 0) {
        btn.style.backgroundColor = "#ce3838";
        btn.style.borderStyle = "none";
        btn.style.cursor = "pointer";
    }
}

function changeBack() {
    var fv1 = document.getElementById("textfield1").value;
    var fv2 = document.getElementById("textfield2").value;
    var btn = document.getElementById("btn");

    if (fv1.length != 0 && fv2.length != 0) {
        btn.style.backgroundColor = "#E13D3D";
        btn.style.borderStyle = "none";
        btn.style.cursor = "pointer";
    }
}

function validate() {
    var fieldvalue1 = document.getElementById("textfield1").value;
    var fieldvalue2 = document.getElementById("textfield2").value;

    if (fieldvalue1.length >= 7 && fieldvalue2.length != 0) {
        window.location.href = "/Riot Client/RiotClientHome.html";
    }
}

