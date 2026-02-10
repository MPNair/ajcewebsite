import { Box, Card, CardBody, Heading, Text, Badge, HStack, Button, Stack } from '@chakra-ui/react'
import Link from 'next/link'

interface CourseCardProps {
  id: string
  title: string
  code: string
  department: string
  credits: number
  description?: string
}

export default function CourseCard({ id, title, code, department, credits, description }: CourseCardProps) {
  return (
    <Card h="100%" transition="all 0.3s" _hover={{ shadow: 'lg', transform: 'translateY(-4px)' }}>
      <CardBody>
        <Stack spacing={3} h="100%" justify="space-between">
          <Box>
            <HStack justify="space-between" mb={2}>
              <Badge colorScheme="blue">{code}</Badge>
              <Badge colorScheme="teal">{credits} Credits</Badge>
            </HStack>
            <Heading size="md" mb={2}>
              {title}
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={2}>
              {department}
            </Text>
            {description && (
              <Text fontSize="sm" color="gray.700" noOfLines={3}>
                {description}
              </Text>
            )}
          </Box>
          <Link href={`/courses/${id}`}>
            <Button w="full" colorScheme="brand" variant="outline" size="sm">
              View Course
            </Button>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  )
}
