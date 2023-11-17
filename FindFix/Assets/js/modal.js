function exitModal() {
  var modal = document.getElementById("modal");
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
}

function modalClick() {
  var modal = document.getElementById("modal");
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
}
