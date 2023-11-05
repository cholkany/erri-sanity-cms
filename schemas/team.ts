import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      
    }),
    defineField({
      name: 'index',
      title: 'Index',
      type: 'number',
      
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        
      })
  ],
  orderings: [
    {
      title: 'Team',
      name: 'teamDesc',
      by: [
        {field: 'index', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
