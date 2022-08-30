import * as React from "react"
import { SVGProps } from "react"

const TransactionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.53 1.53A.75.75 0 0 0 2.47.47l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H13a.75.75 0 0 0 0-1.5H2.81l.72-.72ZM12.47 8.47a.75.75 0 0 0 0 1.06l.72.72H3a.75.75 0 0 0 0 1.5h10.19l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0Z"
      fill="#0C0C0C"
    />
  </svg>
)

export default TransactionIcon
