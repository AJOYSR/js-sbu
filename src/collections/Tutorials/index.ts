import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { getServerSideURL } from '@/utilities/getURL'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'

const Tutorials: CollectionConfig = {
  slug: 'tutorials',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'level', 'updatedAt'],
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'tutorials',
      })

      return `${getServerSideURL()}${path}`
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              required: true,
            },
          ],
        },
        {
          label: 'Media & Details',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'youtubeUrl',
              type: 'text',
              admin: {
                description:
                  'Enter the YouTube video URL (e.g., https://www.youtube.com/watch?v=xxxxx or https://youtu.be/xxxxx)',
                placeholder: 'https://www.youtube.com/watch?v=xxxxx',
              },
              validate: (value) => {
                if (value) {
                  const youtubeRegex =
                    /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}([?&].*)?$/
                  if (!youtubeRegex.test(value)) {
                    return 'Please enter a valid YouTube URL'
                  }
                }
                return true
              },
            },
            {
              name: 'category',
              type: 'select',
              required: true,
              options: [
                { label: 'Web Development', value: 'web-development' },
                { label: 'Mobile Development', value: 'mobile-development' },
                { label: 'Backend Development', value: 'backend-development' },
                { label: 'AI & ML', value: 'ai-ml' },
                { label: 'DevOps', value: 'devops' },
              ],
            },
            {
              name: 'level',
              type: 'select',
              required: true,
              options: [
                { label: 'Beginner', value: 'beginner' },
                { label: 'Intermediate', value: 'intermediate' },
                { label: 'Advanced', value: 'advanced' },
              ],
            },
            {
              name: 'duration',
              type: 'text',
              required: true,
              admin: {
                description: 'Example: 4 hours',
              },
            },
            {
              name: 'lessons',
              type: 'number',
              required: true,
              min: 1,
            },
            {
              name: 'rating',
              type: 'number',
              required: true,
              min: 0,
              max: 5,
              defaultValue: 5,
            },
            {
              name: 'prerequisites',
              type: 'array',
              fields: [
                {
                  name: 'requirement',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'learningOutcomes',
              type: 'array',
              fields: [
                {
                  name: 'outcome',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      required: true,
    },
    ...slugField(),
  ],
}

export default Tutorials
