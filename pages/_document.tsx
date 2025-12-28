import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en' suppressHydrationWarning>
      <Head>
        <meta
          name='google-site-verification'
          content='vX0CNc8WxOGdGmG-WwRywp-zMPwaLF3sPdhue58ONOQ'
        />
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-CJ1SVDW5GM'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CJ1SVDW5GM');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
