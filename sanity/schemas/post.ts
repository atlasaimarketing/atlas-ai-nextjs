import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main headline - should include your main keyword',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the title',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Kameel E. Gaines',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Recommended size: 1200x600 pixels',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        }
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Marketing Leadership', value: 'Marketing Leadership' },
          { title: 'Culture & Retention', value: 'Culture & Retention' },
          { title: 'Case Studies', value: 'Case Studies' },
          { title: 'AI Strategy', value: 'AI Strategy' },
          { title: 'Business Strategy', value: 'Business Strategy' },
          { title: 'AI & Technology', value: 'AI & Technology' },
        ],
      },
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time',
      type: 'string',
      description: 'Auto-calculated or manually entered (e.g., "11 min read")',
      placeholder: 'e.g., 11 min read',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / TL;DR',
      type: 'text',
      description: 'Short summary that appears on listing pages and in search results (1-2 sentences)',
      rows: 3,
      validation: (Rule) => Rule.max(200).required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Optional subtitle that appears below the main title',
      rows: 2,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'The main article content - write from practitioner experience, not theory',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      } ),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: true,
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                description: 'Link to another blog post or page on the Atlas AI website',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'post' }],
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'Call-to-Action Text',
      type: 'string',
      description: 'Optional custom CTA text (defaults to standard CTA if not provided)',
      placeholder: 'e.g., "Ready to transform your marketing strategy? Let\'s talk."',
    }),
    defineField({
      name: 'ctaPosition',
      title: 'CTA Position',
      type: 'string',
      description: 'Where to place the CTA in the article',
      options: {
        list: [
          { title: 'Mid-article (after 50% of content)', value: 'mid' },
          { title: 'End of article', value: 'end' },
        ],
      },
      initialValue: 'end',
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      description: 'Main keywords for this article (for internal reference)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'internalNotes',
      title: 'Internal Notes',
      type: 'text',
      description: 'Private notes about this article (not displayed publicly)',
      rows: 3,
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Toggle to publish or unpublish this post',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'featuredImage',
      published: 'published',
    },
    prepare(selection) {
      const { author, published } = selection
      return {
        ...selection,
        subtitle: `${author ? `by ${author}` : ''} ${published ? '✓ Published' : '✗ Draft'}`,
      }
    },
  },
})
