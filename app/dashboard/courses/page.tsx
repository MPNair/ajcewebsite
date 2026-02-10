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
  Select,
} from '@chakra-ui/react'
import CourseCard from '@/components/CourseCard'
import { apiClient } from '@/lib/api'

export default function CoursesPage() {
  const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState('')
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const [coursesRes, deptsRes] = await Promise.all([apiClient.getCourses(), apiClient.getDepartments()])
        setCourses(coursesRes.data || [])
        setDepartments(deptsRes.data || [])
      } catch (error) {
        console.error('Failed to fetch courses:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    let filtered = courses

    if (searchTerm) {
      filtered = filtered.filter(
        (course: any) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.code.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedDept) {
      filtered = filtered.filter((course: any) => course.department?._id === selectedDept)
    }

    setFilteredCourses(filtered)
  }, [searchTerm, selectedDept, courses])

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="1000px">
        <VStack spacing={6} align="stretch">
          <Box>
            <Heading mb={2}>All Courses</Heading>
          </Box>

          {/* Filters */}
          <HStack spacing={4} wrap="wrap">
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="md"
              maxW={{ base: '100%', md: '200px' }}
            />
            <Select
              placeholder="Filter by department"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              maxW={{ base: '100%', md: '200px' }}
            >
              {departments.map((dept: any) => (
                <option key={dept._id} value={dept._id}>
                  {dept.name}
                </option>
              ))}
            </Select>
            {(searchTerm || selectedDept) && (
              <Button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedDept('')
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            )}
          </HStack>

          {/* Courses Grid */}
          {isLoading ? (
            <Center py={12}>
              <Spinner colorScheme="brand" />
            </Center>
          ) : filteredCourses.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {filteredCourses.map((course: any) => (
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
            <Center py={12}>
              <Box textAlign="center">
                <Heading size="md" color="gray.500">
                  No courses found
                </Heading>
              </Box>
            </Center>
          )}
        </VStack>
      </Container>
    </Box>
  )
}
