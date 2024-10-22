"use client";
import { ulrFor } from "@/app/lib/sanity";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


interface MyWorkMainProps{
  projectimage: string
  projectname: string;
}

const MyWorkMain: React.FC<MyWorkMainProps> = ({
  projectimage,
  projectname,
}) => {
  return (
    <div>
      <div className="flex justify-center gap-10 flex-col items-center">
        <div>
          <motion.h1
            initial={{ y: "20px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:text-[100px] md:text-[70px] sm:text-[50px] text-[45px] font-semibold tracking-[-0.02em] pt-5 text-white"
          >
            {projectname}
          </motion.h1>
        </div>
        <div>
          <Image
            src={ulrFor(projectimage).url()}
            width={1000}
            height={1000}
            loading="lazy"
            alt="workimage"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default MyWorkMain;
