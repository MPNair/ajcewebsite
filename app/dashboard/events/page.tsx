'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
  Center,
  VStack,
  HStack,
  Input,
  Button,
} from '@chakra-ui/react'
import EventCard from '@/components/EventCard'
import { apiClient } from '@/lib/api'

export default function EventsPage() {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('upcoming')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await apiClient.getEvents()
        setEvents(res.data || [])
      } catch (error) {
        console.error('Failed to fetch events:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    let filtered = events

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (event: any) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Sort
    if (sortBy === 'upcoming') {
      filtered = filtered.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else if (sortBy === 'popular') {
      filtered = filtered.sort((a: any, b: any) => b.rsvpCount - a.rsvpCount)
    }

    setFilteredEvents(filtered)
  }, [searchTerm, sortBy, events])

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="1000px">
        <VStack spacing={6} align="stretch">
          <Box>
            <Heading mb={2}>Events</Heading>
          </Box>

          {/* Filters */}
          <HStack spacing={4} wrap="wrap">
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="md"
              maxW={{ base: '100%', md: '200px' }}
            />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="upcoming">Upcoming</option>
              <option value="popular">Most Popular</option>
            </select>
          </HStack>

          {/* Events Grid */}
          {isLoading ? (
            <Center py={12}>
              <Spinner colorScheme="brand" />
            </Center>
          ) : filteredEvents.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {filteredEvents.map((event: any) => (
                <EventCard
                  key={event._id}
                  id={event._id}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  tags={event.tags}
                  rsvpCount={event.rsvpCount}
                />
              ))}
            </SimpleGrid>
          ) : (
            <Center py={12}>
              <Heading size="md" color="gray.500">
                No events found
              </Heading>
            </Center>
          )}
        </VStack>
      </Container>
    </Box>
  )
}
