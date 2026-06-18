console.log("JavaScript Connected!");


var container = document.getElementById("container");

// console.log(container.hasAttribute("id"));
// console.log(container.hasAttribute("class"));
// console.log(container.getAttribute("id"));
// console.log(container.getAttribute("class"));
// container.setAttribute("class" , "box");

// var list = container.attributes

// console.log(list[0]);

// var para = document.createElement("p");
// var text = document.createTextNode("Creating Paragraph Node.");

// para.appendChild(text);
// container.appendChild(para)

// var heading = container.children[0]

// container.removeChild(heading)

var para = document.createElement("p")
para.innerHTML = "This is created using<i> javaScript</i>!"

container.appendChild(para)






console.log(container);
