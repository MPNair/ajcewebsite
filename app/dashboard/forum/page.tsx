'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Spinner,
  Center,
  VStack,
  HStack,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Textarea,
  useDisclosure,
  useToast,
  Divider,
} from '@chakra-ui/react'
import ForumPostCard from '@/components/ForumPostCard'
import Pagination from '@/components/Pagination'
import { apiClient } from '@/lib/api'
import { useAuthStore } from '@/lib/store'

export default function ForumPage() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [totalPages, setTotalPages] = useState(1)
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostBody, setNewPostBody] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const token = useAuthStore((state) => state.token)
  const user = useAuthStore((state) => state.user)
  const itemsPerPage = 10

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const res = await apiClient.getForumPosts()
        setPosts(res.data || [])
        setTotalPages(Math.ceil((res.data?.length || 0) / itemsPerPage))
      } catch (error) {
        console.error('Failed to fetch forum posts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleCreatePost = async () => {
    if (!newPostTitle.trim() || !newPostBody.trim()) {
      toast({ title: 'Please fill in all fields', status: 'warning', duration: 3 })
      return
    }

    try {
      setIsSubmitting(true)
      await apiClient.createForumPost({ title: newPostTitle, body: newPostBody })
      toast({ title: 'Post created successfully', status: 'success', duration: 3 })
      setNewPostTitle('')
      setNewPostBody('')
      onClose()
      // Refetch posts
      const res = await apiClient.getForumPosts()
      setPosts(res.data || [])
    } catch (error: any) {
      toast({
        title: 'Failed to create post',
        description: error.message,
        status: 'error',
        duration: 5,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const filteredPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="1000px">
        <VStack spacing={6} align="stretch">
          <HStack justify="space-between">
            <Box>
              <Heading mb={2}>Campus Forum</Heading>
            </Box>
            {token && (
              <Button colorScheme="brand" onClick={onOpen}>
                New Discussion
              </Button>
            )}
          </HStack>

          {/* Search */}
          <Input
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="md"
          />

          {/* Forum Posts */}
          {isLoading ? (
            <Center py={12}>
              <Spinner colorScheme="brand" />
            </Center>
          ) : paginatedPosts.length > 0 ? (
            <>
              <VStack spacing={4} align="stretch">
                {paginatedPosts.map((post: any) => (
                  <ForumPostCard
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    author={post.author?.name || 'Anonymous'}
                    excerpt={post.body}
                    replyCount={post.replies?.length || 0}
                    tags={post.tags}
                    createdAt={post.createdAt}
                  />
                ))}
              </VStack>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredPosts.length / itemsPerPage)}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <Center py={12}>
              <Heading size="md" color="gray.500">
                No discussions yet. Start one!
              </Heading>
            </Center>
          )}
        </VStack>
      </Container>

      {/* Create Post Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start a New Discussion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Discussion title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
              />
              <Textarea
                placeholder="Share your thoughts..."
                value={newPostBody}
                onChange={(e) => setNewPostBody(e.target.value)}
                minH="200px"
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={3}>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="brand"
                onClick={handleCreatePost}
                isLoading={isSubmitting}
                loadingText="Posting..."
              >
                Post
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
