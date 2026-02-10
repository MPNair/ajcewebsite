'use client'

import { Box, Grid } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import DashboardNav from '@/components/DashboardNav'
import { useAuthStore } from '@/lib/store'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = useAuthStore((state) => state.user)
  const token = useAuthStore((state) => state.token)
  const router = useRouter()

  useEffect(() => {
    if (!token || !user) {
      router.push('/login')
    }
  }, [token, user, router])

  if (!token || !user) {
    return null
  }

  return (
    <Grid templateColumns={{ base: '1fr', md: '280px 1fr' }} minH="100vh" gap={0}>
      <Box display={{ base: 'none', md: 'block' }} bg="gray.50">
        <DashboardNav />
      </Box>
      <Box>{children}</Box>
    </Grid>
  )
}
