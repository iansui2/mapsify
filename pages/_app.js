import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Mapsify</title>
        <meta name="title" content="Mapsify" />
        <meta property="og:title" content="Mapsify" />
        <meta property="og:image" content="../../logo.png" />
        <link rel="icon" type="image/png" href="../../logo.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )  
}

export default MyApp
