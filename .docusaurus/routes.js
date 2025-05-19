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
    path: '/docs',
    component: ComponentCreator('/docs', 'e4a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '0f2'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '695'),
            routes: [
              {
                path: '/docs/Activités/Analyse des tests/Analyse and improve test coverage',
                component: ComponentCreator('/docs/Activités/Analyse des tests/Analyse and improve test coverage', '8fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Activités/Analyse des tests/Generate and analyse User Stories',
                component: ComponentCreator('/docs/Activités/Analyse des tests/Generate and analyse User Stories', '98b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Activités/Conception/Generate API Automated tested',
                component: ComponentCreator('/docs/Activités/Conception/Generate API Automated tested', '84b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Activités/Conception/Generer un cas de tests',
                component: ComponentCreator('/docs/Activités/Conception/Generer un cas de tests', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Activités/Conception/Generer un cas de tests V2',
                component: ComponentCreator('/docs/Activités/Conception/Generer un cas de tests V2', 'e90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Activités/Execution/Analyse test execution',
                component: ComponentCreator('/docs/Activités/Execution/Analyse test execution', '7f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/activités',
                component: ComponentCreator('/docs/category/activités', 'b7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/analyse',
                component: ComponentCreator('/docs/category/analyse', '244'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/conception',
                component: ComponentCreator('/docs/category/conception', 'b55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/documentation',
                component: ComponentCreator('/docs/category/documentation', '275'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/exécution',
                component: ComponentCreator('/docs/category/exécution', 'f72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/générer-un-cas-de-test-à-partir-dune-us',
                component: ComponentCreator('/docs/category/générer-un-cas-de-test-à-partir-dune-us', 'f8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tâches-de-prompts',
                component: ComponentCreator('/docs/category/tâches-de-prompts', '47a'),
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
                path: '/docs/Documentation/Comment créer une fiche',
                component: ComponentCreator('/docs/Documentation/Comment créer une fiche', 'ed6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Docusaurus/intro',
                component: ComponentCreator('/docs/Documentation/Docusaurus/intro', '59b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Docusaurus/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/Documentation/Docusaurus/tutorial-basics/congratulations', '5ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Docusaurus/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/Documentation/Docusaurus/tutorial-basics/create-a-blog-post', 'c12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Docusaurus/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/Documentation/Docusaurus/tutorial-basics/create-a-document', 'afa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Docusaurus/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/Documentation/Docusaurus/tutorial-basics/create-a-page', 'f62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Docusaurus/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/Documentation/Docusaurus/tutorial-basics/deploy-your-site', '43e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Docusaurus/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/Documentation/Docusaurus/tutorial-basics/markdown-features', '544'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Docusaurus/tutorial-basics/sidebar',
                component: ComponentCreator('/docs/Documentation/Docusaurus/tutorial-basics/sidebar', 'fea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Docusaurus/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/Documentation/Docusaurus/tutorial-extras/manage-docs-versions', '60a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Docusaurus/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/Documentation/Docusaurus/tutorial-extras/translate-your-site', '92d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Template cas usage',
                component: ComponentCreator('/docs/Documentation/Template cas usage', 'b7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation/Template Tache de prompt',
                component: ComponentCreator('/docs/Documentation/Template Tache de prompt', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Prompt/PROMPT_Generer_un_cas_de_test/Prompt_complexe',
                component: ComponentCreator('/docs/Prompt/PROMPT_Generer_un_cas_de_test/Prompt_complexe', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Prompt/PROMPT_Generer_un_cas_de_test/Prompt_moyen_variant',
                component: ComponentCreator('/docs/Prompt/PROMPT_Generer_un_cas_de_test/Prompt_moyen_variant', '862'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Prompt/PROMPT_Generer_un_cas_de_test/Prompt_simple',
                component: ComponentCreator('/docs/Prompt/PROMPT_Generer_un_cas_de_test/Prompt_simple', '248'),
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
