import React from 'react'
import './Co-Founder.scss'

const CoFounder = () => {
  return (
    <div className="co-founder--widget">
    <div className="co-founder-img">
      <img
        src="/public/images/co-founder.svg"
        alt=""
        className="w-full h-full"
      />
    </div>
    <div className="flex flex-col">
      <p className="founder--name">Marvin McKinney</p>
      <span className="co-founder--title">
        Co-founder
      </span>
    </div>
  </div>
  )
}

export default CoFounder