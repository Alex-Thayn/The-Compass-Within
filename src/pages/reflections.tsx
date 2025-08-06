import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Reflections(): JSX.Element {
  return (
    <Layout title="Reflections" description="Personal essays and journal prompts.">
      <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1>Reflections</h1>
        <p>
          Personal stories, journal prompts, and essays about healing, presence, and becoming.
        </p>
        <ul>
          <li>
            <Link to="/docs/reflections/letting-go">Letting Go with Integrity</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
