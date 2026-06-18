// var paras = document.getElementsByTagName("p");

// console.log(paras);


// var container = document.getElementById("container");

// var paras = container.getElementsByTagName("p");

// console.log(paras);

// console.log(document.childNodes[1].childNodes[1].childNodes);
// console.log(document.children[0].children[1].children);



// var paras = document.getElementsByTagName("p");

// console.log(paras[1].nodeType);


// var container = document.getElementById("container");

// // console.log(container.lastElementChild);
// // console.log(container.firstElementChild);
// // console.log(container.lastChild);

// console.log(container.children[1].nodeValue);

// var liElements = document.getElementsByTagName("li");

// var howManyLi = liElements.length;

// for(var i = 0; i < howManyLi; i++){
//     if(liElements[i].innerHTML === ""){
//         liElements[i].innerHTML = "Coming Soon!"
//     }
// }

var container = document.getElementById("container");
var attr = container.setAttribute("class" , "box2")

console.log(container.hasAttribute("class"));
console.log(container.getAttribute("class"));
