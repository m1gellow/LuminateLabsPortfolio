import MyWorkMain from "@/app/components/Shared/MyWorkMain";
import { IMyWorksData } from "@/app/lib/interfaces";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import { getDataWithWork } from "@/app/lib/serverActions";

export const revalidate = 30;



const MyWorksContentWrapper = async ({ params }: { params: { slug: string } }) => {
  const data: IMyWorksData = await getDataWithWork(params.slug);


  return (
    <div className="container mt-10">
          <MyWorkMain projectimage={data.projectimage} projectname={data.projectname}/>
          <div>
          <h3 className="text-white proce proce-purple proce-xl lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px]">
            <PortableText value={data.content} />
          </h3>
          <div>
            <Link href={data.projectlink}>
              <Button>На сайт</Button>
            </Link>
          </div>

          <div className="flex my-20 flex-col justify-center items-center">
            <div className="h-[10px] w-80 border-b border-gray-400"></div>
            <p className="opacity-25">project by Luminate Labs</p>
          </div>
        </div>
    </div>
  );
};

export default MyWorksContentWrapper;
