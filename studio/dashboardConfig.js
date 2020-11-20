export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb83e11706b2212da0b7807',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-xncvqbf7',
                  apiId: '60f511c7-ebe0-4bdd-9eda-11f0193a161e'
                },
                {
                  buildHookId: '5fb83e12649aed0cd875f62b',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-pf8c6t2i',
                  apiId: '15babc2d-b4e7-42e8-afe1-4a9dc0ad240f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nerdi-caveman/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-pf8c6t2i.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
