'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Badge,
  Select,
  Input,
  Button,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import AppLayout from '@/components/layouts/AppLayout'
import { Mail, Phone } from 'lucide-react'

const facultyData = [
  {
    id: 1,
    name: 'Dr. James Wilson',
    department: 'CSE',
    designation: 'Head of Department',
    qualification: 'Ph.D. (Computer Science)',
    specialization: 'Artificial Intelligence & Machine Learning',
    experience: '18 years',
    email: 'james.wilson@ajce.ac.in',
    phone: '+91-9847-XXXXX',
  },
  {
    id: 2,
    name: 'Dr. Sophia Martinez',
    department: 'EC',
    designation: 'Head of Department',
    qualification: 'Ph.D. (Electronics)',
    specialization: 'Embedded Systems & IoT',
    experience: '16 years',
    email: 'sophia.martinez@ajce.ac.in',
    phone: '+91-9847-XXXXX',
  },
  {
    id: 3,
    name: 'Dr. Rajesh Kumar',
    department: 'Mechanical',
    designation: 'Head of Department',
    qualification: 'Ph.D. (Mechanical Engineering)',
    specialization: 'Advanced Manufacturing',
    experience: '19 years',
    email: 'rajesh.kumar@ajce.ac.in',
    phone: '+91-9847-XXXXX',
  },
  {
    id: 4,
    name: 'Dr. Priya Sharma',
    department: 'Civil',
    designation: 'Head of Department',
    qualification: 'Ph.D. (Civil Engineering)',
    specialization: 'Structural Engineering',
    experience: '17 years',
    email: 'priya.sharma@ajce.ac.in',
    phone: '+91-9847-XXXXX',
  },
  {
    id: 5,
    name: 'Dr. Mohammed Ahmed',
    department: 'EE',
    designation: 'Head of Department',
    qualification: 'Ph.D. (Electrical Engineering)',
    specialization: 'Power Systems & Renewable Energy',
    experience: '15 years',
    email: 'mohammed.ahmed@ajce.ac.in',
    phone: '+91-9847-XXXXX',
  },
  {
    id: 6,
    name: 'Prof. Arjun Nair',
    department: 'CSE',
    designation: 'Associate Professor',
    qualification: 'M.Tech (Computer Science)',
    specialization: 'Cloud Computing',
    experience: '12 years',
    email: 'arjun.nair@ajce.ac.in',
    phone: '+91-9847-XXXXX',
  },
  {
    id: 7,
    name: 'Prof. Anjali Singh',
    department: 'CSE',
    designation: 'Assistant Professor',
    qualification: 'M.Tech (Cybersecurity)',
    specialization: 'Network Security',
    experience: '8 years',
    email: 'anjali.singh@ajce.ac.in',
    phone: '+91-9847-XXXXX',
  },
  {
    id: 8,
    name: 'Prof. Vikram Patel',
    department: 'EC',
    designation: 'Associate Professor',
    qualification: 'M.Tech (VLSI Design)',
    specialization: 'Microelectronics',
    experience: '10 years',
    email: 'vikram.patel@ajce.ac.in',
    phone: '+91-9847-XXXXX',
  },
  {
    id: 9,
    name: 'Prof. Meera Chopra',
    department: 'Mechanical',
    designation: 'Associate Professor',
    qualification: 'M.Tech (Thermal Engineering)',
    specialization: 'Renewable Energy',
    experience: '11 years',
    email: 'meera.chopra@ajce.ac.in',
    phone: '+91-9847-XXXXX',
  },
  {
    id: 10,
    name: 'Prof. Deepak Verma',
    department: 'Civil',
    designation: 'Assistant Professor',
    qualification: 'M.Tech (Structural Engineering)',
    specialization: 'Smart Buildings',
    experience: '7 years',
    email: 'deepak.verma@ajce.ac.in',
    phone: '+91-9847-XXXXX',
  },
]

const departmentOptions = [
  { value: '', label: 'All Departments' },
  { value: 'CSE', label: 'Computer Science & Engineering' },
  { value: 'EC', label: 'Electronics & Communication' },
  { value: 'Mechanical', label: 'Mechanical Engineering' },
  { value: 'Civil', label: 'Civil Engineering' },
  { value: 'EE', label: 'Electrical & Electronics Engineering' },
]

const designationOptions = [
  { value: '', label: 'All Designations' },
  { value: 'Head of Department', label: 'Head of Department' },
  { value: 'Associate Professor', label: 'Associate Professor' },
  { value: 'Assistant Professor', label: 'Assistant Professor' },
]

export default function FacultyPage() {
  const [filteredFaculty, setFilteredFaculty] = useState(facultyData)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState('')
  const [selectedDesignation, setSelectedDesignation] = useState('')

  useEffect(() => {
    let result = facultyData

    if (searchTerm) {
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          f.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedDept) {
      result = result.filter((f) => f.department === selectedDept)
    }

    if (selectedDesignation) {
      result = result.filter((f) => f.designation === selectedDesignation)
    }

    setFilteredFaculty(result)
  }, [searchTerm, selectedDept, selectedDesignation])

  return (
    <AppLayout>
      <Container maxW="7xl" py={12}>
        {/* Header */}
        <VStack spacing={4} align="start" mb={12}>
          <Heading as="h1" size="2xl" color="brand.primary">
            Faculty Directory
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Meet our dedicated team of experienced educators and researchers
          </Text>
        </VStack>

        {/* Filters */}
        <Card mb={8} boxShadow="md">
          <CardBody>
            <VStack spacing={4} align="stretch">
              <Input
                placeholder="Search by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <HStack spacing={4} flexWrap="wrap">
                <Select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)} maxW="300px">
                  {departmentOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Select>
                <Select
                  value={selectedDesignation}
                  onChange={(e) => setSelectedDesignation(e.target.value)}
                  maxW="300px"
                >
                  {designationOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Select>
                {(searchTerm || selectedDept || selectedDesignation) && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedDept('')
                      setSelectedDesignation('')
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </HStack>
            </VStack>
          </CardBody>
        </Card>

        {/* Faculty Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredFaculty.map((faculty) => (
            <Card key={faculty.id} boxShadow="md" _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}>
              <CardBody>
                <VStack spacing={4} align="start">
                  {/* Faculty Header */}
                  <Box w="100%">
                    <Heading as="h3" size="md" mb={2}>
                      {faculty.name}
                    </Heading>
                    <HStack spacing={2} mb={2} wrap="wrap">
                      <Badge colorScheme="blue">{faculty.department}</Badge>
                      <Badge colorScheme="green">{faculty.designation}</Badge>
                    </HStack>
                  </Box>

                  {/* Details */}
                  <Box w="100%" fontSize="sm">
                    <Text mb={2}>
                      <strong>Qualification:</strong> {faculty.qualification}
                    </Text>
                    <Text mb={2}>
                      <strong>Experience:</strong> {faculty.experience}
                    </Text>
                    <Text>
                      <strong>Specialization:</strong> {faculty.specialization}
                    </Text>
                  </Box>

                  {/* Contact */}
                  <Box w="100%" pt={4} borderTop="1px" borderTopColor="gray.200">
                    <HStack spacing={2} mb={2} fontSize="sm">
                      <Mail size={16} />
                      <Text color="brand.primary">{faculty.email}</Text>
                    </HStack>
                    <HStack spacing={2} fontSize="sm">
                      <Phone size={16} />
                      <Text>{faculty.phone}</Text>
                    </HStack>
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {filteredFaculty.length === 0 && (
          <Box textAlign="center" py={12}>
            <Text fontSize="lg" color="gray.600">
              No faculty members found matching your criteria.
            </Text>
          </Box>
        )}

        {/* Summary */}
        <Box mt={12} p={6} bg="brand.light" rounded="md">
          <Text textAlign="center">
            <strong>Total Faculty: {facultyData.length}+</strong> | Showing {filteredFaculty.length} results
          </Text>
        </Box>
      </Container>
    </AppLayout>
  )
}
