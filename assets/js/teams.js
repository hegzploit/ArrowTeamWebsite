var tabButtons = document.getElementsByClassName("tab-button");
var tabPages = document.getElementsByClassName("tab-page");

function changeTabsUrl(name) {
    window.location.href = "?t=" + name;
}

function changeTabs(name) {
    var i;

    for (i = 0; i < tabPages.length; i++) {
        tabPages[i].style.display = "none";
    }

    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" tab-button-active", "");
    }

    document.getElementById(name).style.display = "block";
    localStorage.setItem('team-tab-page', name);

    document.getElementsByName(name + "-button")[0].className += " tab-button-active";
}

// Teams
var teams = ['team-eco', 'team-rov', 'team-itf', 'team-ever', 'team-media', 'team-fund'];

var result = function () {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == "t") {
            return decodeURIComponent(pair[1]);
        }
    }
}();


window.onload = function () {
    if (result) {
        if (teams.includes(result))
            changeTabs(result);
    } else {
        changeTabs(localStorage.getItem("team-tab-page") || "team-eco");
    }
}