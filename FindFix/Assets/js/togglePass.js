function togglePass() {
  var x = document.getElementById("password");
  if (x.type == "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function changeVis() {
  var image = document.getElementById("visIcon");

  if (image.getAttribute("src") == "assets/vis2.png") {
    image.setAttribute("src", "assets/nvis.png");
  } else {
    image.setAttribute("src", "assets/vis2.png");
  }
}

function changeVis2() {
  var image = document.getElementById("visIcon2");

  if (image.getAttribute("src") == "assets/vis2.png") {
    image.setAttribute("src", "assets/nvis.png");
  } else {
    image.setAttribute("src", "assets/vis2.png");
  }
}

function toggleConf() {
  var y = document.getElementById("password-confirmation");
  if (y.type == "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}
