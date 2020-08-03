class Slider {
constructor(dataBannerAttribute) {
  this.banners = document.querySelectorAll(dataBannerAttribute);
  this.bannersQuantity = this.banners.length;
  this.currentBanner = 0;
  this.changeBannersTime = 3000;
  this.interval = null;
}

init() {
this.closeAllBanners();
this.showCurrentBanner();
this.addEventListeners();
this.interval = setInterval(this.changeBannerByTime, this.changeBannersTime);
}

closeAllBanners() {
  this.banners.forEach(banner => {
    banner.style.display = "none";
  })
}

showCurrentBanner() {
  this.banners[this.currentBanner].style.display = "block";
}

addEventListeners() {
  this.banners.forEach(banner => {
    const buttons = banner.querySelector('.stages').children;
    
    // add event listener for buttons to change slides onclick
    Array.from(buttons).forEach((button, id) => {
      if (!button.classList.contains('stages__active')) {
        button.addEventListener('click', this.changeBanner.bind(this,id))
      }
    })

    // add event listener for banners to stop auto slides change when mouseenter and resume when mouseleave

    banner.addEventListener('mouseenter', () => {
      clearInterval(this.interval)
    });
    banner.addEventListener('mouseleave', () => {
      this.interval = setInterval(this.changeBannerByTime, this.changeBannersTime)
    });
  });
}

changeBanner(id) {
  this.currentBanner = id;
  this.closeAllBanners();
  this.showCurrentBanner();
}

changeBannerByTime = () => {
  this.currentBanner++;
  if (this.currentBanner >= this.bannersQuantity) {
    this.currentBanner = 0;
  }
  this.closeAllBanners();
  this.showCurrentBanner();
}
}

const slider = new Slider('[data-banner]');
slider.init()
