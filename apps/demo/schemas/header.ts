export default {
  description: 'This is the header.',
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      description: 'This is the header.',
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      description: 'Logo of the header.',
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      description: 'Links to pages.',
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          description: 'Link to a page.',
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              description: 'Link to a page.',
              name: 'link',
              title: 'Link',
              type: 'reference',
              to: [
                {
                  type: 'page',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      description: 'Dropdown menu with icons.',
      name: 'dropdown',
      title: 'Dropdown',
      type: 'array',
      of: [
        {
          description: 'Dropdown item with an icon.',
          name: 'dropdownItem',
          title: 'Dropdown Item',
          type: 'object',
          fields: [
            {
              description: 'SVG representation of the icon.',
              name: 'svg',
              title: 'SVG',
              type: 'string',
            },
            {
              description: 'Link to a page.',
              name: 'link',
              title: 'Link',
              type: 'reference',
              to: [
                {
                  type: 'page',
                },
              ],
              options: {
                required: false,
              },
            },
          ],
        },
      ],
    },
  ],
}
