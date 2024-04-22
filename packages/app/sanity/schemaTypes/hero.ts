import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      name: 'titleText',
      title: 'Title Text',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'isLeft',
      title: 'Is Left',
      type: 'boolean',
      description: 'Indicates will have text on left or right of hero image',
    },
    {
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'product',
            title: 'Product',
            type: 'reference',
            to: [{type: 'products'}],
          },
          {
            name: 'titleText',
            title: 'Title Text',
            type: 'string',
          },
          {
            name: 'mainHeading',
            title: 'Main Heading',
            type: 'string',
          },
        ],
      }],
      validation: Rule => Rule.max(3).error('You can only feature up to 3 products.'),
    },
  ],
})
