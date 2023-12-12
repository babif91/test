const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container2");

const img1 = container1.querySelector("img");
const img2 = container2.querySelector("img");
const img3 = container3.querySelector("img");

container1.addEventListener("mousemove", onZoom1);
container1.addEventListener("mouseover", onZoom1);
container1.addEventListener("mouseleave", offZoom1);

container2.addEventListener("mousemove", onZoom2);
container2.addEventListener("mouseover", onZoom2);
container2.addEventListener("mouseleave", offZoom2);

container3.addEventListener("mousemove", onZoom3);
container3.addEventListener("mouseover", onZoom3);
container3.addEventListener("mouseleave", offZoom3);

//img 1 function//
function onZoom1(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    img1.style.transformOrigin = `${x}px ${y}px`;
    img1.style.transform = "scale(2.8)";
}
function offZoom1(e) {
    img1.style.transformOrigin = `center center`;
    img1.style.transform = "scale(1)";
}

//img 2 function//
function onZoom2(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    img2.style.transformOrigin = `${x}px ${y}px`;
    img2.style.transform = "scale(2.8)";
}
function offZoom2(e) {
    img2.style.transformOrigin = `center center`;
    img2.style.transform = "scale(1)";
}

//img 3 function//
function onZoom3(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    img3.style.transformOrigin = `${x}px ${y}px`;
    img3.style.transform = "scale(2.8)";
}
function offZoom2(e) {
    img3.style.transformOrigin = `center center`;
    img3.style.transform = "scale(1)";
}