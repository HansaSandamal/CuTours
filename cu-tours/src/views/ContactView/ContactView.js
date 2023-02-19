import React from "react";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import whatsapp from "../../assets/images/whatsapp.png";
import clientDomain from "../../config.js";

const SocialButton = ({ image, url, title, margin }) => {
  return (
    <div className={margin} title={title}>
      <a href={url} target="_blank" rel="nofollow noopener">
        <img
          src={image}
          className="icon"
          height={40}
          alt={title}
          title={title}
        />
      </a>
    </div>
  );
};

function ContactView() {
  return (
    <div>
      <span>Share this link via</span>
      <div style={{ display: "flex" }}>
        <SocialButton
          image={facebook}
          url={`https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/KollangeHadawath`}
          title="facebook"
          margin="ml-0"
        />
        <SocialButton
          image={twitter}
          url={`https://twitter.com/intent/tweet?url=https://https://www.facebook.com/KollangeHadawath&text=cu-day-tours&via=`}
          title="twitter"
          margin="ml-4"
        />
        <SocialButton
          image={whatsapp}
          url={`https://api.whatsapp.com/send?text=https://https://www.facebook.com/KollangeHadawath`}
          title="whatsapp"
          margin="ml-4"
        />
      </div>
    </div>
  );
}

export default ContactView;
