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


function init() {
  // your code here
  let index = 0;
  
  document.body.addEventListener('keydown', (e) => {
    const key = e.key;
    index = (codes[index] === key) ? ++index : 0
    
    if (index === codes.length) {
      alert ('Well Done!');
      index = 0;
    }
  });
} 

// function init() {
//   let idx = 0
//   document.body.addEventListener("keydown", (e) => {
//     const key = e.key
//     idx = (codes[idx] === key) ? ++idx : 0
    
//     if (idx === codes.length) {
//       window.alert("Hurray!");
//       idx = 0
//     }
    
//   });
// }

