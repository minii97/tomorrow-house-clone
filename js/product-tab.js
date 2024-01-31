const productTab = document.querySelector('.product-tab')
const productTabBtnList = productTab.querySelectorAll('button')

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

productTabBtnList.forEach((items) => {
  items.addEventListener('click', ActiveTab)
})
