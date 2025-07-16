'use client';

import { useEffect } from 'react';

export default function MainContent() {
  useEffect(() => {
    // Wait for the DOM to be ready and Swiper to be loaded
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && (window as any).Swiper) {
        const Swiper = (window as any).Swiper;
        
        // Initialize Swiper instances
        const swiper = new Swiper(".mySwiper", {
          slidesPerView: 6,
          spaceBetween: 20,
          cssMode: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          mousewheel: true,
          keyboard: true,
        });

        const swiper2 = new Swiper(".mySwiperTwo", {
          slidesPerView: 3,
          spaceBetween: 30,
          cssMode: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          mousewheel: true,
          keyboard: true,
        });

        const swiper3 = new Swiper(".mySwiperThree", {
          slidesPerView: 4,
          spaceBetween: 30,
          cssMode: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          mousewheel: true,
          keyboard: true,
        });

        const swiperMobile = new Swiper(".mySwiperMobile", {
          slidesPerView: 3,
          spaceBetween: 20,
          cssMode: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          mousewheel: true,
          keyboard: true,
        });

        const swiperMobileOneSlide = new Swiper(".mySwiperMobileOneSlide", {
          slidesPerView: 1,
          spaceBetween: 20,
          cssMode: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          mousewheel: true,
          keyboard: true,
        });

        const swiperMobileTwoSlide = new Swiper(".mySwiperMobileTwoSlide", {
          slidesPerView: 2,
          spaceBetween: 20,
          cssMode: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          mousewheel: true,
          keyboard: true,
        });

        // Return cleanup function
        return () => {
          swiper?.destroy?.();
          swiper2?.destroy?.();
          swiper3?.destroy?.();
          swiperMobile?.destroy?.();
          swiperMobileOneSlide?.destroy?.();
          swiperMobileTwoSlide?.destroy?.();
        };
      }
    };

    // Try to initialize immediately, or wait for scripts to load
    const cleanup = initializeSwiper();
    
    if (!cleanup) {
      // If Swiper isn't loaded yet, wait a bit
      const timer = setTimeout(initializeSwiper, 1000);
      return () => clearTimeout(timer);
    }

    return cleanup;
  }, []);

  useEffect(() => {
    // Video hover play functionality
    const videos = document.querySelectorAll('.video-full-view') as NodeListOf<HTMLVideoElement>;

    videos.forEach(video => {
      const playButton = video.parentElement?.querySelector('#pause-button') as HTMLElement;
      const pauseButton = video.parentElement?.querySelector('#pause-button') as HTMLElement;

      video.addEventListener('mouseover', () => {
        video.play();
        if (playButton) playButton.style.opacity = '0';
        if (pauseButton) pauseButton.style.opacity = '1';
      });

      video.addEventListener('mouseleave', () => {
        video.pause();
        if (playButton) playButton.style.opacity = '1';
        if (pauseButton) pauseButton.style.opacity = '0';
      });

      if (playButton) {
        playButton.addEventListener('click', () => {
          if (video.paused) {
            video.play();
            playButton.style.opacity = '0';
            if (pauseButton) pauseButton.style.opacity = '1';
          } else {
            video.pause();
            playButton.style.opacity = '1';
            if (pauseButton) pauseButton.style.opacity = '0';
          }
        });
      }

      if (pauseButton) {
        pauseButton.addEventListener('click', () => {
          if (video.paused) {
            video.play();
            if (playButton) playButton.style.opacity = '0';
            pauseButton.style.opacity = '1';
          } else {
            video.pause();
            if (playButton) playButton.style.opacity = '1';
            pauseButton.style.opacity = '0';
          }
        });
      }
    });
  }, []);

  return (
    <main>
      {/* page 1 walmart + */}
      <div className="banner-space">
        <div className="walmart-banner">
          <div className="banner-content">
            <div className="banner-timer">
              <p id="timer-context">Walmart+ members save on this item</p>
              <p id="timer">13:35:20</p>
            </div>
            <img src="/Images/banner-logo.webp" alt="banner" />
            <div className="banner-offer">
              <p>Try Walmart+ free for 30 days</p>
            </div>
            <div className="banner-sep"></div>
            <div className="claim-buttom">
              <a href="#">Claim offer</a>
            </div>
          </div>
        </div>
      </div>

      {/* page 2 hero banners */}
      <div className="ads-space-outer">
        <div className="ads-space-inner">
          <div className="ads-box-banner" id="box-container1">
            <p>Food</p>
            <a href="#">Shop now</a>
          </div>
          <div className="ads-box-banner" id="box-container2">
            <p>Backyard fun</p>
            <div>
              <a href="#" id="a-tag-con-2">Shop now</a>
            </div>
          </div>
          <div className="ads-box-banner" id="box-container3">
            <p>Franchise store</p>
            <a href="#">Shop now</a>
          </div>
          <div className="ads-box-banner" id="box-container4">
            <p>Electronics</p>
            <a href="/product">Shop MacBook</a>
          </div>
          <div className="ads-box-banner" id="box-container5">
            <p>Summer fun</p>
            <a href="#">Shop now</a>
          </div>
          <div className="ads-box-banner" id="box-container6">
            <p>Beauty & grooming</p>
            <a href="#">Shop now</a>
          </div>
          <div className="ads-box-banner" id="box-container7">
            <p>Summer fashion</p>
            <a href="#">Shop now</a>
          </div>
          <div className="ads-box-banner" id="box-container8">
            <p>Home</p>
            <a href="#">Shop now</a>
          </div>
          <div className="ads-box-banner" id="box-container9">
            <p id="p1">Deals you won't want</p>
            <p id="p2">to miss</p>
            <a href="#" id="a-tag">Shop now</a>
          </div>
          <div className="ads-box-banner" id="box-container10">
            <p>Walmart Business</p>
            <a href="#">Shop now</a>
          </div>
        </div>            
      </div>

      {/* page 3 slider of deals month */}
      <div className="product-month-deals-space">
        <h2>July Deals</h2>
        <a href="#">View all</a>
      </div>
      
      <div className="deal-cart-outer-space">
        <div className="deal-cart-inner-space">
          {/* mobile swiper 2 slides */}
          <div className="swiper mySwiperMobile">
            <div className="swiper-wrapper">
              {/* Sample product slides */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="swiper-slide">
                  <div className="slider-deal">
                    <div className="combine-img-i">
                      <img src={`/products image/prod-${item + 7}.jpeg`} alt={`Product ${item}`} />
                      <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="slider-content">
                      <p className="cont-1">Now $98</p>
                      <p className="cont-2">$128.00</p>
                    </div>
                    <div className="slider-box-descr">
                      <h5>Sample Product Description</h5>
                    </div>
                    <div className="button-option">
                      <a href="#">Add</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>

          {/* desktop slider */}
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              {/* Sample product slides for desktop */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="swiper-slide">
                  <div className="slider-deal">
                    <div className="combine-img-i">
                      <img src={`/products image/prod-${item + 7}.jpeg`} alt={`Product ${item}`} />
                      <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="slider-content">
                      <p className="cont-1">Now $98</p>
                      <p className="cont-2">$128.00</p>
                    </div>
                    <div className="slider-box-descr">
                      <h5>Sample Product Description</h5>
                    </div>
                    <div className="button-option">
                      <a href="#">Add</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div> 
      </div>

      <div className="line-seperater"></div>

      {/* Additional sections */}
      
      {/* page 4 slider & banner */}
      <div className="Sales-product-outer-space">
        <div className="Sales-product-inner-space">
          {/* Product slider area */}
          <div className="product-slide-area">
            <div className="product-slide-area-title">
              <div className="content-title-1">
                <h4>Flash Deals</h4>
                <p>Up to 65% off</p>
              </div>
              <div className="content-title-2">
                <a href="#">Shop all</a>
              </div>
            </div>
            
            <div className="swiper mySwiperTwo">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="swiper-slide">
                    <div className="slider-deal">
                      <div className="combine-img-i">
                        <img src="/Images/box-2-img.webp" alt={`Flash Deal ${item}`} />
                        <i className="fa-regular fa-heart"></i>
                      </div>
                      <div className="slider-content-product-cost">
                        <p className="cont-1">Now $25</p>
                        <p className="cont-2">$45.00</p>
                      </div>
                      <div className="slider-box-descr">
                        <h5>Flash Deal Product {item}</h5>
                      </div>
                      <div className="button-option">
                        <a href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>

          {/* Product banner area */}
          <div className="product-banner-area">
            <div className="product-banner-content">
              <h3>Popular in</h3>
              <h1 id="h1-1">Sports & outdoors</h1>
              <div id="banner-area-button">
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page 5 banner */}
      <div className="page5-space">
        <div className="page5-container">
          <div id="page5-container1">
            <h3>Auto</h3>
            <h1>Care as you go</h1>
            <div className="container1-contex-button">
              <a href="#">Shop now</a>
            </div>
          </div>
          <div id="page5-container2">
            <h4>Rollbacks</h4>
            <h3>Great deals</h3>
            <a href="#">Shop now</a>
          </div>
          <div id="page5-container3">
            <h4>Home Deals</h4>
            <h3>Up to 30% off</h3>
            <a href="#">Shop now</a>
          </div>
          <div id="page5-container4">
            <h3>Beauty for less</h3>
            <a href="#">Shop now</a>
          </div>
          <div id="page5-container5">
            <h3>Personal care</h3>
            <a href="#">Shop now</a>
          </div>
        </div>
      </div>
      
      {/* page 6 based on interest slider */}
      <div className="intrest-slider-space">
        <div className="product-month-deals-space">
          <h2>Based on your recent activity</h2>
          <a href="#">View all</a>
        </div>
        
        <div className="deal-cart-outer-space">
          <div className="deal-cart-inner-space">
            <div className="swiper mySwiperThree">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="swiper-slide">
                    <div className="no-slide-deal">
                      <div className="combine-img-i">
                        <img src="/Images/box-5-img.webp" alt={`Interest Product ${item}`} />
                        <i className="fa-regular fa-heart"></i>
                      </div>
                      <div className="slider-content">
                        <p className="cont-1">$15.99</p>
                        <div className="price-of-item">
                          <p className="cont-2">$20.00</p>
                        </div>
                      </div>
                      <div className="slider-box-descr margin1per">
                        <h5>Recommended Product {item}</h5>
                      </div>
                      <div className="button-add">
                        <a href="#">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="line-seperater"></div>

      {/* Page 7 - Sales and Products */}
      <div className="Sales2-product-outer-space-desktop">
        <div className="Sales-product-inner-space">
          <div className="product-slide-area">
            <div className="product-slide-area-title">
              <div className="content2-title-1">
                <h4>Top sellers in</h4>
                <p>Electronics</p>
              </div>
              <div className="content-title-2">
                <a href="#">Shop all Electronics</a>
              </div>
            </div>
            
            <div className="swiper mySwiperTwo">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="swiper-slide">
                    <div className="slider-deal">
                      <div className="combine-img-i">
                        <img src="/Images/box-6-img.webp" alt={`Electronics ${item}`} />
                        <i className="fa-regular fa-heart"></i>
                      </div>
                      <div className="slider-content">
                        <p className="cont-1">$299</p>
                        <p className="cont-2">$399.00</p>
                      </div>
                      <div className="slider-box-descr">
                        <h5>Electronics Product {item}</h5>
                      </div>
                      <div className="button-option">
                        <a href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>

          <div className="product2-banner-area">
            <div className="product2-banner-content">
              <h3>Fresh groceries &</h3>
              <h1 id="h1-1">home essentials</h1>
              <div id="banner-area-button">
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page 8 */}
      <div className="page8-space-desktop">
        <div className="page8-title">
          <h2>Trending now</h2>
          <p>See what everyone's shopping for</p>
        </div>
        
        <div className="swiper mySwiperThree">
          <div className="swiper-wrapper">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="swiper-slide">
                <div className="box-space-bottom-border">
                  <div className="a-play-mute-cc-container">
                    <video className="video-full-view" muted>
                      <source src="/page8-img/img-1.png" type="video/mp4" />
                    </video>
                    <div className="play-mute-cc-area">
                      <div id="parent-play-button">
                        <i className="fa-solid fa-play" id="pause-button"></i>
                      </div>
                      <i className="fa-solid fa-volume-xmark"></i>
                      <i className="fa-solid fa-closed-captioning" id="caption-icon"></i>
                    </div>
                    <a href="#">Visit the Walmart Shop</a>
                  </div>
                  <div className="second-cont-img-price">
                    <img src="/Images/box-7-img.webp" alt={`Trending ${item}`} />
                    <div className="price-descr">
                      <h4>Trending Item {item}</h4>
                      <p>$29.99</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>

      {/* page 9 */}
      <div className="page9-space-desktop">
        <div className="product-genre-name">
          <h2>Grocery & essentials</h2>
          <a href="#">Shop all</a>
        </div>
        
        <div className="prodect-grocery-image-holders-space">
          <div className="prodect-grocery-image-holders-content">
            <h3>Fresh produce</h3>
            <div className="content-center">
              <div className="prodect-grocery-image-holders">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="blue-space-area">
                    <img src={`/page9-img/img-${item}.webp`} alt={`Grocery ${item}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page 10 */}
      <div className="page10-arived-space">
        <div className="product-month-deals-space" id="page10-header">
          <h2>New arrivals</h2>
          <a href="#">Shop all</a>
        </div>
        
        <div className="deal-cart-outer-space">
          <div className="deal-cart-inner-space">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="swiper-slide">
                    <div className="slider-deal">
                      <div className="combine-img-i">
                        <img src="/Images/box-8-img.webp" alt={`New Arrival ${item}`} />
                        <i className="fa-regular fa-heart"></i>
                      </div>
                      <div className="slider-content">
                        <p className="cont-1">$19.99</p>
                        <p className="cont-2">$25.00</p>
                      </div>
                      <div className="slider-box-descr">
                        <h5>New Arrival Product {item}</h5>
                      </div>
                      <div className="button-option">
                        <a href="#">Add</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="line-seperater"></div>
    </main>
  );
}
