import React from "react";
import ImageOne from "../images/style-1.jpg";
import ImageTwo from "../images/style-2.jpg";
import ImageThree from "../images/style-3.jpg";
import ImageFour from "../images/style-4.jpg";

function AboutSection() {
  return (
    <div className="about_wrapper">
      <div className="about_gallery_wrapper">
        <div className="about_gallery_item">
          <div
            className="about_gallery_item_inner"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ backgroundImage: `url(${ImageOne})` }}
          ></div>
        </div>
        <div className="about_gallery_item">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="about_gallery_item_inner"
            style={{ backgroundImage: `url(${ImageTwo})` }}
          ></div>
        </div>
        <div className="about_gallery_item">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="about_gallery_item_inner"
            style={{ backgroundImage: `url(${ImageThree})` }}
          ></div>
        </div>
        <div className="about_gallery_item">
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="about_gallery_item_inner"
            style={{ backgroundImage: `url(${ImageFour})` }}
          ></div>
        </div>
      </div>
      <div className="about_us_text" data-aos="fade-right" data-aos-delay="900">
        <h2>About Us</h2>
        <p>
          Welcome to Colin James Hairdressing, the premier establishment for
          top-notch hair care in the heart of Altrincham. Located at 22 The
          Downs, our salon is known for its welcoming and modern environment,
          providing exceptional customer service. With years of experience, our
          talented stylists offer personalized services, whether you're looking
          for a simple cut, a bold new color, or a complete hair transformation.
        </p>
        <p>
          At Colin James Hairdressing, we use only the highest quality products
          to ensure your hair receives the best care. Our team is dedicated to
          making you feel at ease and comfortable, ensuring that you leave the
          salon feeling renewed, refreshed, and beautiful. Join the many
          satisfied clients who have made us their go-to choice for hair care in
          Altrincham.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
