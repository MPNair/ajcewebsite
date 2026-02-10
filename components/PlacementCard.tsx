import { Box, Card, CardBody, Heading, Text, HStack, Badge, Stack } from '@chakra-ui/react'

interface PlacementCardProps {
  company: string
  role: string
  package: number
  year: number
  studentName: string
}

export default function PlacementCard({ company, role, package: salary, year, studentName }: PlacementCardProps) {
  return (
    <Card transition="all 0.3s" _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}>
      <CardBody>
        <Stack spacing={3}>
          <Box>
            <Heading size="md" color="brand.500" mb={1}>
              {company}
            </Heading>
            <Text fontSize="sm" fontWeight="600" color="gray.700" mb={2}>
              {role}
            </Text>
            <Text fontSize="xs" color="gray.600">
              {studentName} • Batch {year}
            </Text>
          </Box>

          <HStack spacing={2} justify="space-between" pt={2} borderTop="1px solid" borderColor="gray.200">
            <Badge colorScheme="green" fontSize="sm">
              ₹ {salary.toLocaleString()} LPA
            </Badge>
            <Badge colorScheme="blue" fontSize="xs">
              {year}
            </Badge>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  )
}
