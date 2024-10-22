import { TypedObject } from "sanity";

export interface InfoData{
    title: string,
    smallDescription: string;
    currentSlug: string;
    titleImage: string;
    content: TypedObject | TypedObject[]
}

export interface IMyWorksData{
    projectname: string,
    currentSlug: string,
    projectimage: string,
    smalldescription: string,
    content: TypedObject | TypedObject[],
    projectlink: string
}