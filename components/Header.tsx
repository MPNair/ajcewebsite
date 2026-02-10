'use client'

import { Box, Flex, HStack, Button, Icon, Avatar, Menu, MenuButton, MenuList, MenuItem, Container } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SearchIcon } from '@chakra-ui/icons'
import { useAuthStore } from '@/lib/store'
import { useEffect, useState } from 'react'

export default function Header() {
  const router = useRouter()
  const { user, token, logout, restoreSession } = useAuthStore()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    restoreSession()
  }, [restoreSession])

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <Box bg="white" borderBottom="1px solid" borderColor="neutral.100" position="sticky" top={0} zIndex={40}>
      <Container maxW="1200px" py={4}>
        <Flex justify="space-between" align="center" gap={6}>
          <Link href="/">
            <Box fontWeight="700" fontSize="lg" color="brand.500">
              AMAL JYOTHI
            </Box>
          </Link>

          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/academics">Academics</Link>
            <Link href="/admissions">Admissions</Link>
            <Link href="/placements">Placements</Link>
            <Link href="/contact">Contact</Link>
          </HStack>

          <HStack gap={3}>
            <Button variant="ghost" size="sm" leftIcon={<SearchIcon />} display={{ base: 'none', md: 'flex' }} />
            
            {isClient && token && user ? (
              <Menu>
                <MenuButton as={Button} variant="ghost" p={0}>
                  <Avatar name={user.name} size="sm" />
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href={`/profile/${user.id}`}>
                    My Profile
                  </MenuItem>
                  {user.role === 'student' && (
                    <MenuItem as={Link} href="/dashboard">
                      Dashboard
                    </MenuItem>
                  )}
                  <MenuItem as={Link} href="/settings">
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <>
                <Button variant="ghost" size="sm" as={Link} href="/login">
                  Login
                </Button>
                <Button size="sm" bg="brand.500" color="white" as={Link} href="/apply">
                  Apply Now
                </Button>
              </>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
