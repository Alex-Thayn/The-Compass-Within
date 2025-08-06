import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="The Compass Within"
      description="Rooted in Self-Trust, Guided by the Inner Compass."
    >
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>The Compass Within</h1>
          <p className={styles.subtitle}>
            A quiet library for healing, reflection, and integration.
          </p>
          <div className={styles.buttons}>
            <Link to="/worksheets" className="button button--primary">
              Worksheets
            </Link>
            <Link to="/reflections" className="button button--secondary">
              Reflections
            </Link>
            <Link to="/research" className="button button--secondary">
              Research
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
