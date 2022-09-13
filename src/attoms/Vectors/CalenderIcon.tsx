import { SVGProps } from "react"

type props = {
    color?:string;
}& SVGProps<SVGSVGElement>;

const CalenderIcon = (props:props) => (
  <svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.357 1.6a.8.8 0 0 0-.8.8v.8h-.8a1.6 1.6 0 0 0-1.6 1.6v8a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6v-8a1.6 1.6 0 0 0-1.6-1.6h-.8v-.8a.8.8 0 1 0-1.6 0v.8h-4.8v-.8a.8.8 0 0 0-.8-.8Zm0 4a.8.8 0 1 0 0 1.6h6.4a.8.8 0 1 0 0-1.6h-6.4Z"
      fill={props.color || "#1D2319"}
    />
  </svg>
)

export default CalenderIcon