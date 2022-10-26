import sanityClient from '@sanity/client';
import imageUrlBuiler from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'wyokkc72',
    dataset: 'production',
    apiVersion: '2022-10-07',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuiler(client);

export const urlFor = (source) => builder.image(source)