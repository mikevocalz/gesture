import {createClient} from 'next-sanity'
import { config} from '../../../../expo/utils/helpers'
import { NextResponse } from 'next/server'
 
const client = createClient(config);

const productQuery = `*[_type == "products"] {
  _id,
  name,
  price,
  description,
  "image": image.asset->url,
  "images": images[].asset->url
}`;


const congratsQuery = ` *[_type == "products" && "Congrats" in categories[]->title]{
  name,
   "image": image.asset->url,
  price,
  quantity,
  description,
  averageRating,
  ratingsCount,
  images,
  "categoryTitles": categories[]->title,
  "subCategoryTitles": subcategory[]->title
}
`;





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

export async function GET(request: Request) {
  function fetchQuery(query: string) {
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
  const congrats= await fetchQuery(congratsQuery)

  //console.log('Hey Im hero data: ', hero);


  return NextResponse.json({ 
     products,
    hero,
    categories,
    congrats
   })
}