function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    checkCC();
}

function getCookie(cname) {
    let cookie = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let carr = decodedCookie.split(';');
    for (let i = 0; i < carr.length; i++) {
        let c = carr[i];
        while (c.charAt(0) == '') {
            c = c.substring(1);
        }
        if (c.indexOf(cookie) == 0) {
            return c.substring(cookie.length, c.length);
        }
    }
    return null;
}

function checkCC() {
    if (getCookie("cC") === null) {
        document.getElementById("cC").style.display = "block";
    } else {
        document.getElementById("cC").style.display = "none";
    }
}

window.onload = (event) => {
    checkCC();
};
