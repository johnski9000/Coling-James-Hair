import React from "react";

function PriceSection() {
  return (
    <div className="price_section_wrapper">
      <div className="discount_banner">
        <div className="discount_banner_overlay"></div>
        <div className="price_text_section" data-aos="fade-up">
          {/* <div className="price_image_wrapper">
            <img
              src="https://smartinggoods.com/beautynails/wp-content/uploads/sites/36/2020/05/sale-badge.png"
              alt="asd"
              width={100}
              height={100}
            />
          </div> */}
          <h2>Book Your Appointment Now And Get Up To 25% Off</h2>
          <p>
            Call us today to find out about our latest offers and promotions.
            Don't miss out on our exciting deals!
          </p>

          <div className="price_overlay_button_wrapper">
            <a href="/">Book an appointment</a>
          </div>
        </div>
      </div>
      <div className="discount_overlap_title" data-aos="fade-up">
        <div className="discount_title_overlay"></div>
        <h2>Hair Care Services</h2>
        <p>
          Explore our range of hair care services and their prices as listed
          below. Call us today to find out about our latest offers and
          promotions!
        </p>
      </div>
      <div className="prices_flex">
        <div className="price_item" data-aos="fade-up" data-aos-delay="100">
          <h2>
            Gents
            <div className="underline_price"></div>
          </h2>
          <h5 className="prices">
            Wash and Cut
            <div className="price_block">From £25</div>
          </h5>
        </div>
        <div className="price_item" data-aos="fade-up" data-aos-delay="300">
          <h2>
            Ladies
            <div className="underline_price"></div>
          </h2>
          <h5 className="prices">
            Cut and Blowdry
            <div className="price_block">From £45</div>
          </h5>
          <h5 className="prices">
            Blow Dry
            <div className="price_block">From £25</div>
          </h5>
        </div>
        <div className="price_item" data-aos="fade-up" data-aos-delay="500">
          <h2>
            Colour Services
            <div className="underline_price"></div>
          </h2>
          <h5 className="prices">
            Full Head Colour
            <div className="price_block">From £50</div>
          </h5>
          <h5 className="prices">
            Colour and Highlights
            <div className="price_block">From £60</div>
          </h5>
          <h5 className="prices">
            Full Head Highlights
            <div className="price_block">From £70</div>
          </h5>
          <h5 className="prices">
            Half Head Highlights
            <div className="price_block">From £60</div>
          </h5>
          <h5 className="prices">
            Halo Highlights
            <div className="price_block">From £50</div>
          </h5>
          <h5 className="prices">
            Toner
            <div className="price_block">From £15</div>
          </h5>
          <h5 className="prices">
            Keratin Blow Dry
            <div className="price_block">From £130</div>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default PriceSection;
