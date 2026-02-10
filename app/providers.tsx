'use client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/lib/theme'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/lib/store'

export function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false)
  const restoreSession = useAuthStore((state) => state.restoreSession)

  useEffect(() => {
    setIsClient(true)
    restoreSession()
  }, [restoreSession])

  if (!isClient) {
    return <>{children}</>
  }

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
