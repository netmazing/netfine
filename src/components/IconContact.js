import React from "react";

const IconContact = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 660 539"
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
      <path className="icon-contact-path" d="M13.6,205.3C13.6,103,96.6,20,198.9,20h260.4c102.4,0,185.3,83,185.3,185.3s-83,185.3-185.3,185.3H268.8
		L302,520L181.3,389.8C87.2,380.9,13.6,301.7,13.6,205.3z"/>
	    <circle className="icon-contact-circle1" cx="222.9" cy="205" r="25.7"/>
	    <circle className="icon-contact-circle2" cx="435.4" cy="205" r="25.7"/>
	    <circle className="icon-contact-circle3" cx="329.1" cy="205" r="25.7"/>
    </g>

  </svg>
);

export default IconContact;