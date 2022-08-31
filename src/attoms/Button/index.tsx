import React from 'react'
import './Button.scss'
type buttonProp = {
    title:string;
    customStyle: string
}
const Button = ({title, customStyle}:buttonProp) => {
  return (
    <button className={`Button h-[3.125rem] ${customStyle}`}>
            {title}
    </button>
  )
}

export default Button