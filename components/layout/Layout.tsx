import {
  Box,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  ColorModeScript,
  Center
} from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import NextLink from 'next/link'
import React from 'react'

import Head, { MetaProps } from './Head'
import Theme from './Theme'
import { ConnectButton } from '@rainbow-me/rainbowkit'

/**
 * Prop Types
 */
interface LayoutProps {
  children: React.ReactNode
  customMeta?: MetaProps
}

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Head customMeta={customMeta} />
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />

      <header>
        <Box>
          <Flex minWidth="max-content">
            <Container minWidth="max-content" textAlign="center" flex="center">
              <SimpleGrid py="8">
                <Flex>
                  <Spacer />
                  <ConnectButton />
                  <Flex>
                    <Box alignContent="right">
                      <IconButton ml="4" aria-label="Toggle Mode" onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                      </IconButton>
                    </Box>
                  </Flex>
                </Flex>
              </SimpleGrid>
            </Container>
          </Flex>
        </Box>
      </header>
      <Center>
        <main>
          <Container maxWidth="container.xl" display="flex">
            {children}
          </Container>
        </main>
      </Center>
      <footer>
        <Flex minWidth="max-content" pt="200px">
          <Container minWidth="max-content" alignItems="center" flex="">
            <SimpleGrid
              columns={[1, 1, 1, 2]}
              alignItems="center"
              justifyContent="space-between"
              py="8"
            >
              <Flex>
                <Text px="4" py="1">
                  Built by <Link href="https://twitter.com/abran_decarlo">Abran DeCarlo</Link>
                </Text>
                <Spacer />
                <Link px="4" py="1">
                  Github
                </Link>
              </Flex>
            </SimpleGrid>
          </Container>
        </Flex>
      </footer>
    </>
  )
}

export default Layout
