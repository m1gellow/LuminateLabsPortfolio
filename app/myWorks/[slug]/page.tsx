import MyWorkMain from "@/app/components/Shared/MyWorkMain";
import { IMyWorksData } from "@/app/lib/interfaces";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React, { Suspense } from "react";
import Button from "../../components/ui/Button";
import Loading from "@/app/components/Shared/Loading";
import { Metadata } from "next";
import { getAllWorks, getDataWithWork } from "@/app/lib/serverActions";

export const revalidate = 30;


export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
    const data: IMyWorksData = await getDataWithWork(params.slug);

    return{
      title: data.projectname,
      description: data.smalldescription
    }
}


export async function generateStaticParams() {
  const data = await getAllWorks();
  
  return data.map(({work}: {work: string}) => work);
}

const MyWorkpage = async ({ params }: { params: { slug: string } }) => {
  const data: IMyWorksData = await getDataWithWork(params.slug);

  return (
    <Suspense fallback={<Loading/>}>
      <div className="container mt-10">
        <MyWorkMain
          projectimage={data.projectimage}
          projectname={data.projectname}
        />
        <div>
          <h3 className="text-white/80 prose prose-lg lg:text-[30px] md:text-[20px] sm:text-[20px] text-[20px]">
            <PortableText value={data.content} />
          </h3>
          <div>
            <Link href={data.projectlink}>
              <Button>На сайт</Button>
            </Link>
          </div>

          <div className="flex my-20 flex-col justify-center items-center">
            <p className="opacity-25 text-gray-400">project by Luminate Labs</p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default MyWorkpage;
