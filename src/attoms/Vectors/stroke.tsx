import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.13 1.3 1.3 28.646"
      stroke="#858585"
      strokeWidth={1.262}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgComponent;
