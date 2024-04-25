
export const productQuery = `*[_type == "products"] {
  _id,
  name,
  price,
  description,
  "image": image.asset->url,
  "images": images[].asset->url
}`;

export const heroQuery = `*[_type == "heroSection"] {
  _id,
  name,
  mainHeading,
  titleText,
  isLeft,
  "image": image.asset->url
}`;


export const categoryQuery = `*[_type == "categories"] {
  _id,
  title,
  description,
  "image": image.asset->url
}`;

export const congratsQuery = ` *[_type == "products" && "Congrats" in categories[]->title]{
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