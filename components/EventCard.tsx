import { Box, Card, CardBody, Heading, Text, Badge, HStack, Button, Stack, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface EventCardProps {
  id: string
  title: string
  date: string
  location: string
  tags?: string[]
  rsvpCount?: number
}

export default function EventCard({ id, title, date, location, tags = [], rsvpCount = 0 }: EventCardProps) {
  const eventDate = new Date(date)
  const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  const formattedTime = eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

  return (
    <Card h="100%" transition="all 0.3s" _hover={{ shadow: 'lg', transform: 'translateY(-4px)' }}>
      <CardBody>
        <Stack spacing={3} h="100%" justify="space-between">
          <Box>
            <HStack spacing={2} mb={3} flexWrap="wrap">
              {tags.slice(0, 2).map((tag) => (
                <Badge key={tag} colorScheme="purple" fontSize="xs">
                  {tag}
                </Badge>
              ))}
            </HStack>
            <Heading size="md" mb={3}>
              {title}
            </Heading>
            <Stack spacing={2} fontSize="sm" color="gray.600">
              <HStack>
                <Icon as={Calendar} w={4} h={4} />
                <Text>{formattedDate}</Text>
              </HStack>
              <HStack>
                <Icon as={Clock} w={4} h={4} />
                <Text>{formattedTime}</Text>
              </HStack>
              <HStack>
                <Icon as={MapPin} w={4} h={4} />
                <Text>{location}</Text>
              </HStack>
            </Stack>
            {rsvpCount > 0 && (
              <Text fontSize="xs" color="brand.500" mt={2}>
                {rsvpCount} people going
              </Text>
            )}
          </Box>
          <Link href={`/events/${id}`}>
            <Button w="full" colorScheme="brand" size="sm">
              View Details
            </Button>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  )
}
