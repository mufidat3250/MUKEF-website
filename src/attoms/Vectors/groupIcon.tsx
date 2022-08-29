import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={60}
    height={61}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.08.058C19.354.62 11.352 4.94 6.035 11.961c-6.105 8.06-7.7 18.766-4.226 28.343 2.89 7.964 9.207 14.473 17.078 17.598 2.697 1.07 5.437 1.725 8.405 2.008 1.466.14 4.695.117 6.004-.041 4.487-.543 8.596-1.943 12.284-4.185 7.434-4.522 12.584-12.086 14.016-20.586.296-1.76.353-2.404.395-4.5.044-2.208-.064-3.764-.392-5.665-1.725-9.986-8.297-18.352-17.652-22.47C37.772.628 32.76-.241 28.08.059ZM19.675 12.25c.289.06.812.251 1.163.424.516.254.768.445 1.32.996.553.554.74.801.993 1.32.425.867.539 1.369.539 2.363 0 .995-.114 1.497-.539 2.365-.254.52-.438.763-.994 1.317-.554.552-.8.736-1.319.988-2.666 1.292-5.784.223-7.051-2.418-.388-.808-.49-1.274-.49-2.252 0-.976.101-1.441.489-2.251.679-1.42 2.05-2.527 3.53-2.848.639-.138 1.707-.14 2.359-.004Zm24.09.146c3.478 1.177 4.69 5.466 2.345 8.297a5.231 5.231 0 0 1-6.942.988c-.61-.415-1.368-1.255-1.698-1.883-.774-1.473-.772-3.411.006-4.906.425-.818 1.437-1.8 2.282-2.216.886-.436 1.405-.542 2.507-.51.735.021 1.01.063 1.5.23Zm-11.501 5.207a8.058 8.058 0 0 1 4.332 2.925c1.436 1.907 1.905 4.409 1.275 6.805-.526 1.998-2.08 3.905-3.974 4.873-1.219.623-2.113.829-3.603.829-1.782 0-2.959-.349-4.386-1.3-1.071-.714-2.28-2.135-2.782-3.27-.899-2.031-.888-4.574.027-6.526.536-1.144 1.283-2.08 2.32-2.907.96-.764 1.939-1.227 3.17-1.498.885-.195 2.772-.16 3.62.07ZM14.15 23.085c2.515 1.274 4.343 1.552 6.445.982.3-.081.553-.148.563-.148.01 0 .019.634.02 1.408.002 1.294.019 1.466.205 2.141.254.918.56 1.659.985 2.382l.33.561-.686.093a9.75 9.75 0 0 0-1.212.25c-1.128.338-2.44 1.157-3.146 1.964l-.326.373-1.866-.036c-2.021-.038-2.293-.081-3.139-.498-.96-.472-1.466-1.16-1.63-2.213-.104-.668.011-3.15.199-4.286.297-1.802.818-2.89 1.56-3.257.496-.245.73-.206 1.698.284Zm34.1-.22c.9.57 1.432 2.153 1.63 4.844.192 2.62.045 3.454-.749 4.248-.191.191-.593.467-.904.62-.822.405-1.45.498-3.35.498h-1.614l-.336-.374c-1.042-1.158-2.634-1.963-4.348-2.197l-.683-.093.366-.638c.909-1.582 1.37-3.588 1.198-5.216-.034-.33-.055-.61-.046-.622.01-.012.262.046.56.13 2.044.565 3.85.307 6.289-.9 1.215-.601 1.455-.638 1.988-.3Zm-24.792 9.136c.19.11.75.47 1.245.796 1.097.725 1.517.94 2.484 1.277 1.197.417 1.873.533 3.107.533 1.235 0 1.91-.116 3.108-.533.973-.338 1.464-.591 2.518-1.295 1.539-1.028 1.492-1.008 2.242-.954 3.002.217 5.036 2.37 5.966 6.316.38 1.609.518 2.852.529 4.728.01 1.945-.04 2.262-.529 3.265-.2.413-.425.715-.843 1.132-.924.923-1.854 1.342-3.316 1.492-1.047.107-18.317.106-19.367-.002-1.43-.146-2.38-.575-3.3-1.491-.427-.426-.637-.709-.838-1.13-.487-1.023-.541-1.343-.535-3.153.006-1.782.084-2.583.406-4.203.388-1.947 1-3.466 1.873-4.642 1.086-1.465 2.673-2.293 4.462-2.329.356-.007.512.031.788.193Z"
      fill="#3D3D3D"
    />
  </svg>
)

export default SvgComponent
