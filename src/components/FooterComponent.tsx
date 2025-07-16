'use client';

export default function FooterComponent() {
  return (
    <footer>
      <div className="footer-space-area">
        <div className="feedback-context-area">
          <h4>Give feedback</h4>
          <div className="feedback-button">
            <a href="#">Give feedback</a>
          </div>
        </div>
        <div className="info-space-area">
          <div className="info-line-1">
            <p>All Departments</p>
            <p>Store Directory</p>
            <p>Careers</p>
            <p>Our Company</p>
            <p>Sell on Walmart.com</p>
            <p>Help</p>
            <p>Product Recalls</p>
            <p>Accessibility</p>
            <p>Tax Exempt Program</p>
          </div>
          <div className="info-line-2">
            <p>Get to Know Us</p>
            <p>Press Room</p>
            <p>Sustainability & ESG</p>
            <p>Walmart Foundation</p>
            <p>Affiliate Program</p>
            <p>Request My Personal Information</p>
            <p>California Supply Chain Act</p>
            <p>Your Privacy Choices</p>
            <p id="img-para-side-by-side">
              <img src="/footer-icon/icon-1.webp" alt="icon" />
              Privacy & Security
            </p>
          </div>
          <div className="info-line-3">
            <p>Customer Service</p>
            <p>Contact Us</p>
            <p>Store Feedback</p>
            <p>Walmart Business</p>
            <p>Return Policy</p>
            <p>Recall & Product Safety Alerts</p>
            <p>Terms of Use</p>
            <p>Notice at Collection</p>
          </div>
          <div className="info-line-4">
            <p>Shop & Save</p>
            <p>Walmart Credit Card</p>
            <p>Walmart+</p>
            <p>Walmart Cash</p>
            <p>Gift Cards</p>
            <p>Weekly Ad</p>
            <p>Coupons</p>
          </div>
        </div>
        <div className="copy-right">
          <i className="fa-regular fa-copyright"></i>
          <p>2024 Walmart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
