import * as React from "react"
import { SVGProps } from "react"

const Gmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.347 2.648 8.8 6.875l8.454-4.228a2.114 2.114 0 0 0-2.111-1.99H2.458C1.33.656.41 1.536.347 2.646Z"
      fill="#1D2319"
    />
    <path
      d="M17.258 5.01 8.801 9.238.343 5.01v6.218c0 1.168.947 2.115 2.115 2.115h12.686a2.114 2.114 0 0 0 2.114-2.115V5.01Z"
      fill="#1D2319"
    />
  </svg>
)

export default Gmail

