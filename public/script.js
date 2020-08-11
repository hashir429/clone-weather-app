//welcome to js
//form submition
const h1 = document.querySelector(".h1");
const p = document.querySelector("p");
const form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#search").value;
    h1.textContent = `Loading...`;
    p.textContent = "";
    fetch(`/current?access_key=5d65501d5a614d46a203bdeded323cde&query=${input}`).then(response => {
        response.json().then(data => {
            if (data.error) {
                h1.textContent = "Enter Correct Location";
            } else {
                h1.textContent = `Name: ${data.request.query} || temperature: ${data.current.temperature} degree || Cloud: ${data.current.cloudcover}%`;
                p.textContent = `${data.location.localtime}`;
                if (data.current.is_day === "yes") {
                    document.querySelector("body").style.cssText = 'background-image: url("../img/day.jpg"); background-size: cover';
                } else {
                    document.querySelector("body").style.cssText = 'background-image: url("../img/night.jpg"); color: white; background-size: cover'
                }
            }
        })
    })
})
