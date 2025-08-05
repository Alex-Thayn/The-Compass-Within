import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="The Compass Within"
      description="Rooted in Self-Trust, Guided by the Inner Compass"
    >
      <main style={{ padding: '2rem', maxWidth: '750px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          🌿 The Compass Within
        </h1>
        <h2 style={{ fontWeight: 'normal', color: '#666', marginBottom: '2rem' }}>
          Rooted in Self-Trust, Guided by the Inner Compass
        </h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          A quiet, evolving space for healing, reflection, and integration. This is a library of tools, stories, and research that supports emotional wellness and wholeness. Built from lived experience. Offered with care.
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h3>🌱 Explore</h3>
          <ul>
            <li><strong>Mental Health Worksheets:</strong> Tools for grounding, regulation, and nervous system support.</li>
            <li><strong>Reflections:</strong> Personal stories and essays about healing and becoming.</li>
            <li><strong>Wellness Research:</strong> Curated studies and insights that support sustainable care.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3>💬 Why This Project?</h3>
          <p>
            This space was created as a gentle return — to what matters, to what’s real, to the quiet knowing inside. 
            It’s not about fixing. It’s about integrating all parts of who we are and trusting the process.
          </p>
        </section>

        <section>
          <h3>💌 From the Creator</h3>
          <p>
            I built this because I needed it. And maybe you do too.  
            Take what resonates. Leave the rest. You’re welcome here.
          </p>
        </section>
      </main>
    </Layout>
  );
}
