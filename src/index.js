import "./index.css";

const headerBtns = ["plus", "msg", "notification", "more"]

function closeAllPanels() {
  const panels = [...document.querySelectorAll(".popover-panel")]
  panels.forEach(panel => {
    panel.classList.add("hidden")
  })
}

window.addEventListener("click", function () {
  closeAllPanels()
})

headerBtns.forEach(idName => {
  const btn = document.getElementById(`${idName}-btn`);
  btn.addEventListener("click", function (e) {
    e.stopPropagation()
    closeAllPanels()
    document.getElementById(`${idName}-panel`).classList.remove("hidden")
  })
})