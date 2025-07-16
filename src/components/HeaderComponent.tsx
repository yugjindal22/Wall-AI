'use client';

export default function HeaderComponent() {
  return (
    <header className="header"> 
      {/* NavBar */}
      <div className="navbar">
        {/* image code */}
        <div className="outer-img-box">
          {/* for mobile menu */}
          <i className="bi bi-list" id="menu-for-mobile"></i>
          <a href="https://www.walmart.com/">
            <img src="/Images/walmart-logo.webp" alt="Walmart Logo" className="nav-logo" />
          </a>
        </div>
        
        {/* select code */}
        <div className="nav-select">
          <img src="/Images/nav-select-item.webp" alt="image" className="sel-item-img" />
          <div className="nav-select-content">
            <p id="select-p1">How do you want your items?</p>
            <p id="select-p2"><span><i className="bi bi-geo-alt"></i></span> Sacramento, 95829 <span><i className="bi bi-house-door"></i></span> Sacramento Super</p>
          </div>
          <i className="bi bi-caret-down"></i>
        </div>

        {/* Search code */}
        <div className="nav-search">
          <input type="text" placeholder="Search everthing at Walmart online and in store" className="nav-search-input" />
          <input type="text" placeholder="Search Walmart " className="nav-search-input-2" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
 
        {/* Record code */}
        <div className="nav-rec">
          <i className="fa-regular fa-heart"></i>
          <div className="nav-rec-cont">
            <p className="rec-p1">Reorder</p>
            <p className="rec-p2">My Items</p>
          </div>
        </div>

        {/* Signup code */}
        <div className="nav-rec">
          <i className="fa-regular fa-user"></i>
          <div className="nav-rec-cont">
            <p className="rec-p1">Sign In</p>
            <p className="rec-p2">Account</p>
          </div>
        </div>

        {/* Cart Code */}
        <div className="nav-cart">
          <div className="cart-item-count">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-count">0</div>
          </div>
          <p>$0.00</p>
        </div>
      </div>

      {/* Panel */}
      <div className="panel-content">
        {/* For mobile view */}
        <div className="nav-select-mobile">
          <img src="/Images/nav-select-item.webp" alt="image" className="sel-item-img" />
          <div className="nav-select-content">
            <p id="select-p1">How do you want your items?</p>
            <p id="select-p2"><span><i className="bi bi-geo-alt"></i></span>  Sacramento, 95829  <span><i className="bi bi-house-door"></i></span> Sacramento Supas</p>
          </div>
          <div className="panel-line-mob"></div>
          <p>89765</p>
          <i className="bi bi-caret-down"></i>
        </div>

        {/* panel Department */}
        <div className="panel-dep"> 
          <img src="/Images/depart-img.webp" alt="department" />
          <p>Departments</p>
          <i className="bi bi-caret-down"></i>
        </div>

        {/* panel Service */}
        <div className="panel-ser">
          <img src="/Images/service-img.webp" alt="service" />
          <p>Services</p>
          <i className="bi bi-caret-down"></i>
        </div>

        {/* panel seperater */}
        <div className="panel-line"></div>

        {/* panel contexts */}
        <div className="panel-links">
          <a href="#">Summer Savings</a>
          <a href="#">Grocery & Essentials</a>
          <a href="#">Summer Shop</a>
          <a href="#">Back To School</a>
          <a href="#">Home</a>
          <a href="#">Electronics</a>
          <a href="#">Fashion</a>
          <a href="#">Baby</a>
          <a href="#">Toys</a>
          <a href="#">Registry</a>
          <a href="#">ONE Debit</a>
          <a href="#">Walmart+</a>
        </div>
      </div>
    </header>
  );
}
