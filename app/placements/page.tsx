'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Spinner,
  Center,
  Card,
  CardBody,
  HStack,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import AppLayout from '@/components/layouts/AppLayout'
import StatWidget from '@/components/StatWidget'
import PlacementCard from '@/components/PlacementCard'
import { apiClient } from '@/lib/api'

const topCompanies = [
  'Tata Consultancy Services (TCS)',
  'Infosys Limited',
  'Wipro Technologies',
  'Cognizant Technology Solutions',
  'HCL Technologies',
  'Accenture India',
  'Amazon Development Center',
  'Microsoft India',
  'Adobe India',
  'Google India',
]

export default function PlacementsPage() {
  const [stats, setStats] = useState<any>({})
  const [placements, setPlacements] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await apiClient.getPlacements()
        setStats(res.data || {})
        setPlacements(res.data?.placements || [])
      } catch (error) {
        console.error('Failed to fetch placements:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <AppLayout>
      <Box minH="100vh" bg="gray.50" py={12}>
        <Container maxW="1200px">
          <VStack spacing={12} align="stretch">
            {/* Header Section */}
            <Box textAlign="center">
              <Heading mb={4} size="2xl">
                Placements & Career Development
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
                Our commitment to student success is reflected in our exceptional placement statistics
              </Text>
            </Box>

            {/* Stats Grid */}
            {isLoading ? (
              <Center py={12}>
                <Spinner colorScheme="brand" />
              </Center>
            ) : (
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
                <StatWidget label="Total Placements" value={stats.totalPlacements || 0} />
                <StatWidget
                  label="Avg Package"
                  value={`₹${(stats.averagePackage || 0).toFixed(1)} LPA`}
                />
                <StatWidget label="Highest Package" value={`₹${(stats.highestPackage || 0).toFixed(1)} LPA`} />
                <StatWidget label="Companies Recruited" value={stats.companiesCount || 0} />
              </SimpleGrid>
            )}

            {/* Top Recruiting Companies */}
            <Box>
              <Heading mb={6} size="lg">
                Our Top Recruiting Companies
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {topCompanies.map((company, idx) => (
                  <Card key={idx}>
                    <CardBody>
                      <Text fontWeight="600" color="brand.500">
                        {company}
                      </Text>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </Box>

            {/* Recent Placements */}
            <Box>
              <Heading mb={6} size="lg">
                Recent Placements
              </Heading>
              {placements.length > 0 ? (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                  {placements.slice(0, 6).map((placement: any, idx: number) => (
                    <PlacementCard
                      key={idx}
                      company={placement.company}
                      role={placement.role}
                      package={placement.package}
                      year={placement.year}
                      studentName={placement.student?.name || 'Anonymous'}
                    />
                  ))}
                </SimpleGrid>
              ) : (
                <Center py={12}>
                  <Text color="gray.500">No placement records available</Text>
                </Center>
              )}
            </Box>

            {/* Placement Timeline */}
            <Box>
              <Heading mb={6} size="lg">
                Placement Timeline
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Card>
                  <CardBody>
                    <Heading size="sm" color="brand.500" mb={2}>
                      Pre-Final Year
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      • Aptitude training workshops<br />
                      • Personality development sessions<br />
                      • Industry interaction seminars
                    </Text>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <Heading size="sm" color="brand.500" mb={2}>
                      Final Year
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      • Campus recruitment drives<br />
                      • Interview preparation coaching<br />
                      • One-on-one mentoring sessions
                    </Text>
                  </CardBody>
                </Card>
              </SimpleGrid>
            </Box>

            {/* Call to Action */}
            <Box textAlign="center" bg="neutral.900" color="white" p={10} borderRadius="2xl" shadow="xl">
              <Heading mb={4} size="xl">Join Our Success Stories</Heading>
              <Text mb={8} fontSize="lg" color="whiteAlpha.800">
                Be part of our elite alumni network and achieve great career milestones with top global companies.
              </Text>
              <Button as={Link} href="/apply" bg="brand.500" color="white" size="lg" _hover={{ bg: 'brand.600' }}>
                Join AJCE Now
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>
    </AppLayout>
  )
}
