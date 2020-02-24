import React from "react";

const IconCustomers = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 909 549"
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
        <path className="icon-customers-path" d="M454.6,249.6c65.9,0,118.9-53.3,118.9-118.8C573.6,65.1,520.5,12,454.6,12c-65.5,0-118.6,53.1-118.6,118.8
            C335.9,196.4,389.1,249.6,454.6,249.6z"/>
        <path className="icon-customers-path" d="M549.9,269H359.5c-34.1,0-61.9,31.2-61.9,69.5v191.3c0,2.1,1.1,4,1.2,6.2h311.9c0.2-2.2,1.1-4.1,1.1-6.2V338.5
            C611.8,300.2,583.9,269,549.9,269z"/>
        <path className="icon-customers-path" d="M774.4,306.3c52.9,0,95.3-42.6,95.3-95.2s-42.4-95.3-95.3-95.3c-52.5,0-95,42.7-95,95.3
            C679.3,263.7,721.9,306.3,774.4,306.3z"/>
        <path className="icon-customers-path" d="M850.9,321.9H698.3c-27.4,0-49.8,25-49.8,55.8V531c0,1.6,0.8,3.2,0.9,5h250.2c0.1-1.8,0.9-3.4,0.9-5V377.7
            C900.6,346.9,878.2,321.9,850.9,321.9z"/>
        <path className="icon-customers-path" d="M134.8,306.3c52.8,0,95.3-42.6,95.3-95.2s-42.5-95.3-95.3-95.3c-52.6,0-95.1,42.7-95.1,95.3
            S82.3,306.3,134.8,306.3L134.8,306.3z"/>
        <path className="icon-customers-path" d="M211.3,321.9H58.5c-27.3,0-49.6,25-49.6,55.8V531c0,1.6,0.8,3.2,1,5H260c0.1-1.8,0.8-3.4,0.8-5V377.7
            C260.9,346.9,238.6,321.9,211.3,321.9z"/>
    </g>

  </svg>
);

export default IconCustomers;
