'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, Spinner, VStack, HStack, Badge, Divider, Button, Stack, Icon } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, MapPin, Users } from 'lucide-react'
import AppLayout from '@/components/layouts/AppLayout'
import { apiClient } from '@/lib/api'

export default function EventDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [event, setEvent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setIsLoading(true)
        const response = await apiClient.getEvent(id)
        setEvent(response.data)
      } catch (err) {
        setError('Failed to load event')
        console.error('Error fetching event:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchEvent()
    }
  }, [id])

  if (isLoading) {
    return (
      <AppLayout>
        <Container maxW="800px" py={8}>
          <VStack spacing={4}>
            <Spinner size="xl" />
            <Text>Loading event details...</Text>
          </VStack>
        </Container>
      </AppLayout>
    )
  }

  if (error || !event) {
    return (
      <AppLayout>
        <Container maxW="800px" py={8}>
          <VStack spacing={4}>
            <Text color="red.500">{error || 'Event not found'}</Text>
            <Button as={Link} href="/events" leftIcon={<ArrowLeft />}>
              Back to Events
            </Button>
          </VStack>
        </Container>
      </AppLayout>
    )
  }

  const eventDate = new Date(event.date)
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <AppLayout>
      <Container maxW="800px" py={8}>
        <VStack spacing={6} align="stretch">
          <Button as={Link} href="/events" variant="ghost" alignSelf="start" leftIcon={<ArrowLeft />}>
            Back to Events
          </Button>

          <Box>
            <HStack justify="space-between" mb={4} flexWrap="wrap">
              {event.tags && event.tags.length > 0 && (
                <HStack>
                  {event.tags.map((tag: string) => (
                    <Badge key={tag} colorScheme="purple" fontSize="sm">
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              )}
            </HStack>

            <Heading size="xl" mb={6}>
              {event.title}
            </Heading>

            <Stack spacing={4} mb={6}>
              <HStack>
                <Icon as={Calendar} w={5} h={5} color="brand.500" />
                <Text fontSize="lg">{formattedDate}</Text>
              </HStack>
              <HStack>
                <Icon as={Clock} w={5} h={5} color="brand.500" />
                <Text fontSize="lg">{formattedTime}</Text>
              </HStack>
              <HStack>
                <Icon as={MapPin} w={5} h={5} color="brand.500" />
                <Text fontSize="lg">{event.location}</Text>
              </HStack>
              {event.rsvpCount && (
                <HStack>
                  <Icon as={Users} w={5} h={5} color="brand.500" />
                  <Text fontSize="lg">{event.rsvpCount} people attending</Text>
                </HStack>
              )}
            </Stack>

            <Divider mb={6} />

            <Text fontSize="lg" lineHeight="tall" whiteSpace="pre-wrap">
              {event.description || 'Event details will be updated soon.'}
            </Text>
          </Box>
        </VStack>
      </Container>
    </AppLayout>
  )
}