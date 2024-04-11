const myDiv = document.getElementById("myDiv");
myDiv.addEventListener("mouseover", showTooltip);
myDiv.addEventListener("mouseout", hideTooltip);

window.onload = function () {
  hideTooltip();
};

function hideTooltip() {
  const tooltip = document.querySelector("#tooltip");
  tooltip.style.display = "none";
}
function showTooltip() {
  const tooltip = document.querySelector("#tooltip");
  tooltip.style.display = "block";
}
