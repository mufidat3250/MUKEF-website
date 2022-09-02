import * as React from "react"
import { SVGProps } from "react"

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.973 12.526 11.5 10.072a6 6 0 1 0-.927.927l2.454 2.453a.665.665 0 0 0 .946 0 .667.667 0 0 0 0-.926Zm-7.14-1.527a4.667 4.667 0 1 1 0-9.333 4.667 4.667 0 0 1 0 9.333Z"
      fill="#757886"
    />
  </svg>
)

export default SearchIcon
