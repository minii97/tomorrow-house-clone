const sectionHeaderIconBtn = document.querySelector(
  '.product-shipment .product-section-header.sm-only .chevron-btn'
)

function showFullSection() {
  const section = this.parentNode.parentNode
  section.classList.add('is-open')
}

sectionHeaderIconBtn.addEventListener('click', showFullSection)
