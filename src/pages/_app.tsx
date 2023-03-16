import type { AppProps } from 'next/app';
import Head from 'next/head';
import localFont from 'next/font/local';

import '@/styles/global-css.css';
import { Layout } from '@/components/Layout';

const font = localFont({ src: './SpoqaHanSansNeo-Regular.woff2' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
        <link href="favicons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="favicons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="favicons/apple-icon-180x180.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Layout className={font.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
