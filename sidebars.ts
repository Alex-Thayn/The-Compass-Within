// sidebars.ts
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      id: 'intro', // maps to docs/intro.md
    },
    {
      type: 'category',
      label: 'Worksheets',
      collapsed: false,
      items: ['worksheets/emotion-wheel'],
    },
    {
      type: 'category',
      label: 'Reflections',
      collapsed: false,
      items: ['reflections/letting-go'],
    },
    {
      type: 'category',
      label: 'Research',
      collapsed: false,
      items: ['research/polyvagal-theory'],
    },
  ],
};

export default sidebars;