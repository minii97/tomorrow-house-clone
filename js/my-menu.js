const myMenu = document.querySelector('.my-menu')
const myMenuBtn = document.querySelector('.my-menu-btn')

function closeMyMenuOnClickingOutside(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }

  myMenu.classList.toggle('is-active')
}

myMenuBtn.addEventListener('click', toggleMyMenu)
