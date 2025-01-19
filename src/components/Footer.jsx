
import './Footer.css'; // Import your CSS file for styling

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {/* <a href="#about">About Us</a> */}
          {/* <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a> */}
        </div>
        <div className="footer-socials">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Made with ❤ by KJ. All rights reserved.</p>
      </div>
    </footer>
  );
};

