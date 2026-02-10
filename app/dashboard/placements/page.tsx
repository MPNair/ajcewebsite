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
  Card,
  CardBody,
  Text,
  Input,
  Select,
} from '@chakra-ui/react'
import PlacementCard from '@/components/PlacementCard'
import StatWidget from '@/components/StatWidget'
import Pagination from '@/components/Pagination'
import { apiClient } from '@/lib/api'

export default function PlacementsPage() {
  const [placements, setPlacements] = useState([])
  const [stats, setStats] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 12

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await apiClient.getPlacements()
        setStats(res.data || {})
        setPlacements(res.data?.placements || [])
        setTotalPages(Math.ceil((res.data?.placements?.length || 0) / itemsPerPage))
      } catch (error) {
        console.error('Failed to fetch placements:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredPlacements = placements.filter((p: any) => {
    const matchesSearch = p.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = !selectedYear || p.year === parseInt(selectedYear)
    return matchesSearch && matchesYear
  })

  const paginatedPlacements = filteredPlacements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="1200px">
        <VStack spacing={6} align="stretch">
          <Box>
            <Heading mb={2}>Placement Statistics</Heading>
          </Box>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
            <StatWidget label="Total Placements" value={stats.totalPlacements || 0} />
            <StatWidget label="Avg Package" value={`₹${(stats.averagePackage || 0).toFixed(1)} LPA`} />
            <StatWidget label="Companies Recruited" value={stats.companiesCount || 0} />
            <StatWidget label="Highest Package" value={`₹${(stats.highestPackage || 0).toFixed(1)} LPA`} />
          </SimpleGrid>

          {/* Filters */}
          <HStack spacing={4} wrap="wrap">
            <Input
              placeholder="Search company or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="md"
              maxW={{ base: '100%', md: '300px' }}
            />
            <Select
              placeholder="Filter by batch year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              maxW={{ base: '100%', md: '150px' }}
            >
              {[new Date().getFullYear(), new Date().getFullYear() - 1, new Date().getFullYear() - 2].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </HStack>

          {/* Placements Grid */}
          {isLoading ? (
            <Center py={12}>
              <Spinner colorScheme="brand" />
            </Center>
          ) : paginatedPlacements.length > 0 ? (
            <>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {paginatedPlacements.map((placement: any, idx: number) => (
                  <PlacementCard
                    key={idx}
                    company={placement.company}
                    role={placement.role}
                    package={placement.package}
                    year={placement.year}
                    studentName={placement.student?.name || 'Unknown'}
                  />
                ))}
              </SimpleGrid>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredPlacements.length / itemsPerPage)}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <Center py={12}>
              <Heading size="md" color="gray.500">
                No placements found
              </Heading>
            </Center>
          )}
        </VStack>
      </Container>
    </Box>
  )
}
