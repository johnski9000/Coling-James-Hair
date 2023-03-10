import React from "react";

function PriceSection() {
  return (
    <div className="price_section_wrapper">
      <div className="discount_banner">
        <div className="discount_banner_overlay"></div>
        <div className="price_text_section">
          <div className="price_image_wrapper">
            <img
              src="https://smartinggoods.com/beautynails/wp-content/uploads/sites/36/2020/05/sale-badge.png"
              alt="asd"
              width={100}
              height={100}
            />
          </div>
          <h2>Book Your Appointment Now And Get 25% Off</h2>
          <p>
            Awesome Monsoon Sale - 25% OFF On All Professional Make Up From Only
            $59
          </p>
          <div className="price_overlay_button_wrapper">
            <a href="/">Book an appointment</a>
          </div>
        </div>
      </div>
      <div className="discount_overlap_title">
        <div className="discount_title_overlay"></div>
        <h2>Priced Beauty Solutions</h2>
        <p>
          A section to list down your services and their prices as shown below.
        </p>
      </div>
      <div className="prices_flex">
        <div className="price_item">
          <h2>
          Basic Manicure
            <div className="underline_price"></div>
          </h2>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
        </div>
        <div className="price_item">
          <h2>
          Basic Manicure
            <div className="underline_price"></div>
          </h2>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
        </div>
        <div className="price_item">
          <h2>
          Basic Manicure
            <div className="underline_price"></div>
          </h2>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
        </div>
        <div className="price_item">
          <h2>
          Basic Manicure
            <div className="underline_price"></div>
          </h2>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
          <h5 className="prices">Nails Prices
            <div className="price_block">£95+</div>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default PriceSection;
