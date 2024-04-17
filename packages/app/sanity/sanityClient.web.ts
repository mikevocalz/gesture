import createImageUrlBuilder from '@sanity/image-url';
import {createClient} from 'next-sanity'

const proID = 'p63lpzu8';
const token =
  'skXrNyuug5cyDF3xmV1ozMiQQ7OVjsszuM2I2r6UdAv9qcgpLKf1OcsxBBBLIJmPZz959ylzvrwa5oRrSvJNpKUWRrNZ3iRzmMBSUR1BHJYozBKOZBPBgYsS9jXGuoJDsTC8n69PygQJknXuiSpGHrl31WM0YwD9PeGrtjx1jhBui0cAHSGP';
const dataset = 'production';

export const config = {
  token,
  projectId: proID,
  dataset,
  apiVersion: '2023-05-03 ', // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
};



export const sanityClientWeb = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
