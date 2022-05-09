import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React from 'react'
import Theme from '../components/layout/Theme'
import '@rainbow-me/rainbowkit/styles.css'
import {
  apiProvider,
  configureChains,
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme
} from '@rainbow-me/rainbowkit'
import { createClient, chain, WagmiProvider } from 'wagmi'

/* WAGMI & Rainbowkit config */
const { provider, chains } = configureChains(
  [chain.polygon],
  [
    apiProvider.jsonRpc((chain) => ({
      rpcUrl: `https://${chain.id}.example.com`
    }))
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Computor',
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <ChakraProvider theme={Theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiProvider>
  )
}

export default MyApp
