const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  loop: false,
  gutter: 4,
  edgePadding: 16,
  controls: false,
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryAfterTablet = tns({
  container: '.user-gallery.is-tablet .slider-list',
  controls: true,
  controlsContainer: '.user-gallery.is-tablet .user-gallery-controls',
  nextButton: '.user-gallery-controls .next',
  prevButton: '.user-gallery-controls .prev',
  loop: false,
  gutter: 6,
  edgePadding: 81,
  navContainer: '.user-gallery.is-tablet .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})
