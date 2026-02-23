'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, Spinner, VStack, HStack, Badge, Divider, Button, Stack, Icon, Textarea, Avatar } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, Send } from 'lucide-react'
import AppLayout from '@/components/layouts/AppLayout'
import { apiClient } from '@/lib/api'
import { useAuthStore } from '@/lib/store'

export default function ForumPostDetailPage() {
  const params = useParams()
  const id = params.id as string
  const { user } = useAuthStore()
  const [post, setPost] = useState<any>(null)
  const [replies, setReplies] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newReply, setNewReply] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true)
        const response = await apiClient.getForumPost(id)
        setPost(response.data)
        // Mock replies for now
        setReplies([])
      } catch (err) {
        setError('Failed to load forum post')
        console.error('Error fetching post:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchPost()
    }
  }, [id])

  const handleSubmitReply = async () => {
    if (!newReply.trim() || !user) return

    try {
      setIsSubmitting(true)
      await apiClient.addForumReply(id, newReply)
      setNewReply('')
      // Refresh replies
      // For now, just add to local state
      setReplies(prev => [...prev, {
        id: Date.now().toString(),
        body: newReply,
        author: { name: user.name },
        createdAt: new Date().toISOString()
      }])
    } catch (err) {
      console.error('Error adding reply:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <AppLayout showSidebar>
        <VStack spacing={4}>
          <Spinner size="xl" />
          <Text>Loading forum post...</Text>
        </VStack>
      </AppLayout>
    )
  }

  if (error || !post) {
    return (
      <AppLayout showSidebar>
        <VStack spacing={4}>
          <Text color="red.500">{error || 'Forum post not found'}</Text>
          <Button as={Link} href="/dashboard/forum" leftIcon={<ArrowLeft />}>
            Back to Forum
          </Button>
        </VStack>
      </AppLayout>
    )
  }

  const postDate = new Date(post.createdAt)
  const formattedDate = postDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <AppLayout showSidebar>
      <VStack spacing={6} align="stretch">
        <Button as={Link} href="/dashboard/forum" variant="ghost" alignSelf="start" leftIcon={<ArrowLeft />}>
          Back to Forum
        </Button>

        <Box bg="white" p={6} borderRadius="lg" shadow="sm">
          <VStack spacing={4} align="stretch">
            <HStack justify="space-between" flexWrap="wrap">
              <HStack>
                <Avatar name={post.author?.name} size="sm" />
                <Text fontWeight="medium">{post.author?.name}</Text>
              </HStack>
              <Text fontSize="sm" color="gray.500">{formattedDate}</Text>
            </HStack>

            <Heading size="lg">{post.title}</Heading>

            {post.tags && post.tags.length > 0 && (
              <HStack>
                {post.tags.map((tag: string) => (
                  <Badge key={tag} colorScheme="cyan" fontSize="xs">
                    {tag}
                  </Badge>
                ))}
              </HStack>
            )}

            <Text lineHeight="tall" whiteSpace="pre-wrap">
              {post.body}
            </Text>
          </VStack>
        </Box>

        <Box bg="white" p={6} borderRadius="lg" shadow="sm">
          <Heading size="md" mb={4}>
            Replies ({replies.length})
          </Heading>

          {replies.length === 0 ? (
            <Text color="gray.500">No replies yet. Be the first to reply!</Text>
          ) : (
            <Stack spacing={4}>
              {replies.map((reply) => (
                <Box key={reply.id} pl={4} borderLeft="2px solid" borderColor="gray.200">
                  <HStack mb={2}>
                    <Avatar name={reply.author?.name} size="xs" />
                    <Text fontSize="sm" fontWeight="medium">{reply.author?.name}</Text>
                    <Text fontSize="xs" color="gray.500">
                      {new Date(reply.createdAt).toLocaleDateString()}
                    </Text>
                  </HStack>
                  <Text>{reply.body}</Text>
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        {user && (
          <Box bg="white" p={6} borderRadius="lg" shadow="sm">
            <Heading size="md" mb={4}>Add Reply</Heading>
            <VStack spacing={4} align="stretch">
              <Textarea
                placeholder="Write your reply..."
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                rows={4}
              />
              <Button
                onClick={handleSubmitReply}
                isLoading={isSubmitting}
                loadingText="Posting..."
                colorScheme="brand"
                alignSelf="end"
                leftIcon={<Send />}
              >
                Post Reply
              </Button>
            </VStack>
          </Box>
        )}
      </VStack>
    </AppLayout>
  )
}