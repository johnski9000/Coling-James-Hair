import React, { useState, useEffect } from "react";
import axios from "axios";

const InstaFeeds = () => {
  const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,username,timestamp,thumbnail_url&limit=4&access_token=IGQVJXT0lWZAGF3dXVqSW9lc2lybkFDdkt3MWVfenozcXNTbWZATREFOOW4yVk5vZAEhoU3FUTnI0eUFLcVVOVG9CRnVmZAnV5V0RxZAThwMGVHckNnSHozbTExOXU2aWc4RDZAvODZAvRkVR`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
      console.log(feeds);
    }
    // manually call the fecth function
    fetchInstagramPost();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, []);

  return (
    <div className="insta_container">
      <div className="insta_innner_container">
        <div>
          <h1>Follow Us</h1>
          <p>Check out our latest news and updates</p>
        </div>
        <div className="feed_container">
          {feeds ? (
            feeds.map((item, index) => (
              <article key={index}>
                <div className="insta_image_wrapper">
                  <div className="insta_absolute">instagram</div>
                  <img src={item.media_url} alt="img" />
                </div>
                <div className="insta_text_wrapper">
                  <div>{item.caption}</div>
                  <div className="insta_logo_wrapper">
                    <div className="insta_logo"></div>
                    <div>
                      <div className="business_name">Sarah's Nails</div>
                      <div className="insta_user_data">
                        {item.username}
                        {/* {item.timestamp} */}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div>Loading...</div>
          )}
          
        </div>
        <div className="show_more_insta">
            <a href="/">show more</a>
          </div>
      </div>
    </div>
  );
};

export default InstaFeeds;
