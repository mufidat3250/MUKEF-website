import './NewsCard.scss'
type newsCardProp = {
    img:string,
    desc:string,
    title:string,
    about:string

}

const NewsCard = ({img, desc, title, about,}:newsCardProp) => {
  return (
    <div className='news--card'>
        <div className="">
            <img src={img} alt=""  className="w-full h-full" />
        </div>
    <p className='recent--news--container mt-[1.375rem]'>
      <span className='recent--news'>Recent news</span> 
      <span className='dot'>.</span> 
     <span className='date capitalize'>May 17 2022</span>
    </p>
    <h1 className='project--title'>{title}</h1>
     <p className='need--to--know'>{about}</p>
     <p className='desc'>
     {desc}
     </p>
     <div className='flex space-x-[1.5rem]'>
       <div className="h-[3.5rem] w-[3.5rem]">
       <img src="/public/images/Frame18.png" alt="" className="w-full h-full" />
       </div>
       <div className='flex flex-col'>
         <p className='text- text-lg text-gray1000'>Marvin McKinney</p>
         <span className='font-normal text-gray1000 text-[0.8332rem] leading-[1.4615rem]'>Co-founder</span>
       </div>
     </div>

    </div>
  )
}

export default NewsCard