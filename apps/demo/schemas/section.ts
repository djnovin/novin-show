export default {
  description: 'This is the section builder.',
  name: 'section',
  type: 'object',
  title: 'Section',
  fields: [
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      description:
        'You can add, remove, and reorder sections. Create a new section by clicking the "Add" button.',
      of: [
        {
          description: 'Header',
          name: 'Header',
          title: 'Header',
          type: 'reference',
          to: [
            {
              type: 'header',
            },
          ],
        },
        {
          description: 'Footer',
          name: 'Footer',
          title: 'Footer',
          type: 'reference',
          to: [
            {
              type: 'footer',
            },
          ],
        },
        {
          description: 'Trending',
          name: 'Trending',
          title: 'Trending',
          type: 'reference',
          to: [
            {
              type: 'trending',
            },
          ],
        },
        {
          description: 'Campaign',
          name: 'Campaign',
          title: 'Campaign',
          type: 'reference',
          to: [
            {
              type: 'campaign',
            },
          ],
        },
      ],
    },
  ],
}
