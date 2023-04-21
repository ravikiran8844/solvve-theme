  /*----------------------------------------------
    PRODUCT MEDIA SLIDER
  ----------------------------------------------*/
  function initMediaSlider() {
    var sliderElement = document.querySelector('.product__media-list');
    var sliderElementCells = sliderElement ? sliderElement.querySelectorAll('.product__media-item') : [];
    
    if(!sliderElement) { return; }
   
    // For some reason, Flickity set a zero height at start, 
    // so I am pre-setting the height of first item
    var initialIndex = 0;
    var firstSlide = sliderElementCells[initialIndex];
    
    firstSlide.classList.add('is-selected');            
    
    var initFlickty = new Flickity(sliderElement, {
      accessibility: false,
      prevNextButtons: false,
      pageDots: false,
      cellSelector: '.product__media-item',
      initialIndex: initialIndex
    });
  }
  
  initMediaSlider();