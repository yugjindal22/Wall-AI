'use client';

import { useState } from 'react';

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Space Gray');
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    '/Images/heroimg.webp', // Using existing image as placeholder
    '/Images/box-1 -img.webp',
    '/Images/box-2-img.webp', 
    '/Images/box-3-img.webp',
    '/Images/box-4-img.webp',
    '/Images/box-5-img.webp'
  ];

  const colorOptions = [
    { name: 'Space Gray', color: '#4a4a4a', price: 599.00 },
    { name: 'Silver', color: '#c0c0c0', price: 599.00 },
    { name: 'Gold', color: '#d4af37', price: 599.00 }
  ];

  const dummyReviews = [
    {
      id: 1,
      date: 'Apr 1, 2024',
      rating: 5,
      verified: true,
      reviewer: 'WalmartCustomer',
      details: 'Color: Gold',
      review: 'The product ordering and the item itself is fine. OnTrac shipping asked for a signature... I also provided written instructions to place the item behind a corner by our front door. Instead, the driver just left it, on the ground, directly in front of the front door, easily visible from the street. Drivers are busy people... but if they aren\'t reading...',
      helpful: 4,
      notHelpful: 0
    },
    {
      id: 2,
      date: 'Apr 8, 2024',
      rating: 5,
      verified: true,
      reviewer: 'WalmartCustomer',
      details: 'Color: Space Gray',
      review: 'Overall: A very good price for this model, and I\'m really happy in the availability and speed at which I received my order after checkout. The M1 model is highly reviewed by a lot of trusted critics for just about every average user/consumer, even at the time of this writing. It\'s slim, lightweight, fast, has good software and excellent battery...',
      helpful: 9,
      notHelpful: 0
    },
    {
      id: 3,
      date: 'Jul 19, 2024',
      rating: 5,
      verified: true,
      reviewer: 'WalmartCustomer',
      details: 'Color: Space Gray',
      review: 'We are an Apple family (iPhones, iPads, MacBooks). My daughter is leaving for college next month, so she won\'t be able to borrow my wife\'s MacBook for her schoolwork. I was excited to see Walmart become the distributor for the **** M1 MacBook Air. Apple has moved on to focus on their M2 and M3 chip offerings, but the M1 is still a great...',
      helpful: 6,
      notHelpful: 0
    }
  ];

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Electronics</span> → <span>Computers</span> → <span>Laptops</span>
      </div>

      <div className="product-container">
        {/* Left side - Product Images */}
        <div className="product-images-section">
          <div className="thumbnail-images">
            {productImages.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`Product view ${index + 1}`} />
              </div>
            ))}
            <div className="view-all-button">
              <span>+6</span>
              <span>View all</span>
            </div>
          </div>
          
          <div className="main-image">
            <div className="image-actions">
              <button className="share-btn"><i className="fa fa-share"></i></button>
              <button className="favorite-btn"><i className="fa fa-heart"></i></button>
              <button className="zoom-btn"><i className="fa fa-search-plus"></i></button>
            </div>
            <img src={productImages[selectedImage]} alt="MacBook Air" />
            <div className="image-navigation">
              <button className="nav-btn prev" onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}>
                <i className="fa fa-chevron-left"></i>
              </button>
              <button className="nav-btn next" onClick={() => setSelectedImage(Math.min(productImages.length - 1, selectedImage + 1))}>
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Middle - Product Details */}
        <div className="product-details-section">
          <div className="product-badges">
            <span className="badge popular">100+ bought since yesterday</span>
            <span className="badge trending">In 200+ people's carts</span>
          </div>
          
          <div className="product-tags">
            <span className="tag deal">Deal</span>
            <span className="tag top-pick">Top pick</span>
          </div>

          <div className="brand">Apple</div>
          
          <h1 className="product-title">
            Apple MacBook Air 13.3 inch Laptop - Space Gray, M1 Chip, Built for Apple Intelligence, 8GB RAM, 256GB storage
          </h1>

          <div className="rating-section">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className="fa fa-star filled"></i>
              ))}
              <span className="rating-text">(4.7)</span>
            </div>
            <span className="rating-count">6,343 ratings</span>
          </div>

          <div className="color-selection">
            <label>Actual Color: <strong>{selectedColor}</strong></label>
            <div className="color-options">
              {colorOptions.map((option) => (
                <div
                  key={option.name}
                  className={`color-option ${selectedColor === option.name ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(option.name)}
                >
                  <div 
                    className="color-circle" 
                    style={{ backgroundColor: option.color }}
                  ></div>
                  <span className="color-price">${option.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-info">
            <h3>About this item</h3>
            <ul>
              <li><strong>Available In:</strong> Gold, Space Gray, and Silver</li>
              <li><strong>Condition:</strong> New</li>
              <li><strong>Built For Apple Intelligence:</strong> Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data—not even Apple.</li>
              <li><strong>All-Day Battery Life:</strong> Go longer than ever with up to 18 hours of battery life.</li>
              <li><strong>Powerful Performance:</strong> Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.</li>
            </ul>
          </div>

          <div className="specifications">
            <h3>At a glance</h3>
            <div className="spec-grid">
              <div className="spec-item">
                <strong>Solid state drive capacity</strong>
                <span>256 GB</span>
              </div>
              <div className="spec-item">
                <strong>Screen size</strong>
                <span>13.3 in</span>
              </div>
              <div className="spec-item">
                <strong>Processor</strong>
                <span>Apple M1</span>
              </div>
            </div>
          </div>

          {/* Expandable Sections */}
          <div className="expandable-sections">
            <div className="section-item">
              <button className="section-header">
                <span>Product details</span>
                <i className="fa fa-chevron-down"></i>
              </button>
            </div>
            <div className="section-item">
              <button className="section-header">
                <span>Specifications</span>
                <i className="fa fa-chevron-down"></i>
              </button>
            </div>
            <div className="section-item">
              <button className="section-header">
                <span>Warranty</span>
                <i className="fa fa-chevron-down"></i>
              </button>
            </div>
            <div className="section-item expanded">
              <button className="section-header">
                <span>About the brand</span>
                <i className="fa fa-chevron-up"></i>
              </button>
              <div className="section-content">
                <div className="brand-showcase">
                  <img src="/Images/heroimg.webp" alt="Apple MacBook Air" />
                  <div className="brand-text">
                    <h3>Power. It's in the Air.</h3>
                    <p>Incredible performance meets incredible value. MacBook Air with M1 is an outstandingly portable laptop — it's nimble and quick with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all-day battery life, this Air moves at the speed of lightness.</p>
                    <div className="chip-info">
                      <img src="/Images/banner-logo.webp" alt="M1 Chip" />
                      <span>Supercharged by the Apple M1 chip</span>
                    </div>
                    <div className="m1-features">
                      <h4>Small chip. Giant leap.</h4>
                      <p>Designed specifically for Mac, M1 integrates the CPU, GPU, Neural Engine, I/O, and so much more onto a single tiny chip. Packed with an astonishing 16 billion transistors, M1 delivers exceptional performance, custom technologies, and unbelievable power efficiency — a major breakthrough for Mac.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Frequently Bought Together */}
          <div className="frequently-bought">
            <h3>Frequently bought together</h3>
            <div className="bundle-items">
              <div className="bundle-item selected">
                <img src="/Images/heroimg.webp" alt="MacBook" />
                <div className="item-details">
                  <span className="price">Now $599.00</span>
                  <span className="original-price">$649.00</span>
                  <p>Apple MacBook Air 13.3 inch Laptop - Space Gray, M1 Chip, Built for Apple Intelligence, 8GB RAM...</p>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fa fa-star filled"></i>
                    ))}
                    <span>6343</span>
                  </div>
                </div>
                <input type="checkbox" checked readOnly />
              </div>
              
              <span className="plus">+</span>
              
              <div className="bundle-item">
                <img src="/Images/box-1 -img.webp" alt="USB Adapter" />
                <div className="item-details">
                  <span className="price">$19.00</span>
                  <p>Apple USB-C to USB Adapter</p>
                  <div className="rating">
                    {[1, 2, 3, 4].map((star) => (
                      <i key={star} className="fa fa-star filled"></i>
                    ))}
                    <i className="fa fa-star"></i>
                    <span>2</span>
                  </div>
                </div>
                <input type="checkbox" checked readOnly />
              </div>
              
              <span className="plus">+</span>
              
              <div className="bundle-item">
                <span className="deal-badge">Deal</span>
                <img src="/Images/box-2-img.webp" alt="AirPods" />
                <div className="item-details">
                  <span className="price">Now $119.00</span>
                  <span className="original-price">$179.00</span>
                  <p>Apple AirPods 4 with Active Noise Cancellation</p>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fa fa-star filled"></i>
                    ))}
                    <span>2935</span>
                  </div>
                </div>
                <input type="checkbox" checked readOnly />
              </div>
              
              <span className="plus">+</span>
              
              <div className="bundle-item">
                <img src="/Images/box-3-img.webp" alt="Magic Mouse" />
                <div className="item-details">
                  <span className="price">$78.99</span>
                  <p>Apple Magic Mouse Wireless USB-C with Multi-Touch Surface, White</p>
                  <div className="rating">
                    {[1, 2, 3, 4].map((star) => (
                      <i key={star} className="fa fa-star filled"></i>
                    ))}
                    <i className="fa fa-star"></i>
                    <span>6</span>
                  </div>
                </div>
                <input type="checkbox" checked readOnly />
              </div>
            </div>
            
            <div className="bundle-total">
              <span className="total-price">Now $815.99</span>
              <span className="original-total">$925.99</span>
              <button className="add-bundle-btn">Add 4 items to cart</button>
              <p className="delivery-note">Items may be delivered on different dates</p>
            </div>
          </div>

          {/* More Best Sellers */}
          <div className="more-sellers">
            <h3>More Best Sellers from Apple</h3>
            <p>Items that pair well together</p>
            <div className="seller-items">
              <div className="seller-item">
                <span className="deal-badge">Deal</span>
                <img src="/Images/box-4-img.webp" alt="AirPods Pro" />
                <button className="options-btn">Options</button>
                <div className="item-info">
                  <span className="price">Now $149.00</span>
                  <span className="original-price">$239.00</span>
                  <p>Apple AirPods Pro 2, Wireless Earbuds, Active Noise Cancellation, Hearing Aid Feature</p>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fa fa-star filled"></i>
                    ))}
                    <span>25432</span>
                  </div>
                  <span className="walmart-plus">Save with W+</span>
                  <span className="shipping">Shipping, arrives tomorrow</span>
                </div>
              </div>
              
              <div className="seller-item">
                <span className="deal-badge">Deal</span>
                <img src="/Images/box-5-img.webp" alt="Apple Watch" />
                <button className="options-btn">Options</button>
                <div className="item-info">
                  <span className="price">Now $169.00</span>
                  <span className="original-price">$249.00</span>
                  <p>Apple Watch SE (2nd Gen) [GPS 40mm] Smartwatch with Starlight Aluminum Case with Starlight...</p>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fa fa-star filled"></i>
                    ))}
                    <span>6259</span>
                  </div>
                  <span className="walmart-plus">Save with W+</span>
                  <span className="shipping">Shipping, arrives in 3+ days</span>
                </div>
              </div>
              
              <div className="seller-item">
                <span className="deal-badge">Deal</span>
                <img src="/Images/box-6-img.webp" alt="iPad Air" />
                <button className="options-btn">Options</button>
                <div className="item-info">
                  <span className="price">Now $279.00</span>
                  <span className="original-price">$349.00</span>
                  <p>2025 Apple 11-inch iPad A16 Wi-Fi 128GB - Silver</p>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fa fa-star filled"></i>
                    ))}
                    <span>2752</span>
                  </div>
                  <span className="walmart-plus">Save with W+</span>
                  <span className="shipping">Shipping, arrives tomorrow</span>
                </div>
              </div>
              
              <div className="seller-item">
                <span className="deal-badge">Deal</span>
                <img src="/Images/box-7-img.webp" alt="iPad Pro" />
                <button className="options-btn">Options</button>
                <div className="item-info">
                  <span className="price">Now $249.00</span>
                  <span className="original-price">$449.00</span>
                  <p>2022 Apple 10.9-inch iPad Wi-Fi 64GB - Silver (10th Generation)</p>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fa fa-star filled"></i>
                    ))}
                    <span>15845</span>
                  </div>
                  <span className="walmart-plus">Save with W+</span>
                  <span className="shipping">Shipping, arrives tomorrow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="customer-reviews">
            <h3>Customer ratings & reviews</h3>
            
            <div className="reviews-summary">
              <div className="overall-rating">
                <span className="rating-number">4.7</span>
                <span className="rating-text">out of 5</span>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="fa fa-star filled"></i>
                  ))}
                </div>
                <span className="total-ratings">6,343 ratings | 1,898 reviews</span>
                <p className="rating-note">How item rating is calculated</p>
                <button className="view-all-reviews">View all reviews</button>
              </div>
              
              <div className="rating-breakdown">
                <div className="rating-bar">
                  <span>5 stars</span>
                  <div className="bar">
                    <div className="fill" style={{width: '89%'}}></div>
                  </div>
                  <span>89% (5,622)</span>
                </div>
                <div className="rating-bar">
                  <span>4 stars</span>
                  <div className="bar">
                    <div className="fill" style={{width: '5%'}}></div>
                  </div>
                  <span>5% (294)</span>
                </div>
                <div className="rating-bar">
                  <span>3 stars</span>
                  <div className="bar">
                    <div className="fill" style={{width: '1%'}}></div>
                  </div>
                  <span>1% (92)</span>
                </div>
                <div className="rating-bar">
                  <span>2 stars</span>
                  <div className="bar">
                    <div className="fill" style={{width: '1%'}}></div>
                  </div>
                  <span>1% (49)</span>
                </div>
                <div className="rating-bar">
                  <span>1 star</span>
                  <div className="bar">
                    <div className="fill" style={{width: '5%'}}></div>
                  </div>
                  <span>5% (286)</span>
                </div>
              </div>
            </div>

            <div className="review-filters">
              <div className="filter-buttons">
                <button className="filter-btn active">All filters</button>
                <button className="filter-btn">Star rating</button>
                <button className="filter-btn">Verified purchases only</button>
              </div>
              <div className="sort-section">
                <span>Sort by</span>
                <select>
                  <option>Most relevant</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Highest rated</option>
                  <option>Lowest rated</option>
                </select>
              </div>
            </div>

            <div className="review-tags">
              <button className="tag">design (12)</button>
              <button className="tag">kids (34)</button>
              <button className="tag">ease of use (47)</button>
              <button className="tag">light (14)</button>
              <button className="tag">set up (29)</button>
              <button className="tag">speed (17)</button>
              <button className="tag">as a gift (15)</button>
              <button className="tag">quality (68)</button>
              <button className="tag">screen (33)</button>
              <button className="tag">lightness (25)</button>
            </div>

            <div className="reviews-list">
              <p className="showing-text">Showing 1-3 of 1,898 reviews</p>
              
              {dummyReviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <span className="review-date">{review.date}</span>
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className={`fa fa-star ${star <= review.rating ? 'filled' : ''}`}></i>
                      ))}
                    </div>
                    {review.verified && <span className="verified">Verified Purchase</span>}
                  </div>
                  
                  <div className="reviewer-info">
                    <i className="fa fa-user-circle"></i>
                    <span>{review.reviewer}</span>
                  </div>
                  
                  <div className="item-details">
                    <strong>Item details</strong>
                    <span>{review.details}</span>
                  </div>
                  
                  <div className="review-text">
                    <p>{review.review}</p>
                    <button className="read-more">Read more</button>
                  </div>
                  
                  <div className="review-actions">
                    <span className="incentivized">Incentivized Review</span>
                    <div className="helpful-section">
                      <span>Helpful?</span>
                      <button className="helpful-btn">
                        <i className="fa fa-thumbs-up"></i> ({review.helpful})
                      </button>
                      <button className="not-helpful-btn">
                        <i className="fa fa-thumbs-down"></i> ({review.notHelpful})
                      </button>
                      <button className="report-btn">Report</button>
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="view-all-reviews-btn">View all reviews (1,898)</button>
            </div>
          </div>
        </div>

        {/* Right side - Purchase Options */}
        <div className="purchase-section">
          <div className="purchase-sticky">
            <div className="compare-stores">
              <button className="compare-btn">
                <i className="fa fa-balance-scale"></i>
                Compare at 3 Stores
              </button>
            </div>

            <div className="price-section">
              <span className="current-price">Now $599.00</span>
              <span className="original-price">$649.00</span>
              <span className="savings">You save $50.00</span>
              <p className="price-note">Price when purchased online</p>
            </div>

            <div className="offers-section">
              <div className="apple-tv-offer">
                <i className="fa fa-tv"></i>
                <span>4 free offers, including Apple TV+ up to 3 months free</span>
              </div>
            </div>

            <div className="shipping-info">
              <div className="shipping-item">
                <i className="fa fa-truck"></i>
                <span>Free shipping</span>
              </div>
              <div className="shipping-item">
                <i className="fa fa-undo"></i>
                <span>Free 30-day returns</span>
              </div>
            </div>

            <div className="purchase-buttons">
              <button className="buy-now-btn">Buy now</button>
              <button className="add-to-cart-btn">Add to cart</button>
            </div>

            <div className="protection-plan">
              <h4>Add a protection plan</h4>
              <p>(Only one option can be selected at a time)</p>
              
              <div className="plan-options">
                <div className="plan-option">
                  <input type="radio" id="applecare" name="protection" />
                  <label htmlFor="applecare">
                    <div className="plan-header">
                      <img src="/Images/walmart-logo.webp" alt="AppleCare+" />
                      <span>AppleCare+ What's covered</span>
                    </div>
                    <div className="plan-details">
                      <span>3-Year Plan - $159.00</span>
                    </div>
                  </label>
                </div>
                
                <div className="plan-option">
                  <input type="radio" id="allstate" name="protection" />
                  <label htmlFor="allstate">
                    <div className="plan-header">
                      <img src="/Images/walmart-logo.webp" alt="Allstate" />
                      <span>3-Year Accident Protection by Allstate What's covered</span>
                    </div>
                    <div className="plan-details">
                      <span>3-Year Plan - $72.00</span>
                    </div>
                  </label>
                </div>
                
                <div className="plan-option">
                  <input type="radio" id="warranty" name="protection" />
                  <label htmlFor="warranty">
                    <span>4-Year Plan - $86.00</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="delivery-options">
              <h4>How you'll get this item:</h4>
              
              <div className="walmart-plus-option">
                <input type="checkbox" id="walmartplus" />
                <label htmlFor="walmartplus">
                  I want shipping & delivery savings with <span className="walmart-plus-text">Walmart+</span>
                </label>
                <p>You get 30 days free! Choose a plan at checkout.</p>
              </div>

              <div className="delivery-methods">
                <div className="delivery-method selected">
                  <i className="fa fa-truck"></i>
                  <div className="method-info">
                    <strong>Shipping</strong>
                    <span>Arrives tomorrow</span>
                    <span className="order-time">Order within 4 hr 51 min</span>
                    <span className="free-text">Free</span>
                  </div>
                </div>
                
                <div className="delivery-method">
                  <i className="fa fa-store"></i>
                  <div className="method-info">
                    <strong>Pickup</strong>
                    <span>Check nearby</span>
                  </div>
                </div>
                
                <div className="delivery-method disabled">
                  <i className="fa fa-home"></i>
                  <div className="method-info">
                    <strong>Delivery</strong>
                    <span>Not available</span>
                  </div>
                </div>
              </div>

              <div className="location-info">
                <strong>Sacramento, 95829</strong>
                <button className="change-location">Change</button>
                <p>Arrives by Tomorrow, Order within 4 hr 51 min</p>
              </div>
            </div>

            <div className="seller-info">
              <div className="info-item">
                <i className="fa fa-star"></i>
                <span>Sold and shipped by Walmart.com</span>
              </div>
              <div className="info-item">
                <i className="fa fa-undo"></i>
                <span>Free 30-day returns Details</span>
              </div>
              <div className="info-item">
                <i className="fa fa-gift"></i>
                <span>This item is gift eligible Learn more</span>
              </div>
            </div>

            <div className="action-buttons">
              <button className="action-btn">
                <i className="fa fa-heart"></i>
                Add to list
              </button>
              <button className="action-btn">
                <i className="fa fa-gift"></i>
                Add to registry
              </button>
            </div>

            <div className="more-sellers">
              <h4>More seller options (1)</h4>
              <p>Starting from $650.00 Compare all sellers</p>
            </div>

            <div className="walmart-plus-promo">
              <div className="promo-content">
                <span className="walmart-plus-logo">Walmart+</span>
                <h4>Get 50% off an annual Walmart+ membership!</h4>
                <p>Limited time. Terms apply. <a href="#">Claim offer</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
