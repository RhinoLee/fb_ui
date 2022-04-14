import "./index.css";

// Panels
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

// 左側
const leftBlock = document.getElementById("left-block")

function renderLeftItem(name, imgUrl) {
  const leftItem = `
  <div class="flex items-center w-full p-2 mb-1 rounded hover:bg-fb-input cursor-pointer">
    <div class="w-[32px] overflow-hidden rounded-full mr-4">
      <img src="${imgUrl}">
    </div>
    <p class="text-white text-[.9rem]">${name}</p>
  </div>
  `

  return leftItem
}

function renderLeftBlock() {
  const infos = [
    {
      name: "Rhino",
      imgUrl: "https://bruce-fe-fb.web.app/image/avator.png"
    },
    {
      name: "活動",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/activity.svg"
    },
    {
      name: "天氣",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/cloudy.png"
    },
    {
      name: "災害應變中心",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/dynamic.svg"
    },
    {
      name: "新冠病毒資訊中心",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/facemask.svg"
    },
    {
      name: "社團",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/friend.svg"
    },
    {
      name: "企業管理平台",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/job.png"
    },
    {
      name: "Messenger",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/messenger.svg"
    },
    {
      name: "近期廣告動態",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/pay.png"
    },
    {
      name: "朋友名單",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/sale.png"
    },
    {
      name: "最愛",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/star.svg"
    },
    {
      name: "Marketplace",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/store.svg"
    },
    {
      name: "Watch",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg"
    },
  ]

  let htmlStr = ""
  infos.forEach(info => {
    htmlStr += renderLeftItem(info.name, info.imgUrl)
  })
  leftBlock.innerHTML = htmlStr
}

renderLeftBlock()

