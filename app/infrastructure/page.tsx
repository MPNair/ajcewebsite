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
  Icon,
  Image,
  Divider,
} from '@chakra-ui/react'
import AppLayout from '@/components/layouts/AppLayout'
import { Library, Users, FlaskConical, Wifi, Dumbbell, Trees } from 'lucide-react'

const facilities = [
  {
    icon: FlaskConical,
    title: 'Modern Laboratories',
    description:
      'State-of-the-art laboratories equipped with latest technology and equipment for hands-on learning across all departments.',
    details: [
      'Computing labs with high-end systems',
      'Specialized engineering labs',
      'Research labs with advanced equipment',
      '24/7 lab access for students',
    ],
  },
  {
    icon: Library,
    title: 'Digital Library',
    description:
      'Comprehensive library with extensive collection of books, journals, e-books, and online resources.',
    details: [
      '50,000+ physical books',
      'Access to 2,000+ e-journals',
      'Online research databases',
      'Quiet study zones and group study areas',
    ],
  },
  {
    icon: Wifi,
    title: 'Technology Infrastructure',
    description: 'Campus-wide Wi-Fi connectivity and smart classrooms for enhanced learning.',
    details: [
      'High-speed internet connectivity',
      'Smart classrooms with projectors and AV systems',
      'Digital learning management system',
      'Video conferencing facilities',
    ],
  },
  {
    icon: Users,
    title: 'Hostels & Accommodation',
    description: 'Comfortable residential facilities for students with all modern amenities.',
    details: [
      'Separate hostels for boys and girls',
      'Well-furnished rooms',
      'Dining hall with nutritious meals',
      '24/7 security and support staff',
    ],
  },
  {
    icon: Dumbbell,
    title: 'Sports & Recreation',
    description: 'Modern sports facilities and recreational areas for student wellness.',
    details: [
      'Indoor and outdoor sports facilities',
      'Gymnasium with modern equipment',
      'Basketball and volleyball courts',
      'Cricket field and athletic track',
    ],
  },
  {
    icon: Trees,
    title: 'Green Campus',
    description: 'Eco-friendly campus with lush green surroundings and sustainability practices.',
    details: [
      'Landscaped gardens',
      'Solar power systems',
      'Rainwater harvesting',
      'Environmental conservation programs',
    ],
  },
]

const academicBuildings = [
  {
    name: 'Main Academic Block',
    description: 'Classrooms for all engineering departments with modern teaching aids',
    floors: 4,
    capacity: '800+ students',
  },
  {
    name: 'Engineering Laboratory Complex',
    description: 'Dedicated labs for CSE, EC, Mechanical, Civil, and Electrical departments',
    floors: 3,
    capacity: '500+ students per shift',
  },
  {
    name: 'Research & Development Center',
    description: 'Advanced research facilities and innovation labs',
    floors: 2,
    capacity: '100+ researchers',
  },
  {
    name: 'Central Library Building',
    description: 'Multi-floor library with reading halls and digital resource center',
    floors: 3,
    capacity: '300+ simultaneous users',
  },
]

const facilities_in_detail = [
  {
    category: 'Classrooms & Lecture Halls',
    items: [
      'Air-conditioned classrooms with modern furniture',
      'Interactive whiteboards and projectors',
      'Capacity ranging from 50-200 students',
      'Good acoustics and lighting',
    ],
  },
  {
    category: 'Dining & Food Services',
    items: [
      'Main dining hall with capacity for 500+ students',
      'Hygienic food preparation areas',
      'Nutritious and varied menu options',
      'Special dietary options available',
    ],
  },
  {
    category: 'Medical & Health',
    items: [
      'On-campus medical center',
      'Doctor and nursing staff available',
      'First aid and emergency services',
      'Health awareness programs',
    ],
  },
  {
    category: 'Administrative Offices',
    items: [
      'Admissions office',
      'Student welfare office',
      'Finance and accounting department',
      'HR and personnel management',
    ],
  },
  {
    category: 'Co-curricular Spaces',
    items: [
      'Auditorium for events and seminars',
      'Conference halls for meetings',
      'Student activity center',
      'Art and craft studios',
    ],
  },
  {
    category: 'Parking & Transportation',
    items: [
      'Dedicated parking areas',
      'Shuttle service for students and staff',
      'Easy access to public transportation',
      'Safe and well-lit pathways',
    ],
  },
]

export default function InfrastructurePage() {
  return (
    <AppLayout>
      <Container maxW="6xl" py={12}>
        {/* Header */}
        <VStack spacing={4} align="start" mb={12}>
          <Heading as="h1" size="2xl" color="brand.primary">
            Infrastructure & Facilities
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Explore our modern campus facilities designed for academic excellence and student growth
          </Text>
        </VStack>

        <Divider my={8} />

        {/* Key Facilities Grid */}
        <Box mb={12}>
          <Heading as="h2" size="lg" mb={8}>
            Key Facilities
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {facilities.map((facility, idx) => (
              <Card key={idx} boxShadow="md" _hover={{ boxShadow: 'lg' }}>
                <CardBody>
                  <VStack align="start" spacing={4}>
                    <Icon as={facility.icon} w={10} h={10} color="brand.primary" />
                    <Heading as="h3" size="md">
                      {facility.title}
                    </Heading>
                    <Text color="gray.600" fontSize="sm">
                      {facility.description}
                    </Text>
                    <VStack align="start" spacing={2} w="100%">
                      {facility.details.map((detail, i) => (
                        <HStack key={i} spacing={2}>
                          <Box w={2} h={2} bg="brand.primary" rounded="full" />
                          <Text fontSize="sm">{detail}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        <Divider my={8} />

        {/* Academic Buildings */}
        <Box mb={12}>
          <Heading as="h2" size="lg" mb={8}>
            Academic Buildings
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {academicBuildings.map((building, idx) => (
              <Card key={idx} boxShadow="md" borderLeft="4px" borderLeftColor="brand.primary">
                <CardBody>
                  <Heading as="h3" size="md" mb={3}>
                    {building.name}
                  </Heading>
                  <Text color="gray.600" mb={4}>
                    {building.description}
                  </Text>
                  <HStack spacing={6}>
                    <Box>
                      <Text fontSize="sm" color="gray.500">
                        <strong>Floors:</strong>
                      </Text>
                      <Text>{building.floors}</Text>
                    </Box>
                    <Box>
                      <Text fontSize="sm" color="gray.500">
                        <strong>Capacity:</strong>
                      </Text>
                      <Text>{building.capacity}</Text>
                    </Box>
                  </HStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        <Divider my={8} />

        {/* Facilities in Detail */}
        <Box>
          <Heading as="h2" size="lg" mb={8}>
            Facilities in Detail
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {facilities_in_detail.map((facility, idx) => (
              <Card key={idx} boxShadow="md">
                <CardBody>
                  <Heading as="h3" size="md" mb={4} color="brand.primary">
                    {facility.category}
                  </Heading>
                  <VStack align="start" spacing={3}>
                    {facility.items.map((item, i) => (
                      <HStack key={i} spacing={3}>
                        <Box w={2} h={2} bg="brand.primary" rounded="full" flexShrink={0} />
                        <Text fontSize="sm">{item}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </AppLayout>
  )
}
