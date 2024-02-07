const drawerMenuBtnList = document.querySelectorAll('.drawer-menu-btn')

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

drawerMenuBtnList.forEach(function (item) {
  item.addEventListener('click', toggleDrawerMenu)
})
