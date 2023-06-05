// This fun won't work without the window.onload function
window.onload = function() {
  const firstH1onPage = document.querySelector("h1");
  firstH1onPage.remove();
  
  let body = document.querySelector("body");
  const pElement = document.createElement("p");
  pElement.append("Some more text, more text, this practice has been grueling");
  body.append(pElement);

  const headerElement = document.createElement("h2");    //create an element
  headerElement.append("first header"); //adding text to element
  body.append(headerElement); //adding it to the DOM to make it visable
  
const liElement = document.createElement("li");
liElement.append ("list item");
body.append(liElement);

const liElement1 = document.createElement("li");
liElement1.append ("list item");
body.append(liElement1);

const liElement2 = document.createElement("li");
liElement2.append ("list item");
body.append(liElement2);

};