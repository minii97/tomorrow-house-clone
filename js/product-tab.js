const productTab = document.querySelector('.product-tab')
const productTabBtnList = productTab.querySelectorAll('button')

const TOP_HEADER_MOBILE = 50 + 40 + 40
const TOP_HEADER_DESKTOP = 80 + 50 + 54

let currentActiveTab = productTab.querySelector('.is-active')

function ActiveTab() {
  // 1. li(Btn의 부모요소)에 is-active 클래스 추가
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}

function scrollToTabPanel() {
  const tabId = this.parentNode.getAttribute('id')
  const tabPanel = document.querySelector(`[aria-labelledby="${tabId}"]`)

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

productTabBtnList.forEach((items) => {
  items.addEventListener('click', ActiveTab)
  items.addEventListener('click', scrollToTabPanel)
})

const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommend',
]

const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`[aria-labelledby="${panelId}"]`)
  return tabPanel
})

const productTabPanelPositionMap = {}

function detectTabPanelPosition() {
  productTabPanelList.forEach((items) => {
    const id = items.getAttribute('aria-labelledby')
    const position = window.scrollY + items.getBoundingClientRect().top

    productTabPanelPositionMap[id] = position
  })
}

function updateActiveTabOnScroll() {
  //스크롤 위치에 따라서 active-tab 업데이트
  // 1. 현재 유저가 얼마나 스크롤 했는가?
  // 2. 요소가 문서 시작점으로부터 얼마나 아래에 있는가?
  // -> productTabPanelPositionMap의 value로 저장해두었다.

  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8)

  let newActiveTab

  if (scrolledAmount >= productTabPanelPositionMap['product-recommend']) {
    newActiveTab = productTabBtnList[4] // 추천 버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabBtnList[3] // 배송/환불 버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabBtnList[2] // 문의 버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabBtnList[1] // 리뷰 버튼
  } else {
    newActiveTab = productTabBtnList[0] // 상품 정보 버튼
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active')
      currentActiveTab.classList.remove('is-active')
      currentActiveTab = newActiveTab
    }
  }
}

window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', detectTabPanelPosition)
window.addEventListener('scroll', updateActiveTabOnScroll)
