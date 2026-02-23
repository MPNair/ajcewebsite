'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Stack,
  Divider,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BookOpen, Target, Shield, Award } from 'lucide-react'
import AppLayout from '@/components/layouts/AppLayout'

const MotionBox = motion(Box)

export default function AboutPage() {
  return (
    <AppLayout>
      <Box bg="gray.50" py={12}>
        <Container maxW="1200px">
          <VStack spacing={12} align="stretch">
            {/* Hero Section */}
            <Box textAlign="center" mb={10}>
              <Heading as="h1" size="2xl" mb={4} color="brand.500">
                About Amal Jyothi
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="800px" mx="auto">
                The first engineering college in Kerala to obtain NAAC accreditation with ‘A’ grade.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <VStack align="start" spacing={6}>
                <Heading size="lg">Origin</Heading>
                <Text fontSize="md" lineHeight="tall">
                  Amal Jyothi College of Engineering, Kanjirapally, is a mega complex of 16.5 lakh sq.ft. built-up area overlooking the busy Kanjirapally-Erumeli stretch of the Kottayam-Sabarimala state highway. 
                  The main features of the College comprise world-class infrastructure, top-flight faculty, high pass percentage, excellent placement record, unique student projects and first-rate start-ups.
                </Text>
                <Heading size="lg">The Name</Heading>
                <Text fontSize="md" lineHeight="tall">
                  The word “Amal” means immaculate and inviolate, and “Jyothi” means light. Thus “Amal Jyothi” stands for pure light, a universal symbol signifying the search for unblemished truth.
                </Text>
              </VStack>
              <Box>
                <VStack spacing={8} p={8} bg="white" borderRadius="xl" shadow="md">
                  <Box w="full">
                    <HStack mb={4}>
                      <Icon as={Target} w={6} h={6} color="brand.500" />
                      <Heading size="md">Our Vision</Heading>
                    </HStack>
                    <Text color="gray.600">
                      To be a centre of excellence in technical higher education, research and support services, capable of making significant contribution to individual and societal empowerment.
                    </Text>
                  </Box>
                  <Divider />
                  <Box w="full">
                    <HStack mb={4}>
                      <Icon as={Shield} w={6} h={6} color="brand.500" />
                      <Heading size="md">Our Mission</Heading>
                    </HStack>
                    <Text color="gray.600">
                      To create technically qualified world-class professionals with social commitment through career-oriented courses conducted by high profile faculty.
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </SimpleGrid>

            {/* Salient Features */}
            <Box pt={10}>
              <Heading size="xl" mb={8} textAlign="center">Salient Features</Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                {[
                  { icon: BookOpen, title: "NAAC 'A' Accredited", desc: "First engineering college in Kerala to secure NAAC A grade." },
                  { icon: Award, title: "NBA Accredited", desc: "Prime departments accredited by NBA." },
                  { icon: Shield, title: "Safe Campus", desc: "Two campus hostels accommodating 2500 students, managed with dedication." }
                ].map((feature, idx) => (
                  <Box key={idx} p={6} bg="white" borderRadius="lg" shadow="sm">
                    <Icon as={feature.icon} w={10} h={10} color="brand.500" mb={4} />
                    <Heading size="md" mb={2}>{feature.title}</Heading>
                    <Text color="gray.600" fontSize="sm">{feature.desc}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>
    </AppLayout>
  )
}

function HStack({ children, ...props }: any) {
  return (
    <Stack direction="row" align="center" {...props}>
      {children}
    </Stack>
  )
}
