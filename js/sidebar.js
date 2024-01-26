const sidebarMenuBtn = document.querySelector('.gnb .menu-btn')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

function openSidebar() {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

sidebarMenuBtn.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)

// console.log(sidebarMenuBtn, sidebar, sidebarOverlay)
