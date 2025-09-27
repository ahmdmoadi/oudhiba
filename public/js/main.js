/**@type {HTMLInputElement} */
const nt = document.querySelector("#nt");
/**@type {HTMLLabelElement} */
const ntl = document.querySelector("#ntl");
/**@type {NodeListOf<SVGLineElement>} */
let lines = document.querySelectorAll("nav label line");

const DURATION = 250;

nt.addEventListener("change", e=>{
    if(e.target.checked) {
        animateLine(lines[0],DURATION,{
            x1: 10,
            y1: 33,
            x2: 90,
            y2: 33
        });
        animateLine(lines[1],DURATION,{
            x1: 10,
            y1: 66,
            x2: 90,
            y2: 66
        });
    } else {
        animateLine(lines[0],DURATION,{
            x1: 10,
            y1: 10,
            x2: 90,
            y2: 90
        });
        animateLine(lines[1],DURATION,{
            x1: 10,
            y1: 90,
            x2: 90,
            y2: 10
        });
    }
});

// ntl.addEventListener("mouseover", e=>{
//     lines[0].setAttribute("stroke-width", "7");
//     lines[1].setAttribute("stroke-width", "7");
// });

// ntl.addEventListener("mouseover", e=>{
//     lines[0].setAttribute("stroke-width", "5");
//     lines[1].setAttribute("stroke-width", "5");
// });

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
