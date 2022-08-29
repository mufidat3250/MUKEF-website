import React from 'react'
import './ProjectNews.scss'
const ProjectNews = () => {
  return (
    <div className='project-news'>
        <p className='recent--news--container'>
      <span className='recent--news'>Recent news</span> 
      <span className='dot'>.</span> 
     <span className='date capitalize'>May 17 2022</span></p>
     <h1 className='project--title'>Muhammad Kamaldeen University project</h1>
     <p className='need--to--know'> - What you need to know.</p>
     <p className='desc'>
     Hi. My name is Khoa. I am a Montreal-based filmmaker, stage director and video designer, author of feature films, documentaries, essays and video installations. I seek to create objects that blur the limits of the sacred.Hi. My name is Khoa. I am a Montreal-based filmmaker, stage director and video designer, author of feature films, documentaries, essays and video installations. I seek to create objects that 
     </p>
     <div className='flex space-x-4'>
       <img src="/public/images/co-founder.svg" alt="" />
       <div className='flex flex-col'>
         <p className='text- text-lg text-gray1000'>Marvin McKinney</p>
         <span className='font-normal text-gray1000 text-[0.8332rem] leading-[1.4615rem]'>Co-founder</span>
       </div>
     </div>
    </div>
  )
}

export default ProjectNews