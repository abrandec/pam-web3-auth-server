import { Box, Button, Center } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layout/Layout'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useSignMessage } from 'wagmi'

function HomeIndex(): JSX.Element {
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'TEST_DATA'
  })

  return (
    <Layout>
      <Center>
        <Box flex="center">
          <Button disabled={isLoading} onClick={() => signMessage()}>
            Authenticate Login
          </Button>
        </Box>
      </Center>
    </Layout>
  )
}

export default HomeIndex
