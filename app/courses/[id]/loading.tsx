'use client'

import { Center, Spinner, Box } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Box minH="60vh" display="flex" alignItems="center" justifyContent="center">
      <Center>
        <Spinner size="xl" color="brand.500" />
      </Center>
    </Box>
  )
}
