/* eslint-disable import/order */
import { createClient } from '@sanity/client';
import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import { config } from '~/utils/helpers';

const client = createClient(config);

const productQuery = `*[_type == "products"] {
  _id,
  name,
  price,
  description,
  "image": image.asset->url,
  "images": images[].asset->url
}`;

const heroQuery = `*[_type == "heroSection"] {
  _id,
  name,
  mainHeading,
  titleText,
  isLeft,
  "image": image.asset->url
}`;

const categoryQuery = `*[_type == "categories"] {
  _id,
  title,
  description,
  "image": image.asset->url
}`;


export async function GET(request: ExpoRequest) {
  //const products = await client.fetch(productQuery);
  //const hero = await client.fetch(heroQuery);

  function fetchQuery(query:string) {
    try {
      const products = client.fetch(query);
      return products;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      return [];
    }
  }

  const products = await fetchQuery(productQuery);
  const hero = await fetchQuery(heroQuery);
    const categories = await fetchQuery(categoryQuery)

  //console.log('Hey Im hero data: ', hero);

  return ExpoResponse.json({
    products,
    hero,
    categories
  });
}
