import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="owner">
      <span className="col">
          <div className="subscribe-form-holder"></div>
          <div className="social-media">
            <h3 className="social-col-title">Follow</h3>
            <ul className="social-media-list">
              <li>
                <a href="https://github.com/bhavyaj12" target="_blank">
                  <i className="fab fa-github "></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bhavzlearn" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bhavya-joshi-438178184"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </span>
        <span>Made with 💜 by Bhavya Joshi</span>
      </div>
      <div className="copyright mt-3">
        &copy; All Rights Reserved 2022 Halcyon-Designs
      </div>
    </footer>
  );
};

export default Footer;