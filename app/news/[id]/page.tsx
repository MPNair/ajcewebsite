'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, Spinner, VStack, HStack, Badge, Divider, Button } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import AppLayout from '@/components/layouts/AppLayout'
import { apiClient } from '@/lib/api'

export default function NewsDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [newsItem, setNewsItem] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        setIsLoading(true)
        const response = await apiClient.getNewsItem(id)
        setNewsItem(response.data)
      } catch (err) {
        setError('Failed to load news item')
        console.error('Error fetching news:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchNewsItem()
    }
  }, [id])

  if (isLoading) {
    return (
      <AppLayout>
        <Container maxW="800px" py={8}>
          <VStack spacing={4}>
            <Spinner size="xl" />
            <Text>Loading news article...</Text>
          </VStack>
        </Container>
      </AppLayout>
    )
  }

  if (error || !newsItem) {
    return (
      <AppLayout>
        <Container maxW="800px" py={8}>
          <VStack spacing={4}>
            <Text color="red.500">{error || 'News article not found'}</Text>
            <Button as={Link} href="/news" leftIcon={<ArrowLeft />}>
              Back to News
            </Button>
          </VStack>
        </Container>
      </AppLayout>
    )
  }

  const pubDate = new Date(newsItem.publishedAt)
  const formattedDate = pubDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <AppLayout>
      <Container maxW="800px" py={8}>
        <VStack spacing={6} align="stretch">
          <Button as={Link} href="/news" variant="ghost" alignSelf="start" leftIcon={<ArrowLeft />}>
            Back to News
          </Button>

          <Box>
            <HStack justify="space-between" mb={4} flexWrap="wrap">
              <Badge colorScheme="blue" fontSize="sm">
                {formattedDate}
              </Badge>
              {newsItem.tags && newsItem.tags.length > 0 && (
                <HStack>
                  {newsItem.tags.map((tag: string) => (
                    <Badge key={tag} colorScheme="orange" fontSize="sm">
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              )}
            </HStack>

            <Heading size="xl" mb={4}>
              {newsItem.title}
            </Heading>

            <Text fontSize="sm" color="gray.600" mb={6}>
              By {newsItem.author}
            </Text>

            <Divider mb={6} />

            <Text fontSize="lg" lineHeight="tall" whiteSpace="pre-wrap">
              {newsItem.content || newsItem.excerpt}
            </Text>
          </Box>
        </VStack>
      </Container>
    </AppLayout>
  )
}