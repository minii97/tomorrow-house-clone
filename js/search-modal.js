const searchModal = document.querySelector('.search-modal')
const searchOverlay = document.querySelector('.overlay')
const searchBtn = document.querySelector('.gnb-icon-btn.search-btn')
const closeSearchModalBtn = searchModal.querySelector('.button-ghost')

function openSearchModal() {
  searchModal.classList.add('is-active')
  searchOverlay.classList.add('is-active')
}

searchBtn.addEventListener('click', openSearchModal)

function closeSearchModal() {
  searchModal.classList.remove('is-active')
  searchOverlay.classList.remove('is-active')
}

closeSearchModalBtn.addEventListener('click', closeSearchModal)
