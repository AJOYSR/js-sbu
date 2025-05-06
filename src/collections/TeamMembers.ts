import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'teamType', 'order', 'updatedAt'],
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'teamType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Leadership',
          value: 'leadership',
        },
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'Mobile Development',
          value: 'mobile-development',
        },
        {
          label: 'UI/UX Design',
          value: 'ui-ux-design',
        },
        {
          label: 'DevOps',
          value: 'devops',
        },
      ],
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Skills',
      labels: {
        singular: 'Skill',
        plural: 'Skills',
      },
      fields: [
        {
          name: 'skill',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Use this to control the display order',
      },
    },
  ],
}
