/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  docsSidebar: [
    {
      type: 'html',
      value: '<strong>Getting Started</strong>',
      className: 'sidebar-title',
    },
    'home',
    'fhir-basics',
    {
      type: 'category',
      label: 'Tutorials',
      link: { type: 'doc', id: 'tutorials/index' },
      items: [{ type: 'autogenerated', dirName: 'tutorials' }],
    },
    {
      type: 'category',
      label: 'Medplum App',
      link: { type: 'doc', id: 'app/index' },
      items: [{ type: 'autogenerated', dirName: 'app' }],
    },

    {
      type: 'html',
      value: '<strong>Core Workflows</strong>',
      className: 'sidebar-title',
    },

    {
      type: 'category',
      label: 'Auth and Identity',
      link: { type: 'doc', id: 'auth/index' },
      items: [{ type: 'autogenerated', dirName: 'auth' }],
    },
    {
      type: 'category',
      label: 'Questionnaires',
      link: { type: 'doc', id: 'questionnaires/index' },
      items: [{ type: 'autogenerated', dirName: 'questionnaires' }],
    },
    {
      type: 'category',
      label: 'Care Plans',
      link: { type: 'doc', id: 'careplans/index' },
      items: [{ type: 'autogenerated', dirName: 'careplans' }],
    },
    {
      type: 'category',
      label: 'Charting',
      link: { type: 'doc', id: 'charting/index' },
      items: [{ type: 'autogenerated', dirName: 'charting' }],
    },
    {
      type: 'category',
      label: 'Scheduling',
      link: { type: 'doc', id: 'scheduling/index' },
      items: [{ type: 'autogenerated', dirName: 'scheduling' }],
    },
    {
      type: 'category',
      label: 'Comms and Messaging',
      link: { type: 'doc', id: 'communications/index' },
      items: [{ type: 'autogenerated', dirName: 'communications' }],
    },
    {
      type: 'category',
      label: 'Medications',
      link: { type: 'doc', id: 'medications/index' },
      items: [{ type: 'autogenerated', dirName: 'medications' }],
    },
    {
      type: 'category',
      label: 'Billing and Payments',
      link: { type: 'doc', id: 'billing/index' },
      items: [{ type: 'autogenerated', dirName: 'billing' }],
    },
    {
      type: 'html',
      value: '<strong>Automation</strong>',
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'Bots',
      link: { type: 'doc', id: 'bots/index' },
      items: [{ type: 'autogenerated', dirName: 'bots' }],
    },
    {
      type: 'category',
      label: 'Subscriptions',
      link: { type: 'doc', id: 'subscriptions/index' },
      items: [{ type: 'autogenerated', dirName: 'subscriptions' }],
    },
    {
      type: 'category',
      label: 'CLI',
      link: { type: 'doc', id: 'cli/index' },
      items: [{ type: 'autogenerated', dirName: 'cli' }],
    },
    {
      type: 'html',
      value: '<strong>Reference</strong>',
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'FHIR Datastore',
      link: { type: 'doc', id: 'fhir-datastore/index' },
      items: [{ type: 'autogenerated', dirName: 'fhir-datastore' }],
    },
    {
      type: 'category',
      label: 'Search',
      link: { type: 'doc', id: 'search/index' },
      items: [{ type: 'autogenerated', dirName: 'search' }],
    },
    {
      type: 'category',
      label: 'GraphQL',
      link: { type: 'doc', id: 'graphql/index' },
      items: [{ type: 'autogenerated', dirName: 'graphql' }],
    },
    {
      type: 'category',
      label: 'React UI Components',
      link: { type: 'doc', id: 'ui-components/index' },
      items: [{ type: 'autogenerated', dirName: 'ui-components' }],
    },
    {
      type: 'html',
      value: '<strong>Advanced</strong>',
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'Integrations',
      link: { type: 'doc', id: 'integration/index' },
      items: [{ type: 'autogenerated', dirName: 'integration' }],
    },
    {
      type: 'category',
      label: 'Analytics',
      link: { type: 'doc', id: 'analytics/index' },
      items: [{ type: 'autogenerated', dirName: 'analytics' }],
    },
    {
      type: 'category',
      label: 'Self-Hosting',
      link: { type: 'doc', id: 'self-hosting/index' },
      items: [{ type: 'autogenerated', dirName: 'self-hosting' }],
    },
    {
      type: 'category',
      label: 'Contributing',
      link: { type: 'doc', id: 'contributing/index' },
      items: [{ type: 'autogenerated', dirName: 'contributing' }],
    },
    {
      type: 'category',
      label: 'Compliance',
      link: { type: 'doc', id: 'compliance/index' },
      items: [{ type: 'autogenerated', dirName: 'compliance' }],
    },
  ],
  apiSidebar: [
    'api/index',
    {
      type: 'category',
      label: 'TypeScript SDK',
      link: { type: 'doc', id: 'sdk/index' },
      items: [
        { type: 'doc', id: 'sdk/classes/MedplumClient', label: 'MedplumClient' },
        { type: 'doc', id: 'sdk/modules', label: 'Utilities' },
        { 'Bot Utilities': ['sdk/classes/Hl7Message', 'sdk/interfaces/BotEvent'] },
        {
          'Media Utilities': {
            PDF: ['sdk/interfaces/CreatePdfFunction'],
            Email: ['sdk/interfaces/MailOptions', 'sdk/interfaces/MailAttachment', 'sdk/interfaces/MailAddress'],
          },
        },
      ],
    },
    {
      type: 'autogenerated',
      dirName: 'api',
    },
  ],
};

module.exports = sidebars;
