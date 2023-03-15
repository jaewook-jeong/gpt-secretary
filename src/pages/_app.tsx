import Head from 'next/head';
import type { AppProps } from 'next/app'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB"/>
        <link
            href="favicons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
        />
        <link
            href="favicons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
        />
        <link rel="apple-touch-icon" href="favicons/apple-icon-180x180.png"></link>
      </Head>
      <Component {...pageProps} />
  </>
  );
}
