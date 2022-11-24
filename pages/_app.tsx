import '../styles/globals.css'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const DarkModeSwitch = dynamic(() => import('components/DarkModeSwitch'))

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider> <DarkModeSwitch/><Component {...pageProps} /></ChakraProvider>
}
