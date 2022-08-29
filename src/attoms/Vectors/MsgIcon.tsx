import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.532 10.678H1.991A1.953 1.953 0 0 1 .038 8.725V2.216C.038 1.138.912.264 1.99.264h9.113c1.078 0 1.953.874 1.953 1.952V12.63a.65.65 0 0 1-1.112.46l-2.413-2.412Z"
      fill="#E5E5E5"
    />
  </svg>
);

export default SvgComponent;
