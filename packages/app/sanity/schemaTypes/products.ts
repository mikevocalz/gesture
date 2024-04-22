import {defineField, defineType} from 'sanity'

export default defineType({
name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot for precise control over how images are cropped and zoomed
      }
    },
   {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'categories'}]}],
      
    },
       {
      name: 'subcategory',
      title: 'Sub Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'subcategories'}]}],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'averageRating',
      title: 'Average Rating',
      type: 'number',
      description: 'Calculated average rating of the product',
      readOnly: true, // Make this field read-only in the Sanity Studio as it should be calculated by a backend process
    },
    {
      name: 'ratingsCount',
      title: 'Ratings Count',
      type: 'number',
      description: 'The number of ratings this product has received',
      readOnly: true,
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },

    
  ],
})
