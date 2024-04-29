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
    document.body.insertAdjacentHTML("beforeend", `
    <div class="flexrow"
        style="position: fixed; bottom: 16px; right: 16px; align-items: center; margin:10px; box-shadow:0 0 20px 5px #272727; background: #272727; border-radius: 10px; padding: 10px; display: flex"
        id="cC">
        <div style="margin-right: 10px; width: 100px;">
            <span class="material-symbols-outlined" style="font-size: 100px; user-select: none;">cookie</span>
        </div>
        <div style="width: 290px;">
            <h1 style="margin-top: 0;">mmm... tasty</h1>
            <p style="text-align: center;">
                By browsing this site, you agree to our use of cookies.
            </p>
            <button style="margin:auto; width: 100%;" onclick="setCookie('cC','true',365)">
                Accept and close <span class="material-symbols-outlined"
                    style="vertical-align: top; font-size: 1.2em;  width:1em;">done</span>
            </button>
        </div>
    </div>
    `);
    checkCC();
};
