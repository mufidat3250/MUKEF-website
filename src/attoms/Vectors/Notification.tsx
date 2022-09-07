import * as React from "react"
import { SVGProps } from "react"

const Notification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.023 17.052a62.385 62.385 0 0 0 0-12.923c-.14-1.344-1.69-2.025-2.776-1.219l-4.142 3.077a7.574 7.574 0 0 1-4.516 1.494H4.723c-.557 0-1.01.451-1.01 1.008v4.203c0 .557.453 1.008 1.01 1.008H8.59c1.627 0 3.21.524 4.516 1.494l4.142 3.077c1.085.806 2.636.125 2.776-1.219Z"
      fill="#1D2319"
    />
    <path
      d="M9.178 15.938a.756.756 0 0 0-.733-.944H6.426a.757.757 0 0 0-.677.418l-1.01 2.018a.756.756 0 0 0 .266.973l2.154 1.395a.757.757 0 0 0 1.145-.447l.874-3.413Z"
      fill="#1D2319"
    />
  </svg>
)

export default Notification