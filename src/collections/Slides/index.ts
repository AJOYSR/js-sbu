import { CollectionConfig } from 'payload'

export const Slides: CollectionConfig = {
  slug: 'slides',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gradientOverlay',
      type: 'select',
      defaultValue: 'from-blue-600 to-purple-600',
      options: [
        {
          label: 'Blue to Purple',
          value: 'from-blue-600 to-purple-600',
        },
        {
          label: 'Purple to Pink',
          value: 'from-purple-600 to-pink-600',
        },
        {
          label: 'Pink to Orange',
          value: 'from-pink-600 to-orange-600',
        },
        {
          label: 'Orange to Red',
          value: 'from-orange-600 to-red-600',
        },
      ],
    },
    {
      name: 'ctaButton',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
