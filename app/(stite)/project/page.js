"use client"
import React, { useEffect, useState } from 'react'
import './Project.css'
import Image from 'next/image';
import Link from 'next/link';

import image from '../../assets/design/01.png'
 const Project = () => {

  const [imgss, setImg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://web-technology-server-site.vercel.app/simple")
      .then((res) => res.json())
      .then((data) => {
        setImg(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div class="center">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </>
    );
  }


  return (
    <>
    
<div id="project" className="mt-[100px] md:px-[25px] max-w-screen-xl">
        <h1 className="text-[36px] font-[600] text-center text-[#fff] pb-20">
          My Project
        </h1>
    <div>


        {/* <!-- This is an example component --> */}
        <div class=" grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10 justify-between items-center ">
        
         {
          imgss?.map((project, index) =>{
            return <>
            <div key={index} class="project-card  shadow-md  rounded-lg max-w-sm bg-[#07091a]">
            <div className=''>
              <img
                // width={500}
                // height={800}
                class=" rounded-t-lg card-imgae h-[250px] w-[100%]"
                src={project?.img}
                alt=""
              />
            </div>
            <div class="p-5">
              <a href="#">
                <h5 class="card-title text-gray-900 font-bold text-[18px] tracking-tight mb-2 dark:text-white">
                  {project?.name}
                </h5>
              </a>
              <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {project?.features?.slice(0,120)}
              </p>
              <div className="flex justify-between items-center">
                <p>{index*1/2+7/5}k view</p>
                <Link
                  href={`/project/${project?.id}`}
                  class="text-white  bg-[#F26C4F] focus:ring-4 focus:ring-blue-300 font-medium rounded-sm  text-sm px-3 py-2 text-center inline-flex items-center "
                >
                  Details
                  <svg
                    class="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
            
            </>
          })
         }
          
          
        </div>
      </div>

        </div>


    
    
    </>
  )
}
export default Project;
