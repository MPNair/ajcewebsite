'use client'

import { Box, VStack, Button, Icon, Text, HStack, Avatar } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuthStore } from '@/lib/store'
import {
  Home,
  BookOpen,
  Calendar,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: Home },
  { label: 'MyCourses', href: '/dashboard/courses', icon: BookOpen },
  { label: 'Events', href: '/dashboard/events', icon: Calendar },
  { label: 'Placements', href: '/dashboard/placements', icon: BarChart3 },
  { label: 'Forum', href: '/dashboard/forum', icon: MessageSquare },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardNav() {
  const pathname = usePathname()
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <Box bg="gray.50" h="100vh" borderRight="1px solid" borderColor="gray.200" overflow="auto" py={4}>
      <VStack spacing={6} align="stretch" px={4}>
        {/* Profile Section */}
        <Box borderBottom="1px solid" borderColor="gray.200" pb={4}>
          <HStack spacing={3} mb={4}>
            <Avatar name={user?.name} size="md" bg="brand.500" color="white" />
            <Box flex={1}>
              <Text fontWeight="600" fontSize="sm">
                {user?.name}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {user?.role}
              </Text>
            </Box>
          </HStack>
        </Box>

        {/* Navigation Items */}
        <VStack spacing={2} align="stretch">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  w="100%"
                  justify="flex-start"
                  variant={isActive ? 'solid' : 'ghost'}
                  colorScheme={isActive ? 'brand' : 'gray'}
                  leftIcon={<Icon as={item.icon} w={4} h={4} />}
                  fontSize="sm"
                >
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </VStack>

        {/* Logout Button */}
        <Box mt="auto" width="100%">
          <Button
            w="100%"
            leftIcon={<Icon as={LogOut} w={4} h={4} />}
            variant="ghost"
            colorScheme="red"
            fontSize="sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}
