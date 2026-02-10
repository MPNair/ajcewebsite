'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import AppLayout from '@/components/layouts/AppLayout'
import { apiClient } from '@/lib/api'
import CourseDetail from '@/components/CourseDetail'
import {
  Box,
  Container,
  Spinner,
  Center,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function CoursePage() {
  const params = useParams() as { id?: string }
  const id = params?.id
  const [course, setCourse] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchCourse = async () => {
      try {
        setIsLoading(true)
        const res = await apiClient.getCourse(id)
        setCourse(res.data)
      } catch (err: any) {
        console.error('Failed to fetch course:', err)
        setError(err?.message || 'Failed to load course')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourse()
  }, [id])

  return (
    <AppLayout>
      <Box bg="gray.50" minH="calc(100vh - 80px)" py={8}>
        <Container maxW="1000px">
          <Button mb={4} as={Link} href="/courses" variant="ghost">
            ← Back to courses
          </Button>

          {isLoading ? (
            <Center py={24}>
              <Spinner colorScheme="brand" size="lg" />
            </Center>
          ) : error ? (
            <Center py={24}>
              <Heading size="md" mb={2}>
                Error
              </Heading>
              <Text color="red.600">{error}</Text>
            </Center>
          ) : course ? (
            <CourseDetail course={course} />
          ) : (
            <Center py={24}>
              <Heading size="md">Course not found</Heading>
              <Text color="gray.600">The requested course does not exist.</Text>
            </Center>
          )}
        </Container>
      </Box>
    </AppLayout>
  )
}
