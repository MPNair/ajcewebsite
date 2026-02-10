'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Grid,
  SimpleGrid,
  HStack,
  Icon,
  Spinner,
  VStack,
  Image,
  Center,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Trophy, BookOpen } from 'lucide-react'
import AppLayout from '@/components/layouts/AppLayout'
import NewsCard from '@/components/NewsCard'
import EventCard from '@/components/EventCard'
import CourseCard from '@/components/CourseCard'
import { apiClient } from '@/lib/api'

const MotionBox = motion(Box)

const highlights = [
  {
    icon: BookOpen,
    title: 'Quality Education',
    description: 'Comprehensive curriculum designed for modern engineering challenges',
  },
  {
    icon: Trophy,
    title: 'High Placements',
    description: '95% placement rate with top companies like TCS, Infosys, Cognizant',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Experienced professors committed to student success',
  },
  {
    icon: MapPin,
    title: 'Campus Life',
    description: 'Vibrant student community with clubs, events, and activities',
  },
]

export default function Home() {
  const [newsItems, setNewsItems] = useState([])
  const [events, setEvents] = useState([])
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const [newsRes, eventsRes, coursesRes] = await Promise.all([
          apiClient.getNews(1, 3),
          apiClient.getEvents(),
          apiClient.getCourses(),
        ])
        setNewsItems(newsRes.data || [])
        setEvents(eventsRes.data || [])
        setCourses(coursesRes.data || [])
      } catch (error) {
        console.error('Failed to fetch home data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <AppLayout>
      {/* Hero Section */}
      <Box bg="linear-gradient(135deg, #0B5FFF 0%, #00BFA6 100%)" color="white" py={{ base: 16, md: 24 }} position="relative" overflow="hidden">
        <MotionBox
          position="absolute"
          bottom={-50}
          right={-50}
          width={300}
          height={300}
          borderRadius="full"
          bg="rgba(255, 255, 255, 0.1)"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: 1 }}
        />
        <Container maxW="1200px" position="relative" zIndex={1}>
          <VStack spacing={6} align="flex-start">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading as="h1" size="2xl" mb={4} fontWeight="800">
                Welcome to Amal Jyothi College of Engineering
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} mb={8} maxW="2xl" opacity={0.95}>
                Shaping the Next Generation of Engineers. A beacon of academic excellence, innovation, and holistic development for over two decades.
              </Text>
              <HStack spacing={4}>
                <Button colorScheme="whiteAlpha" size="lg" fontWeight="600">
                  Explore Programs
                </Button>
                <Button variant="outline" size="lg" fontWeight="600" borderColor="white" color="white"_hover={{ bg: 'rgba(255,255,255,0.1)' }}>
                  Apply Now
                </Button>
              </HStack>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Highlights Section */}
      <Box py={{ base: 12, md: 16 }} bg="gray.50">
        <Container maxW="1200px">
          <Heading textAlign="center" mb={12} size="xl">
            Why Choose Amal Jyothi?
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
            {highlights.map((item, idx) => (
              <MotionBox
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Box textAlign="center" p={6} bg="white" borderRadius="12px" shadow="sm" _hover={{ shadow: 'md' }}>
                  <Icon as={item.icon} w={12} h={12} color="brand.500" mx="auto" mb={4} />
                  <Heading size="sm" mb={2}>
                    {item.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {item.description}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Latest News Section */}
      <Box py={{ base: 12, md: 16 }}>
        <Container maxW="1200px">
          <HStack justify="space-between" mb={8}>
            <Heading size="lg">Latest News</Heading>
            <Button rightIcon={<ArrowRight />} variant="ghost" colorScheme="brand">
              View All
            </Button>
          </HStack>
          {isLoading ? (
            <Center py={12}>
              <Spinner colorScheme="brand" />
            </Center>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {newsItems.map((item: any) => (
                <NewsCard
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  excerpt={item.body.substring(0, 150)}
                  author={item.author?.name || 'Unknown'}
                  publishedAt={item.publishedAt}
                  tags={item.tags}
                />
              ))}
            </SimpleGrid>
          )}
        </Container>
      </Box>

      {/* Upcoming Events Section */}
      <Box py={{ base: 12, md: 16 }} bg="gray.50">
        <Container maxW="1200px">
          <HStack justify="space-between" mb={8}>
            <Heading size="lg">Upcoming Events</Heading>
            <Button rightIcon={<ArrowRight />} variant="ghost" colorScheme="brand">
              View All
            </Button>
          </HStack>
          {isLoading ? (
            <Center py={12}>
              <Spinner colorScheme="brand" />
            </Center>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {events.slice(0, 3).map((item: any) => (
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

      {/* Featured Courses Section */}
      <Box py={{ base: 12, md: 16 }}>
        <Container maxW="1200px">
          <HStack justify="space-between" mb={8}>
            <Heading size="lg">Featured Programs</Heading>
            <Button rightIcon={<ArrowRight />} variant="ghost" colorScheme="brand">
              View All
            </Button>
          </HStack>
          {isLoading ? (
            <Center py={12}>
              <Spinner colorScheme="brand" />
            </Center>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {courses.slice(0, 3).map((item: any) => (
                <CourseCard
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  code={item.code}
                  department={item.department?.name || 'Unknown'}
                  credits={item.credits}
                  description={item.description}
                />
              ))}
            </SimpleGrid>
          )}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="brand.500" color="white" py={12}>
        <Container maxW="1200px" textAlign="center">
          <Heading mb={4}>Ready to Start Your Engineering Journey?</Heading>
          <Text mb={8} fontSize="lg" opacity={0.95}>
            Join thousands of successful engineers from Amal Jyothi College of Engineering
          </Text>
          <Button colorScheme="whiteAlpha" size="lg" fontWeight="600">
            Apply Now
          </Button>
        </Container>
      </Box>
    </AppLayout>
  )
}
