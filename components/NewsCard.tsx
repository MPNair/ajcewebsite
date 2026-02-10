import { Box, Card, CardBody, Image, Heading, Text, HStack, Badge, Button, Stack } from '@chakra-ui/react'
import Link from 'next/link'

interface NewsCardProps {
  id: string
  title: string
  excerpt: string
  author: string
  image?: string
  publishedAt: string
  tags?: string[]
}

export default function NewsCard({ id, title, excerpt, author, image, publishedAt, tags = [] }: NewsCardProps) {
  const pubDate = new Date(publishedAt)
  const formattedDate = pubDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

  return (
    <Card h="100%" transition="all 0.3s" _hover={{ shadow: 'lg' }} overflow="hidden">
      {image && (
        <Box h="200px" overflow="hidden" bg="gray.200">
          <Image src={image} alt={title} w="100%" h="100%" objectFit="cover" />
        </Box>
      )}
      <CardBody>
        <Stack spacing={3} h="100%" justify="space-between">
          <Box>
            <HStack justify="space-between" mb={2} fontSize="xs">
              <Text color="gray.500">{formattedDate}</Text>
              {tags.length > 0 && (
                <Badge colorScheme="orange" fontSize="xs">
                  {tags[0]}
                </Badge>
              )}
            </HStack>
            <Heading size="md" mb={2} noOfLines={2}>
              {title}
            </Heading>
            <Text fontSize="sm" color="gray.700" mb={2} noOfLines={3}>
              {excerpt}
            </Text>
            <Text fontSize="xs" color="gray.500">
              By {author}
            </Text>
          </Box>
          <Link href={`/news/${id}`}>
            <Button w="full" colorScheme="brand" variant="outline" size="sm">
              Read More
            </Button>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  )
}
