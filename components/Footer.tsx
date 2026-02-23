import { Box, Container, Grid, Text, HStack, Stack, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export default function Footer() {
  return (
    <Box bg="#050a15" color="white" py={12} borderTop="1px solid" borderColor="rgba(255,255,255,0.05)">
      <Container maxW="1200px">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={12} mb={12}>
          <Stack spacing={4}>
            <Heading as="h4" size="sm" mb={2}>
              Contact AJCE
            </Heading>
            <Text fontSize="sm" color="gray.400">
              Amal Jyothi College of Engineering<br />
              Kanjirappally, Koovappally P.O.<br />
              Kottayam Dt., Kerala 686518
            </Text>
            <Text fontSize="sm" color="gray.400">
              Phone: +91 907 26 61 610
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading as="h4" size="sm" mb={2}>
              Quick Links
            </Heading>
            <Link href="/about">
              <Text fontSize="sm" color="gray.400" _hover={{ color: 'brand.500' }}>About Us</Text>
            </Link>
            <Link href="/academics">
              <Text fontSize="sm" color="gray.400" _hover={{ color: 'brand.500' }}>Academics</Text>
            </Link>
            <Link href="/placements">
              <Text fontSize="sm" color="gray.400" _hover={{ color: 'brand.500' }}>Placements</Text>
            </Link>
            <Link href="/contact">
              <Text fontSize="sm" color="gray.400" _hover={{ color: 'brand.500' }}>Contact Us</Text>
            </Link>
          </Stack>
          <Stack spacing={4}>
            <Heading as="h4" size="sm" mb={2}>
              Resources
            </Heading>
            <Link href="/brochure">
              <Text fontSize="sm" color="gray.400" _hover={{ color: 'brand.500' }}>College Brochure</Text>
            </Link>
            <Link href="/admissions">
              <Text fontSize="sm" color="gray.400" _hover={{ color: 'brand.500' }}>Admissions</Text>
            </Link>
            <Link href="/faculty">
              <Text fontSize="sm" color="gray.400" _hover={{ color: 'brand.500' }}>Faculty Directory</Text>
            </Link>
          </Stack>
          <Stack spacing={4}>
            <Heading as="h4" size="sm" mb={2}>
              Portal
            </Heading>
            <Link href="/login">
              <Text fontSize="sm" color="gray.400" _hover={{ color: 'brand.500' }}>Student Login</Text>
            </Link>
            <Link href="/apply">
              <Text fontSize="sm" color="gray.400" _hover={{ color: 'brand.500' }}>Apply Now</Text>
            </Link>
          </Stack>
        </Grid>
        <Box borderTop="1px solid" borderColor="whiteAlpha.100" pt={8} textAlign="center">
          <Text fontSize="xs" color="gray.500">
            © {new Date().getFullYear()} Amal Jyothi College of Engineering. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
