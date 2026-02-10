import { Box, Card, CardBody, Heading, Text, HStack, Badge, Button, Stack, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { MessageCircle, User } from 'lucide-react'

interface ForumPostCardProps {
  id: string
  title: string
  author: string
  excerpt: string
  replyCount: number
  tags?: string[]
  createdAt: string
}

export default function ForumPostCard({
  id,
  title,
  author,
  excerpt,
  replyCount,
  tags = [],
  createdAt,
}: ForumPostCardProps) {
  const postDate = new Date(createdAt)
  const formattedDate = postDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <Card transition="all 0.3s" _hover={{ shadow: 'md', bg: 'gray.50' }}>
      <CardBody>
        <Stack spacing={3}>
          <Box>
            <Heading size="md" mb={2}>
              {title}
            </Heading>
            <Text fontSize="sm" color="gray.700" noOfLines={2} mb={3}>
              {excerpt}
            </Text>
          </Box>

          <HStack justify="space-between" fontSize="xs" color="gray.600">
              <HStack>
              <Icon as={User} w={4} h={4} />
              <Text>{author}</Text>
            </HStack>
            <Text>{formattedDate}</Text>
          </HStack>

          <HStack spacing={2} justify="space-between">
            <HStack spacing={2}>
              {tags.slice(0, 2).map((tag) => (
                <Badge key={tag} colorScheme="cyan" fontSize="xs">
                  {tag}
                </Badge>
              ))}
            </HStack>
              <HStack spacing={1} fontSize="sm" color="brand.500">
              <Icon as={MessageCircle} w={4} h={4} />
              <Text>{replyCount}</Text>
            </HStack>
          </HStack>

          <Link href={`/forum/${id}`}>
            <Button w="full" colorScheme="brand" variant="outline" size="sm">
              View Discussion
            </Button>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  )
}
