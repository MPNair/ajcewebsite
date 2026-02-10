'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  Checkbox,
  Link as ChakraLink,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AppLayout from '@/components/layouts/AppLayout'
import { useAuthStore } from '@/lib/store'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const router = useRouter()
  const toast = useToast()
  const login = useAuthStore((state) => state.login)

  const validateForm = () => {
    const newErrors: typeof errors = {}

    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      setIsLoading(true)
      await login(email, password)
      toast({
        title: 'Login successful',
        description: 'Redirecting to dashboard...',
        status: 'success',
        duration: 3,
      })
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    } catch (error: any) {
      toast({
        title: 'Login failed',
        description: error.message || 'Invalid email or password',
        status: 'error',
        duration: 5,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AppLayout>
      <Box minH="calc(100vh - 80px)" display="flex" alignItems="center" py={12}>
        <Container maxW="sm">
          <VStack spacing={6} align="stretch">
            <Box textAlign="center">
              <Heading mb={2}>Welcome Back</Heading>
              <Text color="gray.600">Sign in to your account to continue</Text>
            </Box>

            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errors.email) setErrors({ ...errors, email: '' })
                    }}
                    size="lg"
                  />
                  {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={!!errors.password}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      if (errors.password) setErrors({ ...errors, password: '' })
                    }}
                    size="lg"
                  />
                  {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
                </FormControl>

                <HStack justify="space-between" w="full">
                  <Checkbox>Remember me</Checkbox>
                  <ChakraLink as={Link} href="/forgot-password" color="brand.500" fontSize="sm">
                    Forgot password?
                  </ChakraLink>
                </HStack>

                <Button
                  type="submit"
                  w="full"
                  colorScheme="brand"
                  size="lg"
                  isLoading={isLoading}
                  loadingText="Signing in..."
                >
                  Sign In
                </Button>
              </VStack>
            </form>

            <Box textAlign="center">
              <Text>
                Don't have an account?{' '}
                <ChakraLink as={Link} href="/register" color="brand.500" fontWeight="600">
                  Create one
                </ChakraLink>
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </AppLayout>
  )
}
