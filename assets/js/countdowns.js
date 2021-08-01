---
    layout: null
---
    let counters = JSON.parse(decodeURIComponent('{{ site.data.countdowns | jsonify }}'));

let countDownDates = [];

// Fetch dates
Object.keys(counters).forEach(index => {
    let name = counters[index].name;
    let due = counters[index].due;
    let end = counters[index].end;


    countDownDates[name] = new Date(due).getTime();
});

function engine() {
    Object.keys(counters).forEach(index => {
        let now = new Date().getTime();
        let distance = new Date(counters[index].due).getTime() - now;
        let end = new Date(counters[index].end).getTime() - now || null;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(counters[index].name).innerText = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        if (distance < 0) {
            if (end < 0) {
                document.getElementById(counters[index].name).innerText = "Ended.";
            } else {
                document.getElementById(counters[index].name).innerText = "Started.";
            }
        }
    });
}

// Init
engine();

// Refresh every second
setInterval(engine, 1000);