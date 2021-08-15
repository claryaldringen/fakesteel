import React from 'react'
import Head from 'next/head'

export const WebHead = ({ title }) => (
  <Head>
    <title>{title ? `${title} - FakeSteel Armory` : 'FakeSteel Armory'}</title>
    <link rel="icon" href="/favicon.ico" />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-T5Q44YNGYC"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
      }}
    />
  </Head>
)
