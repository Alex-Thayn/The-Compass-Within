import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Worksheets(): JSX.Element {
  return (
    <Layout
      title="Worksheets"
      description="Tools for grounding and nervous system regulation."
    >
      <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1>Mental Health Worksheets</h1>
        <p>
          Tools for grounding, emotional processing, nervous system regulation, and clarity.
        </p>
        <ul>
          <li>
            <Link to="/docs/worksheets/emotion-wheel">Emotion Wheel</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
