import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Research(): JSX.Element {
  return (
    <Layout title="Wellness Research" description="Curated mental health studies and insights.">
      <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1>Research Library</h1>
        <p>
          Curated studies and science-backed insights that support sustainable emotional care.
        </p>
        <ul>
          <li>
            <Link to="/docs/research/polyvagal-theory">The Polyvagal Theory</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
