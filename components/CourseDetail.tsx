import { Box, Heading, Text, HStack, Badge, Button, Stack, Link as ChakraLink, List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'

interface Resource {
  title: string
  url: string
  type?: string
}

interface Course {
  _id: string
  title: string
  code?: string
  credits?: number
  department?: { name?: string; _id?: string }
  description?: string
  syllabusUrl?: string
  resources?: Resource[]
}

export default function CourseDetail({ course }: { course: Course }) {
  return (
    <Box bg="white" p={6} borderRadius="md" shadow="sm">
      <HStack justify="space-between" mb={4}>
        <Box>
          <Heading size="lg">{course.title}</Heading>
          <HStack mt={2} spacing={3}>
            {course.code && <Badge colorScheme="blue">{course.code}</Badge>}
            {course.credits !== undefined && <Badge colorScheme="teal">{course.credits} Credits</Badge>}
            {course.department && (
              <ChakraLink as={Link} href={`/departments/${course.department._id}`} color="brand.500">
                {course.department.name}
              </ChakraLink>
            )}
          </HStack>
        </Box>
      </HStack>

      {course.description && (
        <Text color="gray.700" mb={4}>
          {course.description}
        </Text>
      )}

      <Stack spacing={4}>
        {course.syllabusUrl && (
          <Box>
            <Heading size="sm" mb={2}>
              Syllabus
            </Heading>
            <Button as={Link} href={course.syllabusUrl} target="_blank" rel="noreferrer" colorScheme="brand" variant="outline" size="sm">
              Download Syllabus
            </Button>
          </Box>
        )}

        {course.resources && course.resources.length > 0 && (
          <Box>
            <Heading size="sm" mb={2}>
              Resources
            </Heading>
            <List spacing={2}>
              {course.resources.map((r) => (
                <ListItem key={r.url}>
                  <ChakraLink as={Link} href={r.url} target="_blank" rel="noreferrer" color="brand.500">
                    {r.title} {r.type ? `· ${r.type}` : ''}
                  </ChakraLink>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Stack>
    </Box>
  )
}
