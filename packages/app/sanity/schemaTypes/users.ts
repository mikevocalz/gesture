import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
     {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
     {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        options: {
          dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
        },
        readOnly: true,
      },
    {
      name: 'orderHistory',
      title: 'Order History',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'orders'}]}],
    },
  ],
    initialValue: {
      createdAt: new Date().toISOString(),
    },
})
