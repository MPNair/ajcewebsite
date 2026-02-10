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
  Badge,
  UnorderedList,
  ListItem,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import AppLayout from '@/components/layouts/AppLayout'

const departments = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    description: 'Focused on software development, web technologies, and AI/ML applications',
    founded: 2000,
    hod: 'Dr. James Wilson',
    faculty: 45,
    students: 480,
    laboratories: [
      'Programming Lab',
      'Web Development Lab',
      'AI & ML Lab',
      'Database Management Lab',
      'Cloud Computing Lab',
      'Cybersecurity Lab',
    ],
    specializations: [
      'Artificial Intelligence & Machine Learning',
      'Cloud Computing & DevOps',
      'Web & Mobile Application Development',
      'Cybersecurity',
      'Big Data Analytics',
    ],
  },
  {
    id: 'ec',
    name: 'Electronics & Communication Engineering',
    shortName: 'EC',
    description: 'Specializing in communication systems, embedded systems, and signal processing',
    founded: 2001,
    hod: 'Dr. Sophia Martinez',
    faculty: 35,
    students: 320,
    laboratories: [
      'Digital Electronics Lab',
      'Analog Electronics Lab',
      'Microprocessors Lab',
      'Communication Systems Lab',
      'Signal Processing Lab',
      'RF & Microwave Lab',
    ],
    specializations: [
      'Embedded Systems Design',
      '5G & Wireless Communications',
      'Signal Processing',
      'Internet of Things (IoT)',
      'Analog & RF Design',
    ],
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    shortName: 'ME',
    description: 'Covering thermal systems, machinery design, and manufacturing processes',
    founded: 2000,
    hod: 'Dr. Rajesh Kumar',
    faculty: 38,
    students: 400,
    laboratories: [
      'Thermodynamics Lab',
      'Fluid Mechanics Lab',
      'Strength of Materials Lab',
      'Manufacturing Lab',
      'CAD/CAM Lab',
      'Thermal Engineering Lab',
    ],
    specializations: [
      'Advanced Manufacturing',
      'Thermal Engineering',
      'Automobile Engineering',
      'Robotics & Automation',
      'Computational Fluid Dynamics',
    ],
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    shortName: 'CE',
    description: 'Building expertise in infrastructure, structural design, and environmental engineering',
    founded: 2002,
    hod: 'Dr. Priya Sharma',
    faculty: 32,
    students: 280,
    laboratories: [
      'Soil Mechanics Lab',
      'Concrete Technology Lab',
      'Surveying Lab',
      'Hydraulics Lab',
      'Environmental Engineering Lab',
      'Structural Analysis Lab',
    ],
    specializations: [
      'Smart Infrastructure Design',
      'Structural Engineering',
      'Transportation Engineering',
      'Water Resources Engineering',
      'Green Building Technology',
    ],
  },
  {
    id: 'ee',
    name: 'Electrical & Electronics Engineering',
    shortName: 'EE',
    description: 'Expertise in power systems, electrical machines, and renewable energy',
    founded: 2003,
    hod: 'Dr. Mohammed Ahmed',
    faculty: 36,
    students: 360,
    laboratories: [
      'Power Systems Lab',
      'Electrical Machines Lab',
      'Power Electronics Lab',
      'Control Systems Lab',
      'High Voltage Lab',
      'Renewable Energy Lab',
    ],
    specializations: [
      'Power System Operation & Control',
      'Renewable Energy Systems',
      'Smart Grid Technology',
      'Industrial Automation',
      'Electric Vehicle Technology',
    ],
  },
]

const programStructure = {
  duration: '4 years',
  totalCredits: 160,
  structure: [
    { year: 'Semester 1-2', focus: 'Foundational Concepts', courses: 12 },
    { year: 'Semester 3-4', focus: 'Core Engineering', courses: 14 },
    { year: 'Semester 5-6', focus: 'Specialization', courses: 16 },
    { year: 'Semester 7-8', focus: 'Advanced Topics & Project', courses: 14 },
  ],
}

export default function AcademicsPage() {
  return (
    <AppLayout>
      <Container maxW="6xl" py={12}>
        {/* Page Header */}
        <VStack spacing={4} align="start" mb={12}>
          <Heading as="h1" size="2xl" color="brand.primary">
            Academic Programs
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Explore our five accredited engineering departments offering comprehensive B.Tech programs
          </Text>
        </VStack>

        {/* Program Structure */}
        <Card mb={12} boxShadow="md">
          <CardBody>
            <Heading as="h2" size="lg" mb={6}>
              Program Overview
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Box>
                <Text mb={2}>
                  <strong>Duration:</strong> {programStructure.duration}
                </Text>
                <Text mb={2}>
                  <strong>Total Credits:</strong> {programStructure.totalCredits}
                </Text>
                <Text mb={4}>
                  <strong>Curriculum:</strong> Approved by AKTU, KTU (Now AKTU)
                </Text>
              </Box>
              <Box>
                <Text mb={4}>
                  <strong>Program Features:</strong>
                </Text>
                <UnorderedList>
                  <ListItem>Industry-aligned curriculum</ListItem>
                  <ListItem>Hands-on laboratory experience</ListItem>
                  <ListItem>Project-based learning</ListItem>
                  <ListItem>Internship opportunities</ListItem>
                </UnorderedList>
              </Box>
            </SimpleGrid>
          </CardBody>
        </Card>

        {/* Departments Tabs */}
        <Box mb={12}>
          <Heading as="h2" size="lg" mb={6}>
            Our Departments
          </Heading>
          <Tabs variant="enclosed">
            <TabList>
              {departments.map((dept) => (
                <Tab key={dept.id}>{dept.shortName}</Tab>
              ))}
            </TabList>

            <TabPanels>
              {departments.map((dept) => (
                <TabPanel key={dept.id}>
                  <VStack spacing={6} align="start">
                    <Box>
                      <Heading as="h3" size="lg" mb={2}>
                        {dept.name}
                      </Heading>
                      <Text color="gray.600" mb={4}>
                        {dept.description}
                      </Text>
                      <HStack spacing={4} wrap="wrap">
                        <Badge colorScheme="blue">Founded {dept.founded}</Badge>
                        <Badge colorScheme="green">{dept.students} Students</Badge>
                        <Badge colorScheme="purple">{dept.faculty} Faculty</Badge>
                      </HStack>
                    </Box>

                    <Box>
                      <Heading as="h4" size="md" mb={3}>
                        Head of Department
                      </Heading>
                      <Text>
                        <strong>{dept.hod}</strong>
                      </Text>
                    </Box>

                    <Box>
                      <Heading as="h4" size="md" mb={3}>
                        Laboratories & Facilities
                      </Heading>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                        {dept.laboratories.map((lab, idx) => (
                          <HStack key={idx}>
                            <Box w={2} h={2} bg="brand.primary" rounded="full" />
                            <Text>{lab}</Text>
                          </HStack>
                        ))}
                      </SimpleGrid>
                    </Box>

                    <Box>
                      <Heading as="h4" size="md" mb={3}>
                        Specialization Areas
                      </Heading>
                      <HStack spacing={2} wrap="wrap">
                        {dept.specializations.map((spec, idx) => (
                          <Badge key={idx} colorScheme="orange">
                            {spec}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                  </VStack>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>

        {/* Program Structure Details */}
        <Card boxShadow="md">
          <CardBody>
            <Heading as="h2" size="lg" mb={6}>
              Program Structure
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
              {programStructure.structure.map((sem, idx) => (
                <Card key={idx} bg="brand.light" borderLeft="4px" borderLeftColor="brand.primary">
                  <CardBody>
                    <Heading as="h4" size="sm" mb={2} color="brand.primary">
                      {sem.year}
                    </Heading>
                    <Text fontSize="sm" mb={2}>
                      <strong>Focus:</strong> {sem.focus}
                    </Text>
                    <Text fontSize="sm">
                      <strong>Courses:</strong> {sem.courses}+
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Container>
    </AppLayout>
  )
}
