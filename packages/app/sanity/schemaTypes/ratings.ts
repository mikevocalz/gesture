export default {
  name: 'ratings',
  title: 'Ratings',
  type: 'document',
  fields: [
    {
      name: 'value',
      title: 'Rating Value',
      type: 'number',
      validation: Rule => Rule.required().min(0).max(5).precision(1),
      description: 'Rate from 0 (worst) to 5 (best)',
    },
    {
      name: 'ratedBy',
      title: 'Rated By',
      type: 'reference',
      to: [{type: 'users'}], // Adjust this type to match your user schema
      description: 'Who submitted the rating',
    },
    {
      name: 'ratedItem',
      title: 'Rated Item',
      type: 'reference',
      to: [{type: 'products'}], 
      description: 'The item being rated',
    },
  ],
}
