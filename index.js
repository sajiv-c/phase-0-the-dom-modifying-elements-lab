const main = document.getElementById("main");
main.remove();

let newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "Sajiv is the champion";

document.body.append(newHeader);