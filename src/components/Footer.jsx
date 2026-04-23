import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} ShopNova. All rights reserved.</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Contact Us</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;