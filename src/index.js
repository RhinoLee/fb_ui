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

// 限時動態
const storyList = document.getElementById("story-list")

function renderStoryItem() {
  for (let i = 0; i < 5; i++) {
    const divBox = document.createElement("div")
    divBox.classList.add("flex-1", "px-[4px]", "min-w-[120px]", "cursor-pointer")
    divBox.innerHTML = `
    <div class="relative overflow-hidden" id=story-${i}>
      <div id="story-mask-${i}" class="hidden absolute w-full h-full top-0 left-0 bg-black/20 z-20"></div>
      <div class="absolute w-[32px] h-[32px] top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-10 text-white">R</div>
      <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20"></div>
      <img id="story-image-${i}" class="w-full h-full duration-500 hover:scale-105" src="https://bruce-fe-fb.web.app/image/story.png">
      <p class="absolute bottom-2 left-2 text-white z-10">Rhino</p>
    </div>
    `

    divBox.addEventListener("mouseover", function () {
      const mask = document.getElementById(`story-mask-${i}`)
      const image = document.getElementById(`story-image-${i}`)
      mask.classList.remove("hidden")
      image.classList.add("scale-105")
    })

    divBox.addEventListener("mouseout", function () {
      const mask = document.getElementById(`story-mask-${i}`)
      const image = document.getElementById(`story-image-${i}`)
      mask.classList.add("hidden")
      image.classList.remove("scale-105")
    })

    storyList.appendChild(divBox)

  }

}

renderStoryItem()

// 包廂輪播

function renderLiveItem() {
  const swiperWrapperLive = document.getElementById("swiper-wrapper-live")

  for (let i = 0; i < 20; i++) {
    const divBox = document.createElement("div")
    divBox.classList.add("swiper-slide")

    const item = `
  <div class="w-[55px]">
    <div class="relative w-[40px] cursor-pointer">
      <div class="overflow-hidden rounded-full">
        <img src="https://bruce-fe-fb.web.app/image/avator.png">
      </div>
      <div class="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 ring-gray-900 ring">
      </div>
    </div>
  </div>
  `

    divBox.innerHTML = item
    swiperWrapperLive.appendChild(divBox)
  }

  var swiper = new Swiper(".fb-live", {
    loop: false,
    slidesPerView: "auto",
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // }
  });
}

renderLiveItem()