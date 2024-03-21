const body = document.querySelector("body");

modeChange.addEventListener("click", function () {
  body.dataset.bsTheme === "dark"
    ? (body.dataset.bsTheme = "light")
    : (body.dataset.bsTheme = "dark");
});
