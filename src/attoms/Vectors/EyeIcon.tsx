import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.744 4.302a8.789 8.789 0 0 0-.456.779.579.579 0 0 0 0 .517c.081.163.234.434.456.779.368.57.802 1.14 1.303 1.673 1.455 1.553 3.167 2.497 5.123 2.497 1.956 0 3.668-.944 5.123-2.497.5-.534.935-1.103 1.303-1.673.222-.345.375-.616.456-.779a.579.579 0 0 0 0-.517 8.806 8.806 0 0 0-.456-.779c-.368-.57-.803-1.14-1.303-1.673C10.838 1.077 9.126.132 7.17.132c-1.956 0-3.668.945-5.123 2.497-.5.534-.935 1.103-1.303 1.673ZM7.17 7.654a2.314 2.314 0 1 0 0-4.629 2.314 2.314 0 0 0 0 4.63Z"
      fill="#E5E5E5"
    />
  </svg>
);

export default SvgComponent;
