import {defineType, defineArrayMember} from 'sanity'

export default defineType({
name: 'orders',
  title: 'Orders',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{type: 'users'}],
    },
    {
      name: "message",
      title: "Message",
      type: "string",
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{type: 'products'}],
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        options: {
          dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
        },
        readOnly: true,
      }
      ,{
        name: "paid",
        title: "Paid",
        type: "boolean",
        validation: (Rule) => Rule.required(),
      },
    {
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'InProgress', value: 'inProgress' },
          { title: 'Completed', value: 'completed' },
        ],
        layout: 'radio'
      },
    },
    {
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
    },
  ],
})
