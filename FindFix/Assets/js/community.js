var dataArr = [
  {
    judul: "Broken Cars",
    member: "1.321 Members",
    lokasi: "Tomsk",
  },
  {
    judul: "Unwanted Heaters",
    member: "1.318 Members",
    lokasi: "Vladivostok",
  },
  {
    judul: "Magic Stove",
    member: "1.234 Members",
    lokasi: "Saint Petersburg",
  },
  {
    judul: "Flaming Chimney",
    member: "1.221 Members",
    lokasi: "Moscow",
  },
  {
    judul: "RoofyLeaks",
    member: "1.220 Members",
    lokasi: "Moscow",
  },
  {
    judul: "Sunken Ships",
    member: "1.118 Members",
    lokasi: "Saint Petersburg",
  },
  {
    judul: "The Toilet Sinks",
    member: "1.114 Members",
    lokasi: "Murmansk",
  },
  {
    judul: "Evil Toilets",
    member: "1.110 Members",
    lokasi: "Tomsk",
  },
  {
    judul: "Five Furnitures",
    member: "1.005 Members",
    lokasi: "Vladivostok",
  },
  {
    judul: "Lo Siento",
    member: "950 Members",
    lokasi: "Tomsk",
  },
  {
    judul: "Wilson Lo Siento",
    member: "875 Members",
    lokasi: "Moscow",
  },
  {
    judul: "Summa Fixing",
    member: "800 Members",
    lokasi: "Moscow",
  },
  {
    judul: "Home Repairmans",
    member: "1.234 Members",
    lokasi: "Moscow",
  },
];

var main = document.getElementById("mainGrid");
dataArr.forEach((data) => {
  var cardWrap = document.createElement("div");
  cardWrap.classList.add("card-wrap");

  var cardFill = document.createElement("div");
  cardFill.classList.add("card-fill");

  var imgWrap = document.createElement("div");
  imgWrap.classList.add("img-wrap");

  var img = document.createElement("img");
  img.src = "assets/Akatsuki.jpeg";

  var circle = document.createElement("div");
  circle.classList.add("card-circle");

  imgWrap.appendChild(img);
  imgWrap.appendChild(circle);

  var cardText = document.createElement("div");
  cardText.classList.add("card-text");

  var title = document.createElement("h3");
  title.innerHTML = data.judul;
  var members = document.createElement("p");
  members.innerHTML = data.member;
  var lokasi = document.createElement("p");
  lokasi.innerHTML = data.lokasi;

  cardText.appendChild(title);
  cardText.appendChild(members);
  cardText.appendChild(lokasi);

  cardFill.appendChild(imgWrap);
  cardFill.appendChild(cardText);

  cardWrap.appendChild(cardFill);

  var btnWrap = document.createElement("div");
  btnWrap.classList.add("ikut-btn-wrap");
  var btn = document.createElement("button");
  btn.classList.add("ikut-btn");
  btn.innerHTML = "Ikut";
  btnWrap.appendChild(btn);

  cardWrap.appendChild(btnWrap);
  main.appendChild(cardWrap);
});
