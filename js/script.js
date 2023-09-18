let allHeader = document.getElementById('dinamyc-header');
let pos = 0;
let style = window.getComputedStyle(allHeader, null);
let left = parseInt(style.left);

addEventListener("resize", (event) => {
  left = 0;
  pos = 0;
  allHeader.style.left = left + "vw";
});


function prev() {

  if (pos > 0) {
    pos -= 1;
    left = (left + 100);
  } else {
    left = -300;
    pos = 3;
  }

  allHeader.style.left = left + "vw";
  console.log(pos);
  console.log(left);
}

function next() {

  if (pos < 3) {
    pos += 1;
    left = (left - 100);
  } else {
    left = 0;
    pos = 0;
  }
  allHeader.style.left = left + "vw";
  console.log(pos);
  console.log(left);


}
