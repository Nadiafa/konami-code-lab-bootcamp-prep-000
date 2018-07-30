const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;
function init() {
  // your code here
  let index = 0;
  const key = e.which;
  
  if (key === codes[index]){
    index++;
    if (index === codes.length) {
      alert ('Well Done!');
      index = 0;
    }
  } else {
    index = 0;
  }
}


function init() {
  let idx = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key
    
    idx = (codes[idx] === key) ? ++idx : 0
    
    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }
    
  });
}

