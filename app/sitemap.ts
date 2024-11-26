import { MetadataRoute } from "next";
import { getAllWorks, getData } from "./lib/serverActions";
import { IMyWorksData, InfoData } from "./lib/interfaces";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const infoData: InfoData[] = await getData();
    const workData: IMyWorksData[] = await getAllWorks()


    const infoDataEntries: MetadataRoute.Sitemap = infoData.map((info: InfoData) => ({
        url: `https://luminatelabs.netlify.app/info/${info.currentSlug}`
    }));

    const worksDataEntries: MetadataRoute.Sitemap = workData.map((work: IMyWorksData) => ({
        url: `https://luminatelabs.netlify.app/myWorks/${work.currentSlug}`
    }))


    return [
        {
            url: `https://luminatelabs.netlify.app/me`,
        },
        ...infoDataEntries,
        ...worksDataEntries,
    ]
}