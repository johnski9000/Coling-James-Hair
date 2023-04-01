import React from "react";

function AboutSection() {
  return (
    <div className="about_wrapper">
      <div className="about_gallery_wrapper">
        <div className="about_gallery_item">
          <div className="about_gallery_item_inner"></div>
        </div>
        <div className="about_gallery_item">
          <div className="about_gallery_item_inner"></div>
        </div>
        <div className="about_gallery_item">
          <div className="about_gallery_item_inner"></div>
        </div>
        <div className="about_gallery_item">
          <div className="about_gallery_item_inner"></div>
        </div>
      </div>
      <div className="about_us_text">
        {/* <div>about us</div> */}
        <h2>Abous Us</h2>
        <p>With over 20 years of experience, Sarah runs The Nails Shed, a beauty, cosmetic, and personal care business that offers top-quality services. Our team of experts ensures clients receive the best treatment, leaving them feeling pampered and refreshed. From nail and skincare to massages, we provide a range of services to meet your needs.</p>
        {/* <div>
            <a href="/">Read more</a>
        </div> */}
      </div>
    </div>
  );
}

export default AboutSection;
