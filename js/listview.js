const urlParams = new URLSearchParams(window.location.search);
const seasonURL = urlParams.get("season");
let url;

if (seasonURL) {
  url = `https://exjdxiojjqpysmemownv.supabase.co/rest/v1/wildfood_mushrooms?season=cs.["Summer"]`;
} else {
  // url = "https://exjdxiojjqpysmemownv.supabase.co/rest/v1/wildfood_mushrooms";
  url = `https://exjdxiojjqpysmemownv.supabase.co/rest/v1/wildfood_mushrooms?season=cs.["Summer"]`;
}

fetch(url, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4amR4aW9qanFweXNtZW1vd252Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NTQ1ODUsImV4cCI6MjAyMzMzMDU4NX0.WQS4qbT85SblGCNw_3RYRrYkS1sJyqQsQTieV30-wvM",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(mushrooms) {
  console.log(mushrooms);
  mushrooms.forEach(listMushrooms);
}

function listMushrooms(mushroom) {
  // document.querySelector(
  //   ".discover_menu a"
  // ).href = `discover.html?season=${listMushrooms.season}`;

  // document.querySelector(
  //   ".discover_menu a"
  // ).href = `discover.html?season=cs.["${season}"]`;

  const cardTemplate = document.querySelector(".card_template").content;
  const tempClone = cardTemplate.cloneNode(true);

  tempClone.querySelector("h1").textContent = mushroom.name;
  tempClone.querySelector("h2").textContent = mushroom.intro_text;
  tempClone.querySelector("img").src = mushroom.img_src;

  const listContainer = document.querySelector(".grid_container");
  listContainer.appendChild(tempClone);
}

// set if else parameters for discover hero image
// document.querySelector("#discover_hero").style.backgroundImage = "url('../svg/season_winter.svg')";
document.querySelector("#discover_hero h1.season").textContent = "Fall";
