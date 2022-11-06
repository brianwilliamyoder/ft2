

//favThings = favThings.reverse

function printFavorites(event) {
  event.preventDefault();
  let favThings = [];

  const firstThing = document.getElementById("1stThing").value;
  const secondThing = document.getElementById("2ndThing").value;
  const thirdThing = document.getElementById("3rdThing").value;

  favThings.push(firstThing, secondThing, thirdThing);
  let h1 = document.createElement("h1")
  h1.append("These are your favorite things!")
  document.body.append(h1);

  let list = document.createElement("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  li1.append(favThings[0]);
  li2.append(favThings[1]);
  li3.append(favThings[2]);
  list.append(li1, li2, li3);
  
  h1.after(list);
  form.remove();

}

window.addEventListener("load", function() {
  let form = document.getElementById("form");
  form.addEventListener("submit", printFavorites);
}
)