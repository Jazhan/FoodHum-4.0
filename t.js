var names = [];
names[0] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names));

//...
var storedNames = JSON.parse(localStorage.getItem("names"));
