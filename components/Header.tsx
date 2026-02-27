'use client'

import { Box, Flex, HStack, Button, Icon, Avatar, Menu, MenuButton, MenuList, MenuItem, Container, Input, InputGroup, InputLeftElement, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { SearchIcon } from '@chakra-ui/icons'
import { useAuthStore } from '@/lib/store'
import { useEffect, useState } from 'react'

export default function Header() {
  const router = useRouter()
  const { user, token, logout, restoreSession } = useAuthStore()
  const [isClient, setIsClient] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
    restoreSession()
  }, [restoreSession])

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <Box bg="transparent" position="sticky" top={0} zIndex={40} pt={3} px={{ base: 3, md: 5 }}>
      <Container maxW="1200px" py={3} className="glass-panel gaze-panel floating-panel" borderRadius="16px">
        <Flex justify="space-between" align="center" gap={6}>
          <NextLink href="/" passHref legacyBehavior>
            <ChakraLink _hover={{ textDecoration: 'none' }}>
              <Box fontWeight="800" fontSize="xl" color="neutral.900" letterSpacing="tight">
                AMAL JYOTHI
              </Box>
            </ChakraLink>
          </NextLink>

          {!isSearchOpen ? (
            <>
              <HStack gap={6} display={{ base: 'none', lg: 'flex' }} color="neutral.800" fontWeight="500">
                <ChakraLink as={NextLink} href="/" _hover={{ color: 'brand.600', transform: 'scale(1.05)' }} transition="all 0.25s ease">Home</ChakraLink>
                <ChakraLink as={NextLink} href="/about" _hover={{ color: 'brand.600', transform: 'scale(1.05)' }} transition="all 0.25s ease">About</ChakraLink>
                <ChakraLink as={NextLink} href="/academics" _hover={{ color: 'brand.600', transform: 'scale(1.05)' }} transition="all 0.25s ease">Academics</ChakraLink>
                <ChakraLink as={NextLink} href="/faculty" _hover={{ color: 'brand.600', transform: 'scale(1.05)' }} transition="all 0.25s ease">Faculty</ChakraLink>
                <ChakraLink as={NextLink} href="/admissions" _hover={{ color: 'brand.600', transform: 'scale(1.05)' }} transition="all 0.25s ease">Admissions</ChakraLink>
                <ChakraLink as={NextLink} href="/placements" _hover={{ color: 'brand.600', transform: 'scale(1.05)' }} transition="all 0.25s ease">Placements</ChakraLink>
                <ChakraLink as={NextLink} href="/contact" _hover={{ color: 'brand.600', transform: 'scale(1.05)' }} transition="all 0.25s ease">Contact</ChakraLink>
              </HStack>

              <HStack gap={3}>
                <Button
                  variant="ghost"
                  size="sm"
                  color="neutral.800"
                  leftIcon={<SearchIcon />}
                  display={{ base: 'none', md: 'flex' }}
                  onClick={() => setIsSearchOpen(true)}
                />

                {isClient && token && user ? (
                  <Menu>
                    <MenuButton as={Button} variant="ghost" p={0}>
                      <Avatar name={user.name} size="sm" />
                    </MenuButton>
                    <MenuList>
                      <MenuItem as={NextLink} href={`/profile/${user.id}`}>
                        My Profile
                      </MenuItem>
                      {user.role === 'student' && (
                        <MenuItem as={NextLink} href="/dashboard">
                          Dashboard
                        </MenuItem>
                      )}
                      <MenuItem as={NextLink} href="/settings">
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" color="neutral.800" as={NextLink} href="/login">
                      Login
                    </Button>
                    <Button size="sm" bg="brand.500" color="white" as={NextLink} href="/apply" _hover={{ bg: 'brand.600' }}>
                      Apply Now
                    </Button>
                  </>
                )}
              </HStack>
            </>
          ) : (
            <Box flex={1} maxW="600px">
              <form onSubmit={handleSearch}>
                <InputGroup size="sm">
                  <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    placeholder="Search articles, courses, events..."
                    bg="whiteAlpha.700"
                    border="none"
                    color="neutral.900"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    onBlur={() => !searchQuery && setIsSearchOpen(false)}
                  />
                </InputGroup>
              </form>
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  )
}
