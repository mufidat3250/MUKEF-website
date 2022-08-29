// import "./Footer.scss";
// import { activities, socialIcon } from "../../data";
// const Footer = () => {
// <<<<<<< HEAD
//   return (
//     <div className="Footer">
//       <div className="footer-wrapper">
//         <div className="footer--content">
//           <div className="self-start w-[6.3125rem] h-[5.8468rem]">
//             <img src="/public/images/Mukef Logo.png" alt="" />
//           </div>
//           <div className="activities">
//             <div>
//               <h1 className="title">{activities.events.title}</h1>
//               <div className="subtext">
//                 {activities.events.data.map((d, index) => (
//                   <p className="" key={index}>
//                     {d}
//                   </p>
//                 ))}
//               </div>
// =======
//     return (
//         <div className='Footer'>
//             <div className='footer-wrapper'>
//                 <div className='footer--content'>
//                     <div className='self-start w-[6.3125rem] h-[5.8468rem]'>
//                         <img src="/public/images/Mukef Logo.png" alt="" />
//                     </div>
//                     <div className='activities'>
//                         <div>
//                             <h1 className='title'>{activities.events.title}</h1>
//                             <div className='subtext'>
//                                 {activities.events.data.map((d, index) => <p className='' key={index}>{d}</p>)}
//                             </div>
//                         </div>
//                         <div>
//                             <h1 className='title'>{activities.news.title}</h1>
//                             <div className='subtext'>
//                                 {activities.news.data.map((d, index) => <p className='' key={index}>{d}</p>)}
//                             </div>
//                         </div>
//                         <div>
//                             <h1 className='title'>{activities.completedProjects.title}</h1>
//                             <div className='subtext'>
//                                 {activities.completedProjects.data.map((d, index) => <p className='' key={index}>{d}</p>)}
//                             </div>
//                         </div>
//                         <div>
//                             <h1 className='title'>{activities.ongoingProjects.title}</h1>
//                             <div className='subtext'>
//                                 {activities.ongoingProjects.data.map((d, index) => <p className='' key={index}>{d}</p>)}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                     <div className=' mx-auto h-[1px] bg-lighgray2 my-[1.875rem]' >
//                     </div>
//                     <div className='copywrite--social--links'>
//                     <p>Copyright © 2020</p>
//                     <div className='flex gap-x-[0.625rem]'>
//                         {
//                            socialIcon.map(({icon:Icon}, index)=><div className=' grid place-items-center h-[3.125rem] w-[3.125rem] rounded-full bg-lighgray2' key={index}>{<Icon/>}</div>)
//                         }
//                     </div>
//                     </div>
// >>>>>>> f4a9cc6711c8bd450b22d5d60932156d5e1e2177
//             </div>
//             <div>
//               <h1 className="title">{activities.news.title}</h1>
//               <div className="subtext">
//                 {activities.news.data.map((d, index) => (
//                   <p className="" key={index}>
//                     {d}
//                   </p>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h1 className="title">{activities.completedProjects.title}</h1>
//               <div className="subtext">
//                 {activities.completedProjects.data.map((d, index) => (
//                   <p className="" key={index}>
//                     {d}
//                   </p>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h1 className="title">{activities.ongoingProjects.title}</h1>
//               <div className="subtext">
//                 {activities.ongoingProjects.data.map((d, index) => (
//                   <p className="" key={index}>
//                     {d}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-[98%] mx-auto h-[1px] bg-lighgray2 my-[1.875rem]"></div>
//         <div className="copywrite--social--links">
//           <p>Copyright © 2020</p>
//           <div className="flex gap-x-[0.625rem]">
//             {socialIcon.map(({ icon: Icon }, index) => (
//               <div
//                 className=" grid place-items-center h-[3.125rem] w-[3.125rem] rounded-full bg-lighgray2"
//                 key={index}
//               >
//                 {<Icon />}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro
      esse, sapiente nobis officiis suscipit architecto perspiciatis? Repellat,
      quidem vero doloribus aspernatur, eveniet eos accusamus cum ullam totam
      natus sint.
    </div>
  );
};

export default Footer;
