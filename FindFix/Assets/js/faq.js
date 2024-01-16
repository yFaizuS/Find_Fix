function changeColor(id, imgid) {
  let btn_cls = document.getElementsByClassName("btn-faq");

  let btn = document.getElementById(id);
  var image = document.getElementById(imgid);

  btn.style.backgroundColor = "#445D8A";
  btn.style.color = "white";
  if (image.getAttribute("src") == "assets/arrow_down.svg") {
    image.setAttribute("src", "assets/plus.svg");
  } else {
    image.setAttribute("src", "assets/arrow_down.svg");
  }

  let wrap = document.getElementById("accordionParent");
  let img = wrap.getElementsByTagName("img");

  for (let i = 0; i < img.length; i++) {
    if (
      img[i].getAttribute("src") == "assets/arrow_down.svg" &&
      img[i].getAttribute("id") != imgid
    ) {
      img[i].setAttribute("src", "assets/plus.svg");
    }
  }

  for (let i = 0; i < btn_cls.length; i++) {
    let att = btn_cls[i].getAttribute("aria-expanded");
    if (att == "true") {
      btn_cls[i].style.backgroundColor = "#dee3ee";
      btn_cls[i].style.color = "black";
    }
  }
}
