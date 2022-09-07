import * as React from "react";
import { SVGProps } from "react";

type cancelProp = {
  color?:string;
} & SVGProps<SVGSVGElement>

const SvgComponent = (props:cancelProp) => (
  <svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.955 3.22a1.398 1.398 0 1 0-1.978-1.977L8.374 6.846 2.771 1.243A1.398 1.398 0 0 0 .793 3.22l5.604 5.603-5.604 5.604a1.398 1.398 0 0 0 1.978 1.977l5.603-5.603 5.603 5.603a1.398 1.398 0 1 0 1.978-1.977l-5.603-5.604 5.603-5.603Z"
      fill={props.color || "#CD9E9E"}
    />
  </svg>
);

export default SvgComponent;
