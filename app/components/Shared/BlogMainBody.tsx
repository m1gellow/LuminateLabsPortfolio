import Image from "next/image";
import React from "react";
import TestImg from "../../Work_1.jpg";
import Marquee from "../ui/Marquee";




const BlogMainBody = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center">
          <Image
            alt="blogmainImage"
            className="rounded"
            height={300}
            src={TestImg}
            loading="lazy"
          />
        </div>
        <div>
          <div className="border border-gray-500 border-opacity-50">
            <Marquee />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMainBody;
