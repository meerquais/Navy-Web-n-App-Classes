var zip = document.getElementById("zip");
var city = document.getElementById("city");

function fillCity() {
  if (zip.value === "54000") {
    city.value = "Karachi";
  } else if (zip.value === "44000") {
    city.value = "Lahore";
  } else if (zip.value === "74000") {
    city.value = "Islamabad";
  } else {
    city.value = "Not Found!";
  }
}

var para = document.getElementById("slowLoris");

// console.log(para.innerHTML);


function expandLoris() {
  para.innerHTML = `Slow lorises are a group of several species of strepsirrhine primates which make up the genus
Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration
patterns that are species-dependent. The hands and feet of slow lorises have several adaptations
that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow
lorises have a toxic bite, a rare trait among mammals.. <a href='JavaScript:void(0)' onclick='showless()'>Show Less...</a>`;
}

function showless(){
    para.innerHTML = `Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.
<a href="javascript:void(0);" onClick="expandLoris();"><em>Click for more.</em></a>`
}


// var image = document.getElementById("image");

// function makeInvisible(){
//     document.getElementById("ugly").className = "hidden"
// }
// function showImg(){
//     document.getElementById("ugly").className = ""

// }

// document.getElement


console.log(document.childNodes[1].childNodes[2]);
