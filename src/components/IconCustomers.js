import React from "react";

const IconCustomers = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 940 821"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >

    <g>
        <path className="icon-customers-path" d="M306.1,769.6c0,23.3-19.1,42.4-42.4,42.4H88.6c-23.3,0-42.4-19.1-42.4-42.4V577.5c0-23.3,19.1-42.4,42.4-42.4
            h175.2c23.3,0,42.4,19.1,42.4,42.4V769.6z"/>
        <path className="icon-customers-path" d="M617.5,769.6c0,23.3-19.1,42.4-42.4,42.4H400c-23.3,0-42.4-19.1-42.4-42.4V475.8c0-23.3,19.1-42.4,42.4-42.4
            h175.2c23.3,0,42.4,19.1,42.4,42.4V769.6z"/>
        <path className="icon-customers-path" d="M929,769.6c0,23.3-19.1,42.4-42.4,42.4H711.5c-23.3,0-42.4-19.1-42.4-42.4V362.8c0-23.3,19.1-42.4,42.4-42.4
            h175.2c23.3,0,42.4,19.1,42.4,42.4V769.6z"/>
        <path className="icon-customers-path" d="M892.3,14.5L702,60.8c-15.1,3.7-18.5,15.6-7.5,26.6l40.6,39.7c3.4,3.9-0.6,9.1-3.8,11.2
            c-25.6,17.5-66.2,43.1-122.3,72.3C303.6,370,51.8,360.2,48.1,360c-20.2-1-37.5,14.5-38.5,34.8c-1,20.3,14.5,37.5,34.8,38.6
            c1.5,0.1,7.5,0.4,17.7,0.4c65.3,0,299.8-11.3,581-158c66.5-34.7,112.7-64.7,139.6-83.6c3.8-2.7,10.4-7.3,16.6-1.1l44.4,44.4
            c11,11,22.9,7.6,26.5-7.5l43.2-192.7C916.9,20.2,907.4,10.8,892.3,14.5z"/>
    </g>

  </svg>
);

export default IconCustomers;
