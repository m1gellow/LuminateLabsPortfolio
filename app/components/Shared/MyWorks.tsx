
import React from "react";
import ProjectCard from "./ProjectCard";
import { client } from "@/app/lib/sanity";
import { IMyWorksData } from "@/app/lib/interfaces";

const getMyWorks = async() => {
  const query = `
  *[_type == "myworks"]{
  projectname,
    "currentSlug": slug.current,
    projectimage,
    smalldescription,
    content,
    projectlink
    
}
  `

  const data = await client.fetch(query);

  return data;


}

const MyWorks = async() => {

  const data: IMyWorksData[] = await getMyWorks();

  return (
    <div className="">
      <div
        className="flex justify-center items-center flex-col gap-4 py-5"
      >
        <h1 className="sm:text-[40px] text-[40px]   lg:text-[50px] text-center font-bold tracking-[-0.02em] text-black dark:text-white">
          Projects
        </h1>
        <p className="text-purple-600 text-xl text-center">Вдохновляющие работы, которые заслуживают вышего внимания!</p>
        <p className="text-gray-500 text-lg text-center">
          <span>Stack: </span> React | Next.js, tailwind css, typescript, sanity,
          framer-motion
        </p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3  container">
        {data.map((works, idx) => (
          <div key={idx}>
             <ProjectCard projectname={works.projectname} projectimage={works.projectimage} projectlink={works.projectlink} currentSlug={works.currentSlug} smalldescription={works.smalldescription} content={works.content}  views="25.2k"/>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default MyWorks;
