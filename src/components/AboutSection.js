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
        <div>about us</div>
        <h2>Established since 2016</h2>
        <p>Tell people a little about your studio. Some lines about your expertise and how you entered this field. Listing your services and achievements at times attracts more customers making sure you see a lot more people walking into your studio.</p>
        {/* <div>
            <a href="/">Read more</a>
        </div> */}
      </div>
    </div>
  );
}

export default AboutSection;
