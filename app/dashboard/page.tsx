'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  SimpleGrid,
  Card,
  CardBody,
  Spinner,
  Center,
  VStack,
  HStack,
  Badge,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import StatWidget from '@/components/StatWidget'
import CourseCard from '@/components/CourseCard'
import EventCard from '@/components/EventCard'
import { useAuthStore } from '@/lib/store'
import { apiClient } from '@/lib/api'

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user)
  const [courses, setCourses] = useState([])
  const [events, setEvents] = useState([])
  const [placements, setPlacements] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const [coursesRes, eventsRes, placementsRes] = await Promise.all([
          apiClient.getCourses(),
          apiClient.getEvents(),
          apiClient.getPlacements(),
        ])
        setCourses(coursesRes.data || [])
        setEvents(eventsRes.data || [])
        setPlacements(placementsRes.data || {})
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner colorScheme="brand" />
      </Box>
    )
  }

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="1000px">
        <VStack spacing={8} align="stretch">
          {/* Welcome Section */}
          <Box>
            <Heading mb={2}>Welcome back, {user?.name}!</Heading>
            <Text color="gray.600">Here's what's happening on your campus</Text>
          </Box>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
            <StatWidget label="Total Courses" value={courses.length} color="brand" />
            <StatWidget
              label="Upcoming Events"
              value={events.filter((e: any) => new Date(e.date) > new Date()).length}
              color="accent"
            />
            <StatWidget label="Placements" value={placements.totalPlacements || 0} color="green" />
            <StatWidget
              label="Avg Package"
              value={`₹${(placements.averagePackage || 0).toFixed(1)} LPA`}
              color="blue"
            />
          </SimpleGrid>

          {/* Announcements */}
          <Card>
            <CardBody>
              <Heading size="md" mb={4}>
                Latest Announcements
              </Heading>
              <VStack spacing={3} align="stretch">
                <Box p={3} borderLeft="4px solid" borderColor="brand.500" bg="blue.50">
                  <Text fontWeight="600" fontSize="sm">
                    Admissions Open for Fall 2025
                  </Text>
                  <Text fontSize="xs" color="gray.600" mt={1}>
                    Applications are now open for all undergraduate programs
                  </Text>
                </Box>
                <Box p={3} borderLeft="4px solid" borderColor="accent.500" bg="cyan.50">
                  <Text fontWeight="600" fontSize="sm">
                    Career Fair - March 15th
                  </Text>
                  <Text fontSize="xs" color="gray.600" mt={1}>
                    Over 50 companies will be visiting campus
                  </Text>
                </Box>
              </VStack>
            </CardBody>
          </Card>

          {/* Courses Section */}
          <Box>
            <HStack justify="space-between" mb={4}>
              <Heading size="md">Your Courses</Heading>
              <Link href="/dashboard/courses">
                <Button variant="ghost" colorScheme="brand" size="sm">
                  View All
                </Button>
              </Link>
            </HStack>
            {courses.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {courses.slice(0, 4).map((course: any) => (
                  <CourseCard
                    key={course._id}
                    id={course._id}
                    title={course.title}
                    code={course.code}
                    department={course.department?.name || 'Unknown'}
                    credits={course.credits}
                    description={course.description}
                  />
                ))}
              </SimpleGrid>
            ) : (
              <Text color="gray.500">No courses yet</Text>
            )}
          </Box>

          {/* Events Section */}
          <Box>
            <HStack justify="space-between" mb={4}>
              <Heading size="md">Upcoming Events</Heading>
              <Link href="/dashboard/events">
                <Button variant="ghost" colorScheme="brand" size="sm">
                  View All
                </Button>
              </Link>
            </HStack>
            {events.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {events.slice(0, 4).map((event: any) => (
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
              <Text color="gray.500">No upcoming events</Text>
            )}
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
