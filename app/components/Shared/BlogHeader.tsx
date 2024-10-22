'use client'
import React from 'react'
import CardOfBlogInfo from '../ui/CardOfBlogInfo';
import {motion} from 'framer-motion';

interface BlogHeaderProps{
  title: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({title}) => {
  return (
    <div>
        <div className=" w-screen h-screen flex  justify-center items-center">
        <div className="flex-col flex md:flex-row   text-center justify-center w-[1740px] items-center">
          <div className="flex-1 flex flex-col ">
            <p className="text-gray-500 lg:text-[60px] md:text-[40px] sm:text-[30px] text-[25px] font-semibold">
              Lorem ipsum dolor.
            </p>
            <motion.h1  transition={{duration: 0.5}} initial={{opacity: 0, y: "20px"}} whileInView={{opacity: 1, y: "0"}} className="lg:text-[100px] md:text-[70px] sm:text-[50px] text-[45px] font-semibold tracking-[-0.02em] pt-5 text-white ">
              {title}
            </motion.h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-12">
            <CardOfBlogInfo text={"08 Aug 2024"} />
            <CardOfBlogInfo text={"08 Aug 2024"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader