"use server";
import { client } from "./sanity";

async function getAllInfo() {
  const query = `
    *[_type == "blog"]{
  projectname,
    "currentSlug": slug.current,
    projectimage,
    smalldescription,
    content,
    projectlink
    
}
    `;

  const data = await client.fetch(query);
  return data;
}

const getData = async () => {
  const query = `
    *[_type == "blog"] | order(_createdAt desc){
   title,
     smallDescription,
     "currentSlug": slug.current,
     titleImage,
  }
   `;

  const data = await client.fetch(query);

  return data;
};

const getDataWithInfo = async (slug: string) => {
  const query = `
     *[_type == "blog" && slug.current == '${slug}']{
    title, 
      "currentSlug": slug.current,
      smallDescription,
      content
  }[0]
    `;

  const data = await client.fetch(query);
  return data;
};

const getDataWithWork = async (slug: string) => {
  const query = `
   *[_type == "myworks" && slug.current == '${slug}']{
    projectname,
      "currentSlug": slug.current,
      projectimage,
      smalldescription,
      content,
      projectlink
      
  }[0]
    `;

  const data = await client.fetch(query);
  return data;
};

const getAllWorks = async () => {
  const query = `
    *[_type == "myworks"]{
    projectname,
      "currentSlug": slug.current,
      projectimage,
      smalldescription,
      content,
      projectlink
      
  }
    `;

  const data = await client.fetch(query);
  return data;
};

export { getAllInfo, getDataWithInfo, getData, getDataWithWork, getAllWorks };
