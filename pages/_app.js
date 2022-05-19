import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

import Prism from 'prism-react-renderer/prism'
(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-kotlin")
require("prismjs/components/prism-csharp")
require("prismjs/components/prism-swift")

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
