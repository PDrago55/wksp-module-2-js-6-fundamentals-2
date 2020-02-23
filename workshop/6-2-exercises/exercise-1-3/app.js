// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");

for (let id = 1; id < 5; id++) {
  const initButton = document.getElementById(`btn-${id}`);
  initButton.style.opacity = "100";
  initButton.style.backgroundColor = "gold";
}

const toggleColor = (id, color) => {
  const btnElement = document.getElementById(id);
  const currentColor = btnElement.style.backgroundColor;

  btnElement.style.backgroundColor = currentColor === "gold" ? color : "gold";
};

function fuck(event) {
  const id = event.target.id;
  const btnElement = document.getElementById(id); // same issue here //
  switch (id) {
    case "btn-1":
      btn1.style.opacity = btn1.style.opacity === "100" ? "0" : "100";
      console.log("fuck you");
      break;
    case "btn-2":
      toggleColor(btn2, "crimson");
      break;
    case "btn-3":
      toggleColor(btn3, "lightblue");
      break;
    case "btn-4":
      btn4.classList.toggle("jitters");
      break;
    default:
  }
}
document.addEventListener("click", fuck);
