import { MetadataRoute } from "next";
import { getAllWorks, getData } from "./lib/serverActions";
import { IMyWorksData, InfoData } from "./lib/interfaces";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const infoData: InfoData[] = await getData();
    const workData: IMyWorksData[] = await getAllWorks()


    const infoDataEntries: MetadataRoute.Sitemap = infoData.map((info: InfoData) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/info/${info.currentSlug}`
    }));

    const worksDataEntries: MetadataRoute.Sitemap = workData.map((work: IMyWorksData) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/myWorks/${work.currentSlug}`
    }))


    return [
        {
            url: `${process.env.NEXT_PUBLIC_URL}/me`,
        },
        ...infoDataEntries,
        ...worksDataEntries,
    ]
}