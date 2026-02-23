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
  Select,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AppLayout from '@/components/layouts/AppLayout'
import { useAuthStore } from '@/lib/store'

interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  role: string
  department?: string
}

interface FormErrors {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
  role?: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const toast = useToast()
  const register = useAuthStore((state) => state.register)

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required'
    }

    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!/[A-Z]/.test(formData.password) || !/[0-9]/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase letter and number'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      setIsLoading(true)
      await register({ name: formData.name, email: formData.email, password: formData.password, role: formData.role })
      toast({
        title: 'Registration successful',
        description: 'Redirecting to dashboard...',
        status: 'success',
        duration: 3,
      })
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    } catch (error: any) {
      toast({
        title: 'Registration failed',
        description: error.message || 'Please try again',
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
              <Heading mb={2}>Create Account</Heading>
              <Text color="gray.600">Join Amal Jyothi College community</Text>
            </Box>

            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    size="lg"
                  />
                  {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={!!errors.email}>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    size="lg"
                  />
                  {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                </FormControl>

                <FormControl>
                  <FormLabel>User Type</FormLabel>
                  <Select name="role" value={formData.role} onChange={handleChange} size="lg">
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                    <option value="alumni">Alumni</option>
                  </Select>
                </FormControl>

                <FormControl isInvalid={!!errors.password}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    size="lg"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.confirmPassword}>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    size="lg"
                  />
                  {errors.confirmPassword && <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>}
                </FormControl>

                <Button
                  type="submit"
                  w="full"
                  colorScheme="brand"
                  size="lg"
                  isLoading={isLoading}
                  loadingText="Creating account..."
                >
                  Create Account
                </Button>
              </VStack>
            </form>

            <Box textAlign="center">
              <Text>
                Already have an account?{' '}
                <ChakraLink as={Link} href="/login" color="brand.500" fontWeight="600">
                  Sign in
                </ChakraLink>
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </AppLayout>
  )
}
