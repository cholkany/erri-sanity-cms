import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
  fields: [
    defineField({
        name: 'images',
        type: 'array',
        title: 'Images',
        options: {
            layout: 'grid',
        },
        of: [
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
        }],
      }),
  ],
  preview: {
    select: {
      media: 'image',
    },
  },
})




