'use client'

import { useState, useEffect } from 'react'
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    Center,
    Spinner,
} from '@chakra-ui/react'
import AppLayout from '@/components/layouts/AppLayout'
import EventCard from '@/components/EventCard'
import { apiClient } from '@/lib/api'

export default function EventsPage() {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setIsLoading(true)
                const response = await apiClient.getEvents()
                setEvents(response.data || [])
            } catch (error) {
                console.error('Failed to fetch events:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchEvents()
    }, [])

    return (
        <AppLayout>
            <Box bg="gray.50" minH="100vh" py={{ base: 12, md: 16 }}>
                <Container maxW="1200px">
                    <Heading mb={4} size="xl">Upcoming Events</Heading>
                    <Text mb={8} fontSize="lg" color="gray.600">
                        Join us for upcoming workshops, seminars, and cultural activities
                    </Text>

                    {isLoading ? (
                        <Center py={12}>
                            <Spinner colorScheme="brand" size="xl" />
                        </Center>
                    ) : (
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                            {events.map((item: any) => (
                                <EventCard
                                    key={item._id}
                                    id={item._id}
                                    title={item.title}
                                    date={item.date}
                                    location={item.location}
                                    tags={item.tags}
                                    rsvpCount={item.rsvpCount}
                                />
                            ))}
                        </SimpleGrid>
                    )}
                </Container>
            </Box>
        </AppLayout>
    )
}
