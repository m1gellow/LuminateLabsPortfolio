import BlogHeader from "@/app/components/Shared/BlogHeader";
import BlogMainBody from "@/app/components/Shared/BlogMainBody";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";
import Button from "../../components/ui/Button";
import { Metadata } from "next";
import { InfoData } from "@/app/lib/interfaces";
import { getAllInfo} from "@/app/lib/serverActions";
import { getDataWithInfo} from "@/app/lib/serverActions";

export const revalidate = 30;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: InfoData = await getDataWithInfo(params.slug);

  return {
    title: data.title,
    description: data.smallDescription,
  };
}

export async function generateStaticParams() {
  const data = await getAllInfo();

  return data.map(({ info }: { info: string }) => info);
}

const InfoPage = async ({ params }: { params: { slug: string } }) => {
  const data: InfoData = await getDataWithInfo(params.slug);

  return (
    <div className="mb-[100px] px-2">
      <BlogHeader title={data.title} />

      <BlogMainBody />

      <div className="flex justify-center  max-w-[1670px] gap-10 pt-10 mx-auto">
        <div className="border-r flex-1 border-gray-500 border-opacity-50 pr-2 hidden md:flex">
          <h2 className="text-gray-500 lg:text-[30px] text-[25px]  font-semibold">
            {data.smallDescription}
          </h2>
        </div>
        <div>
          <h3 className="text-white/80 prose flex-1  prose-lg lg:text-[40px] md:text-[35px] sm:text-[25px] text-[20px]">
            <PortableText value={data.content} />
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

export default InfoPage;
