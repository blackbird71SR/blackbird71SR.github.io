import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export const config = {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '52bkdx7j',
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_END === 'production',
};

export const sanityClient = createClient(config);

const builder = createImageUrlBuilder(config);

export const urlFor = (source: any) => {
  return builder.image(source);
};
