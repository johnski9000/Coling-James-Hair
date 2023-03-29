import React from "react";

function Footer() {
  return (
    <div className="footer_main">
      <div className="footer_wrapper">
        <div className="mobile_footer">
          <div className="footer_mobile_title">Quick Links</div>
          <ul>
            <li>
              <a>insert text</a>
            </li>
            <li>
              <a>insert text</a>
            </li>
            <li>
              <a>insert text</a>
            </li>
            <li>
              <a>insert text</a>
            </li>
            <li>
              <a>insert text</a>
            </li>
          </ul>
          <div className="footer_mobile_title">Follow Us</div>
          <ul className="socials_footer_mobile">
            <li>
              <a className="social_icon" href="https://www.instagram.com/thenailshed62/">
                <img
                  src="https://i8.amplience.net/i/jpl/instagram-1-5c570427ee23f69853d28aec805eee79"
                  alt="instagram"
                />
              </a>
            </li>
            <li>
              <a className="social_icon" href="https://www.facebook.com/thenailshed62">
                <img
                  src="https://i8.amplience.net/i/jpl/facebook-1-8f5ce27564945d2c9a10ef827549a78c"
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a className="social_icon">
                <img
                  src="https://i8.amplience.net/i/jpl/twitter-1-1ac19cc180bd5411c8c31919998ab681"
                  alt="twitter"
                />
              </a>
            </li>
          </ul>
          <div className="footer_mobile_title">contact</div>
          <ul>
            <li>
              <a>sarrabirrell@yahoo.co.uk</a>
            </li>
          </ul>
          <div className="footer_mobile_title">Call Us</div>
          <ul>
            <li>
              <a>07790611737</a>
            </li>
          </ul>
        </div>
        <div className="footer">
          <div className="footer_left">
            <div className="footer_mobile_title">Quick Links</div>
            <ul>
              <li>
                <a>insert text</a>
              </li>
              <li>
                <a>insert text</a>
              </li>
              <li>
                <a>insert text</a>
              </li>
              <li>
                <a>insert text</a>
              </li>
              <li>
                <a>insert text</a>
              </li>
            </ul>
            <div className="footer_mobile_title">Follow Us</div>
            <ul className="socials_footer_mobile">
              <li>
                <a className="social_icon" href="https://www.instagram.com/thenailshed62/">
                  <img
                    src="https://i8.amplience.net/i/jpl/instagram-1-5c570427ee23f69853d28aec805eee79"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a className="social_icon" href="https://www.facebook.com/thenailshed62">
                  <img
                    src="https://i8.amplience.net/i/jpl/facebook-1-8f5ce27564945d2c9a10ef827549a78c"
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a className="social_icon">
                  <img
                    src="https://i8.amplience.net/i/jpl/twitter-1-1ac19cc180bd5411c8c31919998ab681"
                    alt="twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_right">
            <div className="footer_mobile_title">contact</div>
            <ul>
              <li>
                <a>sarrabirrell@yahoo.co.uk</a>
              </li>
            </ul>
            <div className="footer_mobile_title">Call Us</div>
            <ul>
              <li>
                <a href="/" disabled="disabled" onclick="window.location.href='tel:07790611737';">07790611737</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
