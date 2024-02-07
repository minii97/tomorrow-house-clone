const orderCta = document.querySelector('.order-cta')

const [orderCtaBookmarkBtn, orderCtaBuyBtn] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyBtn.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  const [icon, span] = this.children
  const count = Number(span.innerHTML.replaceAll(',', ''))

  let newCount = count

  if (this.classList.contains('is-active')) {
    newCount = newCount - 1
  } else {
    newCount = newCount + 1
  }

  icon.classList.toggle('ic-bookmark')
  icon.classList.toggle('ic-bookmark-filled')

  span.innerHTML = newCount.toLocaleString()

  this.classList.toggle('is-active')
}

orderCtaBookmarkBtn.addEventListener('click', toggleOrderCtaBookmark)
