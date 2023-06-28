import React from "react";
import "./DonwBar.css";

function DownBar() {
  return (
    <div>
      <div id="ofBar">
        <div id="ofBar-logo">
          <img
            alt="creative-tim-logo"
            src="https://s3.amazonaws.com/creativetim_bucket/static-assets/logo-ct-black.png"
          ></img>{" "}
        </div>
        <div id="ofBar-content">
          🌷 Select your favorite <b>Spring Bundle</b> and enjoy a whopping <b>85% discount</b> on
          its price ⏰ 3 Days Left
        </div>
        <div id="ofBar-right">
          <a
            href="https://www.creative-tim.com/campaign?ref=ct-demos"
            target="_blank"
            id="btn-bar"
            rel="noreferrer"
          >
            Confirm Offer
          </a>
          <a id="close-bar">X</a>
        </div>
      </div>
      ;
    </div>
  );
}

export default DownBar;
