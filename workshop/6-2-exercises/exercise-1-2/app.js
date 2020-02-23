// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

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
  let btnElement = document.getElementById(id);
  const currentColor = btnElement.style.backgroundColor;

  btnElement.style.backgroundColor = currentColor === "gold" ? color : "gold";
};

function fuck(event) {
  const id = event.target.id;
  const btnElement = document.getElementById(id); /// does not read btnElement//
  switch (id) {
    case "btn-1":
      btnElement.style.opacity = btn1.style.opacity === "100" ? "0" : "100";
      console.log("fuck you");
      break;
    case "btn-2":
      btnElement.toggleColor(btn2, "crimson");
      break;
    case "btn-3":
      btnElement.toggleColor(btn3, "lightblue");
      break;
    case "btn-4":
      btnElement.classList.toggle("jitters");
      break;
    default:
  }
}

document.addEventListener("click", fuck);
