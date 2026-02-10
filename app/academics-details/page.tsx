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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Divider,
} from '@chakra-ui/react'
import AppLayout from '@/components/layouts/AppLayout'

const academicCalendar2024_25 = [
  { event: 'Semester 1 Begins', date: 'August 1, 2024' },
  { event: 'Mid-Semester Examination (Sem 1)', date: 'September 20-24, 2024' },
  { event: 'End Semester Examination (Sem 1)', date: 'November 15-30, 2024' },
  { event: 'Semester 2 Begins', date: 'December 2, 2024' },
  { event: 'Mid-Semester Examination (Sem 2)', date: 'January 25-29, 2025' },
  { event: 'End Semester Examination (Sem 2)', date: 'March 20 - April 5, 2025' },
  { event: 'Summer Vacation', date: 'April 10 - May 30, 2025' },
  { event: 'Odd Semester Begins', date: 'June 1, 2025' },
]

const admissionProcess = [
  {
    step: 1,
    stage: 'Application',
    details: 'Submit online application with required documents',
    timeline: 'January - July',
  },
  {
    step: 2,
    stage: 'Merit Evaluation',
    details: 'Evaluation based on JEE Main/KEAM score and academic records',
    timeline: 'Ongoing',
  },
  {
    step: 3,
    stage: 'Counseling',
    details: 'Attend KEAM/JEE counseling or college-specific interviews',
    timeline: 'July - August',
  },
  {
    step: 4,
    stage: 'Admission',
    details: 'Complete admission formalities and fee payment',
    timeline: 'August - September',
  },
]

const accreditations = [
  {
    body: 'NAAC',
    status: 'Accredited with A+ Grade',
    validUpto: '2027',
    description: 'National Assessment and Accreditation Council accreditation demonstrating institutional excellence',
  },
  {
    body: 'AKTU',
    status: 'Affiliated',
    validUpto: 'Ongoing',
    description: 'Affiliated to APJ Abdul Kalam Technological University (formerly KTU)',
  },
  {
    body: 'ISO 9001:2015',
    status: 'Certified',
    validUpto: '2026',
    description: 'Quality Management System certification',
  },
  {
    body: 'NBA',
    status: 'Accredited Programmes',
    validUpto: '2026',
    description: 'Accreditation Board for Engineering and Technology accreditation for select programs',
  },
]

const achievements = [
  '95% average placement rate',
  '25+ years of academic excellence',
  'Consistent NAAC A+ rating',
  'Strong industry partnerships',
  '500+ research publications',
  '50+ faculty with PhD qualifications',
  'State-of-the-art infrastructure and labs',
  'Winner of several national and international competitions',
]

export default function AcademicsDetailsPage() {
  return (
    <AppLayout>
      <Container maxW="6xl" py={12}>
        <Heading as="h1" size="2xl" color="brand.primary" mb={12}>
          Academic Details & Information
        </Heading>

        {/* Academic Calendar */}
        <Box mb={12}>
          <Heading as="h2" size="lg" mb={6}>
            Academic Calendar 2024-25
          </Heading>
          <Card boxShadow="md">
            <CardBody>
              <Table variant="simple">
                <Thead>
                  <Tr bg="brand.light">
                    <Th>Event</Th>
                    <Th>Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {academicCalendar2024_25.map((item, idx) => (
                    <Tr key={idx}>
                      <Td>{item.event}</Td>
                      <Td>{item.date}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Box>

        <Divider my={8} />

        {/* Admission Process */}
        <Box mb={12}>
          <Heading as="h2" size="lg" mb={6}>
            Admission Process
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {admissionProcess.map((item) => (
              <Card key={item.step} boxShadow="md">
                <CardBody>
                  <HStack mb={4}>
                    <Box
                      w={10}
                      h={10}
                      rounded="full"
                      bg="brand.primary"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                      fontWeight="bold"
                    >
                      {item.step}
                    </Box>
                    <Heading as="h3" size="md">
                      {item.stage}
                    </Heading>
                  </HStack>
                  <Text mb={3} color="gray.600">
                    {item.details}
                  </Text>
                  <Badge colorScheme="blue">{item.timeline}</Badge>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        <Divider my={8} />

        {/* Accreditations */}
        <Box mb={12}>
          <Heading as="h2" size="lg" mb={6}>
            Accreditations & Recognitions
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {accreditations.map((item, idx) => (
              <Card key={idx} boxShadow="md" borderTop="4px" borderTopColor="brand.primary">
                <CardBody>
                  <HStack mb={4} justifyContent="space-between">
                    <Heading as="h3" size="md">
                      {item.body}
                    </Heading>
                    <Badge colorScheme="green">Valid till {item.validUpto}</Badge>
                  </HStack>
                  <Text fontWeight="bold" color="brand.primary" mb={2}>
                    {item.status}
                  </Text>
                  <Text color="gray.600">{item.description}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        <Divider my={8} />

        {/* Achievements & Highlights */}
        <Box>
          <Heading as="h2" size="lg" mb={6}>
            Key Achievements
          </Heading>
          <Card boxShadow="md">
            <CardBody>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {achievements.map((achievement, idx) => (
                  <HStack key={idx} spacing={4}>
                    <Box w={3} h={3} bg="brand.primary" rounded="full" flexShrink={0} />
                    <Text>{achievement}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </CardBody>
          </Card>
        </Box>
      </Container>
    </AppLayout>
  )
}
