import React from "react";

const IconOffer = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 999 770"
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
        <path className="icon-offer-path" d="M761.9,711.6H655.3c-3.8,0-7-3.1-7-7v-25.9c0-3.8-3.1-7-7-7H492.2c-3.8,0-7,3.1-7,7v25.9c0,3.8-3.1,7-7,7h-80.1
        c-3.8,0-7,3.1-7,7v30c0,3.8,3.1,7,7,7h363.8c3.8,0,7-3.1,7-7v-30C768.9,714.7,765.7,711.6,761.9,711.6z"/>
        <path className="icon-offer-path" d="M940.9,10H180.5c-26.5,0-48,21.5-48,48c0,0,0,91.5,0,125.2c0,16.5-1.2,18.9,9.9,18.9c5.9,0,12.4,0,19,0
        c9.3,0,7.4-2.3,7.4-19.2c0-33.6,0-124.9,0-124.9c0-6.3,5.3-11.7,11.7-11.7h760.4c6.3,0,11.7,5.3,11.7,11.7v468.5H410.4
        c0,0-19.1,0-19.1,24.7c0,14.6,0,43.9,0,58.6c0,24.7,19.7,24.7,19.7,24.7h529.9c26.5,0,48-21.5,48-48V58
        C988.9,31.5,967.4,10,940.9,10z M560.7,593c-11.9,0-21.6-9.7-21.6-21.6s9.7-21.6,21.6-21.6c11.9,0,21.6,9.7,21.6,21.6
        S572.6,593,560.7,593z"/>
        <path className="icon-offer-path" d="M317.3,244.9H42.2c-17.1,0-31,13.9-31,31V728c0,17.1,13.9,31,31,31h275.1c17.1,0,31-13.9,31-31V275.9
        C348.3,258.8,334.4,244.9,317.3,244.9z M145.8,276.5h67.9c3.2,0,5.9,2.6,5.9,5.9c0,3.2-2.6,5.9-5.9,5.9h-67.9
        c-3.2,0-5.9-2.6-5.9-5.9C140,279.1,142.6,276.5,145.8,276.5z M179.3,737.2c-8.9,0-16-7.2-16-16c0-8.9,7.2-16,16-16
        c8.9,0,16,7.2,16,16C195.4,730.1,188.2,737.2,179.3,737.2z M321.7,690.1c0,4.1-3.3,7.5-7.3,7.5H45.2c-4,0-7.3-3.4-7.3-7.5V314.4
        c0-4.1,3.3-7.5,7.3-7.5h269.1c4,0,7.3,3.4,7.3,7.5C321.7,314.4,321.7,690.1,321.7,690.1z"/>
    </g>

  </svg>
);

export default IconOffer;
