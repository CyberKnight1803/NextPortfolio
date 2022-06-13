import '../styles/globals.css'

import Head from 'next/head';
import Layout from '../components/Layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Omkar | CyberKnight</title>
      </Head>
      <Component {...pageProps}></Component>
    </Layout>
  );
}

export default MyApp;
