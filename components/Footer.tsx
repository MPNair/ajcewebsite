import { Box, Container, Grid, Text, HStack, Stack, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export default function Footer() {
  return (
    <Box bg="neutral.900" color="white" py={12}>
      <Container maxW="1200px">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={8} mb={8}>
          <Stack>
            <Heading as="h4" size="sm" mb={2}>
              Contact
            </Heading>
            <Text fontSize="sm">Amal Jyothi College of Engineering</Text>
            <Text fontSize="sm">Kottayam, Kerala, India</Text>
          </Stack>
          <Stack>
            <Heading as="h4" size="sm" mb={2}>
              Quick Links
            </Heading>
            <Link href="/academics">
              <Text fontSize="sm">Academics</Text>
            </Link>
            <Link href="/admissions">
              <Text fontSize="sm">Admissions</Text>
            </Link>
          </Stack>
          <Stack>
            <Heading as="h4" size="sm" mb={2}>
              Resources
            </Heading>
            <Link href="/library">
              <Text fontSize="sm">Library</Text>
            </Link>
            <Link href="/placements">
              <Text fontSize="sm">Placements</Text>
            </Link>
          </Stack>
          <Stack>
            <Heading as="h4" size="sm" mb={2}>
              Follow Us
            </Heading>
            <Text fontSize="sm">Social media links</Text>
          </Stack>
        </Grid>
        <Box borderTop="1px solid" borderColor="neutral.700" pt={6} textAlign="center">
          <Text fontSize="xs" opacity={0.8}>
            © 2026 Amal Jyothi College of Engineering. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
