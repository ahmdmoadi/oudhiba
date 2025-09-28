/**@type {HTMLInputElement} */
const nt = document.querySelector("#nt");
/**@type {HTMLLabelElement} */
const ntl = document.querySelector("#ntl");
/**@type {NodeListOf<SVGLineElement>} */
let lines = document.querySelectorAll("nav label line");

const DURATION = 200;

window.onload = changentl;

nt.addEventListener("change", changentl);

let c = 0;

const l1 = {
    close: {
        x1: 20,
        y1: 20,
        x2: 80,
        y2: 80
    },
    menu: {
        x1: 10,
        y1: 33,
        x2: 90,
        y2: 33
    }
}, l2 = {
    close: {
        x1: 20,
        y1: 80,
        x2: 80,
        y2: 20
    },
    menu: {
        x1: 10,
        y1: 66,
        x2: 90,
        y2: 66
    }
}

function changentl(e) {
    if(nt.checked) {
        animateLine(lines[0],DURATION,l1.close);
        animateLine(lines[1],DURATION,l2.close);
        document.querySelector("nav").classList.add("show");
    } else {
        document.querySelector("nav").classList.remove("show");
        animateLine(lines[0],DURATION,l1.menu);
        animateLine(lines[1],DURATION,l2.menu);
    }
}

function animateLine(line, duration, toCoords) {
  const from = {
    x1: parseFloat(line.getAttribute("x1")),
    y1: parseFloat(line.getAttribute("y1")),
    x2: parseFloat(line.getAttribute("x2")),
    y2: parseFloat(line.getAttribute("y2")),
  };

  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);

    // simple linear interpolation
    line.setAttribute("x1", from.x1 + (toCoords.x1 - from.x1) * progress);
    line.setAttribute("y1", from.y1 + (toCoords.y1 - from.y1) * progress);
    line.setAttribute("x2", from.x2 + (toCoords.x2 - from.x2) * progress);
    line.setAttribute("y2", from.y2 + (toCoords.y2 - from.y2) * progress);

    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
