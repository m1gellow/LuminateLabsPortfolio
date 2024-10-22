import BlogHeader from "@/app/components/Shared/BlogHeader";
import BlogMainBody from "@/app/components/Shared/BlogMainBody";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import { TypedObject } from "sanity";

export const revalidate = 30;


interface InfoContentWrapperProps{
  title: string;
  smallDescription: string;
  content: TypedObject | TypedObject[];
}

const InfoContentWrapper: React.FC<InfoContentWrapperProps> = async ({title,smallDescription  , content, }) => {

  return (
    <div className="mb-[100px] px-2">
      <BlogHeader title={title}/>

      <BlogMainBody/>
      
      
      <div className="flex justify-center  max-w-[1670px] gap-10 pt-10 mx-auto">
        <div className="border-r border-gray-500 border-opacity-50 pr-2 hidden md:flex">
          <h2 className="text-gray-500 lg:text-[30px] text-[25px]  font-semibold">
            {smallDescription}
          </h2>
        </div>
        <div>
          <h3 className="text-white proce proce-purple proce-xl lg:text-[40px] md:text-[35px] sm:text-[25px] text-[20px]">
            <PortableText value={content} />
          </h3>
          <div>
            <Link href={"/me/"}>
              {" "}
              <Button className="w-[150px] h-[50px]">Начать!</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContentWrapper;
