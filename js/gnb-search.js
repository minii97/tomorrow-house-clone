const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  '.search-history-list'
)

const deleteAllBtn = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length > 0) {
    gnbSearchHistory.classList.add('is-active')
    window.addEventListener('click', closeGnbSearchHistory)
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function clearGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  gnbSearchHistoryList.innerHTML = ''
}

deleteAllBtn.addEventListener('click', clearGnbSearchHistory)
