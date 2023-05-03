let section = document.querySelector(".our-skills");
let progressspan = document.querySelectorAll(".the-progress .sp");
let nums = document.querySelectorAll(".stats .number");
let staeSection = document.querySelector(".stats")
let started = false;

// console.log(progressspan[0].getAttribute("data-width"))
window.onscroll = function() {
    if (window.scrollY >= section.offsetTop - 250) {
        console.log("Reached section three");
        progressspan.forEach((span) => {
            span.style.width = span.dataset.width;

        })
    }
    if (window.scrollY >= staeSection.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num))
        }
        started = true;
    }
    document.querySelector(".header").classList.toggle('shadow', window.scrollY > 0);
}


function startCount(elem) {
    let goal = elem.dataset.goal;
    let counter = setInterval(() => {
        elem.textContent++;
        if (elem.textContent == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
}