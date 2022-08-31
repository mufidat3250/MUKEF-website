
import { SVGProps } from "react"

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.86 10.027 8 12.893l-2.86-2.866a.67.67 0 0 0-.947.946l3.334 3.334a.667.667 0 0 0 .946 0l3.334-3.334a.669.669 0 1 0-.947-.946ZM5.14 6.973 8 4.107l2.86 2.866a.668.668 0 0 0 1.093-.217.666.666 0 0 0-.146-.73L8.473 2.694a.667.667 0 0 0-.946 0L4.193 6.027a.67.67 0 1 0 .947.946Z"
      fill="#434343"
    />
  </svg>
)

export default ArrowDown
