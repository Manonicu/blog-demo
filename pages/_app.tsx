import '../styles/globals.css'
import SEO from 'components/SEO'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const DarkModeSwitch = dynamic(() => import('components/DarkModeSwitch'))

export default function App({ Component, pageProps,router }: AppProps) {
  const {route} = router
  const url = `https://manon.icu${route}`
  return <>
    <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Manon.icu,homepage" />
        <title>Manon.icu | Home</title>
      </Head>
      <SEO url={url} />
      <ChakraProvider> <DarkModeSwitch/><Component {...pageProps} /></ChakraProvider>
  </>
}
