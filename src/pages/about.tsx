// src/pages/about.tsx

import React from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout title="About" description="Why this project exists">
      <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1>About The Compass Within</h1>
        <p>
          This space was created from lived experience — a quiet, intentional library
          for healing, reflection, and integration. It’s rooted in self-trust and built to support
          emotional wellness with clarity and care.
        </p>
        <p>
          Whether you’re grounding your nervous system, processing grief, or simply needing
          a place to come home to yourself, this project is offered freely and with presence.
        </p>
      </main>
    </Layout>
  );
}
