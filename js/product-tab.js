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
