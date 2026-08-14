import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Fashion Store</h2>
          <p>Your style, your choice. Discover the latest trends in fashion for men, women, kids and accessories.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <a href="/categories/Men">Men</a>
          <a href="/categories/Women">Women</a>
          <a href="/categories/Kids">Kids</a>
          <a href="/categories/Accessories">Accessories</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>support@fashionstore.com</p>
          <p>+91 12345 67890</p>
          <p>Chennai, Tamil Nadu, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Fashion Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;