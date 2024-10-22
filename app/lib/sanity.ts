import {createClient} from 'next-sanity';
import imageBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: "production",
    projectId: "v2ily2hl",
    useCdn: false,
})


const builder = imageBuilder(client)

export function ulrFor(source: SanityImageSource){
    return builder.image(source);
}