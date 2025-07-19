// Simple search input interaction
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    alert(`You searched for: ${searchInput.value}`);
    searchInput.value = "";
  }
});
