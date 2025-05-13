import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs', '83b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'dd0'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '246'),
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
                path: '/docs/Documentation/Prompt Task Template',
                component: ComponentCreator('/docs/Documentation/Prompt Task Template', '476'),
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
                path: '/docs/Docusaurus/intro',
                component: ComponentCreator('/docs/Docusaurus/intro', '3ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/Docusaurus/tutorial-basics/congratulations', '8bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/Docusaurus/tutorial-basics/create-a-blog-post', '8f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/Docusaurus/tutorial-basics/create-a-document', 'f27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/Docusaurus/tutorial-basics/create-a-page', '3ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/Docusaurus/tutorial-basics/deploy-your-site', '4ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/Docusaurus/tutorial-basics/markdown-features', '5f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/tutorial-basics/sidebar',
                component: ComponentCreator('/docs/Docusaurus/tutorial-basics/sidebar', 'c0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/Docusaurus/tutorial-extras/manage-docs-versions', 'df7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/Docusaurus/tutorial-extras/translate-your-site', '603'),
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
