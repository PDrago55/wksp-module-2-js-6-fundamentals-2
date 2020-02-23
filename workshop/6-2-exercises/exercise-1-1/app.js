// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");

// array = [];
// array.push(btn1);
// array.push(btn2);
// array.push(btn3);
// array.push(btn4);

//in my head, the numbers correspond to the array index --- main issue regarding the what to place in expression and in code blocks//

function buttonCall(event) {
  const id = event.target.id;
  switch (id) {
    case "btn-1":
      console.log("btn-1 clicked");
      btn1.style.opacity = 0;
      break;
    case "btn-2":
      console.log("btn-2 clicked");
      btn2.style.background = "crimson";
      break;
    case "btn-3":
      console.log("btn-3 clicked");
      btn3.style.background = "lightblue";
      break;
    case "btn-4":
      console.log("btn-4 clicked");
      btn4.classList.add("jitters");
      break;
    default:
      console.log("did this work?");
    // console.log(array);
  }
}
document.addEventListener("click", buttonCall);
