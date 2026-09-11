import "../css/Footer.css";
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <Link to="/categories/Men">Men</Link>
          <Link to="/categories/Women">Women</Link>
          <Link to="/categories/Kids">Kids</Link>
          <Link to="/categories/Accessories">Accessories</Link>
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