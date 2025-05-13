import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/testing',
    component: ComponentCreator('/testing', '2b2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a8d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f89'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '326'),
            routes: [
              {
                path: '/docs/category/documentation',
                component: ComponentCreator('/docs/category/documentation', '275'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basicss',
                component: ComponentCreator('/docs/category/tutorial---basicss', 'c70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/usecase-ia-and-test',
                component: ComponentCreator('/docs/category/usecase-ia-and-test', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/How to use',
                component: ComponentCreator('/docs/Documentation/How to use', '21c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Usecase Template',
                component: ComponentCreator('/docs/Documentation/Usecase Template', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusauruse/intro',
                component: ComponentCreator('/docs/Docusauruse/intro', 'a5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusauruse/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/Docusauruse/tutorial-basics/congratulations', '814'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusauruse/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/Docusauruse/tutorial-basics/create-a-blog-post', '140'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusauruse/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/Docusauruse/tutorial-basics/create-a-document', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusauruse/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/Docusauruse/tutorial-basics/create-a-page', '59c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusauruse/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/Docusauruse/tutorial-basics/deploy-your-site', '563'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusauruse/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/Docusauruse/tutorial-basics/markdown-features', 'c95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusauruse/tutorial-basics/sidebar',
                component: ComponentCreator('/docs/Docusauruse/tutorial-basics/sidebar', '4de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusauruse/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/Docusauruse/tutorial-extras/manage-docs-versions', '725'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusauruse/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/Docusauruse/tutorial-extras/translate-your-site', '276'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UseCase/Analyse and improve test coverage',
                component: ComponentCreator('/docs/UseCase/Analyse and improve test coverage', '755'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UseCase/Analyse test execution',
                component: ComponentCreator('/docs/UseCase/Analyse test execution', 'f7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UseCase/Generate a test case',
                component: ComponentCreator('/docs/UseCase/Generate a test case', 'd8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UseCase/Generate and analyse User Stories',
                component: ComponentCreator('/docs/UseCase/Generate and analyse User Stories', 'a8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UseCase/Generate API Automated tested',
                component: ComponentCreator('/docs/UseCase/Generate API Automated tested', '60a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
