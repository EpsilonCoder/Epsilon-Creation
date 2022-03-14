function getIP(json) {

    var ipad = json.ip;
    document.getElementById("nmap").innerHTML = ipad;
    document.getElementById("startnmap").innerHTML = ipad;
    link = "https://ipapi.co/" + ipad + "/json/"
    $.getJSON(link, function (data) {
        function androidV(ua) {
            ua = (ua || navigator.userAgent).toLowerCase();
            var match = ua.match(/android\s([0-9\.]*)/i);
            return match ? match[1] : undefined;
        }; document.getElementById("table").innerHTML = '<tr><th>About</th><th>EpsilonInformation</th></tr><tr><td>Android Version</td><td>' + androidV() + '</td><tr><td>IP Adress</td><td>' + data.ip + ' (It may vary depending on your network...)</td></tr><tr><td>Country</td><td>' + data.country_name + '</td></tr><tr><td>Region</td><td>' + data.region + '</td></tr><tr><td>City</td><td>' + data.city + ' (It may be not exact because of ISP Provider Server location...)</td></tr><tr><td>Country Capital</td><td>' + data.country_capital + '</td></tr><tr><td>Postal Code</td><td>' + data.postal + '</td></tr><tr><td>Latitude</td><td>' + data.latitude + '</td></tr><tr><td>Longitude</td><td>' + data.longitude + '</td></tr><tr><td>TimeZone</td><td>' + data.timezone + '</td></tr><tr><td>Phone Code</td><td>' + data.country_calling_code + '</td></tr><tr><td>Currency</td><td>' + data.currency_name + '</td></tr><tr><td>ISP</td><td>' + data.org + '</td></tr><br><br><font style="font-size:20px;">Note :- This information is yours not any random....This is done using IP Address tracking API...';
    });
}

globalThis.time = 0;

window.addEventListener('click', function () {

    var audio = document.getElementById("myAudio");
    audio.play()
});
function timing() {
    if (time == 2) {
        document.getElementById('line2').style.display = 'block';
    }
    else if (time == 3) {

        document.getElementById('code2').style.display = 'block';
        document.getElementById('progress').style.display = 'flex';
    }
    else if (time == 5) {
        document.getElementById('main').style.display = 'none';
        document.getElementById('animation').style.display = 'block';
    }
    else if (time == 8) {
        Animation()
    }
    else if (time == 12) {
        document.getElementById('animation').style.display = 'none';
        var audio = document.getElementById("myAudio");
        audio.muted = true;
        document.getElementById("myAudio").autoplay = false;
        document.body.style.background = "#000";
        document.getElementById('table').style.display = 'block';
    }
    else {

    }
    time++;
}
setInterval(timing, 1000);
function Animation() {
    hacker = document.getElementById('animation');
    const s = window.screen;
    const w = (hacker.width = s.width);
    const h = (hacker.height = (s.height - 150));
    const ctx = hacker.getContext("2d");
    const p = Array(Math.floor(w / 10) + 1).fill(0);
    const random = (items) => items[Math.floor(Math.random() * items.length)];
    const hex = "0123456789ABCDEFG".split("");

    setInterval(() => {
        ctx.fillStyle = "rgba(0, 0, 0, .01)";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "lime";
        p.map((v, i) => {
            ctx.fillText(random(hex), i * 10, v);
            p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
        });

    }, 1000 / 30);
}
i = 0;
var txt = 'netcat hacking.cpp';
speed = 50;
window.onload = function typeWriter() {
    if (i < txt.length) {
        document.getElementById("line1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        document.getElementById('code').style.display = 'block';
        document.getElementsByClassName('progress')[0].style.display = 'flex';
    }
};

