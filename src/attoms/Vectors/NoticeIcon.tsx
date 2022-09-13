import { SVGProps } from "react"

const NoticeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.47 13.342c0 7.311-5.925 13.237-13.235 13.237S0 20.653 0 13.342C0 6.032 5.926.105 13.235.105c7.31 0 13.235 5.927 13.235 13.237Zm-13.162 1.574.15-6.81h-1.335l.15 6.81h1.035Zm-1.063 2.52a.815.815 0 0 0 .6.246.755.755 0 0 0 .572-.245.815.815 0 0 0 .245-.6.816.816 0 0 0-.245-.6.755.755 0 0 0-.572-.244.815.815 0 0 0-.6.245.816.816 0 0 0-.245.6c0 .235.082.435.245.598Z"
      fill="#858585"
    />
  </svg>
)

export default NoticeIcon