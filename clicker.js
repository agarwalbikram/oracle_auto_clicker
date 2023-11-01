// Open the home page in a new tab
win1 = window.open("https://cloud.oracle.com/");

// At every 30 seconds, reload the home page and click "Create"
timer1 = setInterval(() => {
    win1.location.reload();
    console.log("Refreshed");
    var v = document.querySelector(".oui-button-primary");
    if (v && v.textContent == "Create") {
        v.click();
        console.log("!!! clicked");
    } else
        console.log("!!! no button");
}, 30000)
