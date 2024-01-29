const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  '.search-history-list'
)

const deleteAllBtn = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

const deleteBtnList = gnbSearchHistoryList.querySelectorAll('button')

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length > 0) {
    gnbSearchHistory.classList.add('is-active')
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function clearGnbSearchHistory() {
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

deleteAllBtn.addEventListener('click', clearGnbSearchHistory)

function deleteGnbSearchHistoryItem(e) {
  e.stopPropagation()
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)

  if (gnbSearchHistoryList.children.length < 1) {
    closeGnbSearchHistory()
  }
}

deleteBtnList.forEach((items) => {
  items.addEventListener('click', deleteGnbSearchHistoryItem)
})
