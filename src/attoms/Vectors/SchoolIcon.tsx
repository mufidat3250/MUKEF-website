import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1440}
    height={900}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M-165-380h1920V900H-165z" />
    <path fill="#000" fillOpacity={0.7} d="M-165-380h1920V900H-165z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.0004 .0006)" />
      </pattern>
      <image
        id="b"
        width={2500}
        height={1667}
      />
    </defs>
  </svg>
);
export default SvgComponent;