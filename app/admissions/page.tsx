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
  Button,
  UnorderedList,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import AppLayout from '@/components/layouts/AppLayout'
import { CheckCircle, Clock, BookOpen } from 'lucide-react'

const eligibilityCriteria = [
  'Passed 12th grade with Physics, Chemistry, and Mathematics',
  'Minimum aggregate of 60% in qualifying examination',
  'Valid JEE (Main) / KEAM score',
  'Age limit: Not exceeding 25 years as on the date of issue of the rank list',
]

const applicationSteps = [
  { step: 1, title: 'Fill Application Form', description: 'Complete online registration with personal details' },
  { step: 2, title: 'Submit Documents', description: 'Upload required certificates and qualifying exam scores' },
  { step: 3, title: 'Merit Evaluation', description: 'Our admission committee reviews your application' },
  { step: 4, title: 'Interview', description: 'Shortlisted candidates attend counseling/interview session' },
  { step: 5, title: 'Selection', description: 'Final merit list and seat allocation' },
  { step: 6, title: 'Admission', description: 'Complete your admission with fees payment' },
]

const requiredDocuments = [
  '10th and 12th mark sheets',
  'JEE (Main) or KEAM scorecard',
  'Aadhaar and PAN card',
  'Birth certificate',
  'School leaving certificate',
  'Community certificate (if applicable)',
  'Medical certificate',
  'Passport size photographs',
]

export default function AdmissionsPage() {
  return (
    <AppLayout>
      <Box minH="100vh" bg="gray.50" py={12}>
        <Container maxW="1200px">
          <VStack spacing={12} align="stretch">
            {/* Header Section */}
            <Box textAlign="center">
              <Heading mb={4} size="2xl">
                Admissions 2025
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
                Join Amal Jyothi College of Engineering and start your journey to becoming a world-class engineer
              </Text>
            </Box>

            {/* Key Stats */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Card>
                <CardBody textAlign="center">
                  <Icon as={BookOpen} w={12} h={12} color="brand.500" mx="auto" mb={4} />
                  <Heading size="md" mb={2}>
                    8 Programs
                  </Heading>
                  <Text color="gray.600">Various undergraduate and postgraduate programs</Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody textAlign="center">
                  <Icon as={Clock} w={12} h={12} color="accent.500" mx="auto" mb={4} />
                  <Heading size="md" mb={2}>
                    Applications Open
                  </Heading>
                  <Text color="gray.600">January to June 2025</Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody textAlign="center">
                  <Icon as={CheckCircle} w={12} h={12} color="green.500" mx="auto" mb={4} />
                  <Heading size="md" mb={2}>
                    95% Placements
                  </Heading>
                  <Text color="gray.600">Excellent career opportunities</Text>
                </CardBody>
              </Card>
            </SimpleGrid>

            {/* Eligibility Section */}
            <Box>
              <Heading mb={4} size="lg">
                Eligibility Criteria
              </Heading>
              <Card>
                <CardBody>
                  <UnorderedList spacing={3}>
                    {eligibilityCriteria.map((criterion, idx) => (
                      <ListItem key={idx}>{criterion}</ListItem>
                    ))}
                  </UnorderedList>
                </CardBody>
              </Card>
            </Box>

            {/* Application Process */}
            <Box>
              <Heading mb={6} size="lg">
                Application Process
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {applicationSteps.map((item) => (
                  <Card key={item.step}>
                    <CardBody>
                      <Box mb={3} p={2} bg="brand.50" borderRadius="md" width="fit-content">
                        <Heading size="sm" color="brand.500">
                          Step {item.step}
                        </Heading>
                      </Box>
                      <Heading size="sm" mb={2}>
                        {item.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600">
                        {item.description}
                      </Text>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </Box>

            {/* Required Documents */}
            <Box>
              <Heading mb={4} size="lg">
                Required Documents
              </Heading>
              <Card>
                <CardBody>
                  <UnorderedList spacing={2}>
                    {requiredDocuments.map((doc, idx) => (
                      <ListItem key={idx} fontSize="sm">
                        {doc}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </CardBody>
              </Card>
            </Box>

            {/* CTA Section */}
            <Box textAlign="center" bg="brand.500" color="white" p={8} borderRadius="lg">
              <Heading mb={3}>Ready to Apply?</Heading>
              <Text mb={6}>Submit your application today and take the first step towards your engineering career</Text>
              <HStack spacing={4} justify="center">
                <Button bg="white" color="brand.500" fontWeight="600">
                  Apply Now
                </Button>
                <Button variant="outline" color="white" borderColor="white">
                  Download Brochure
                </Button>
              </HStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </AppLayout>
  )
}
