'use client'

import { useState, useEffect } from 'react'
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    Center,
    Spinner,
} from '@chakra-ui/react'
import AppLayout from '@/components/layouts/AppLayout'
import NewsCard from '@/components/NewsCard'
import { apiClient } from '@/lib/api'

export default function NewsPage() {
    const [newsItems, setNewsItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true)
                const response = await apiClient.getNews()
                setNewsItems(response.data || [])
            } catch (error) {
                console.error('Failed to fetch news:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchNews()
    }, [])

    return (
        <AppLayout>
            <Box bg="gray.50" minH="100vh" py={{ base: 12, md: 16 }}>
                <Container maxW="1200px">
                    <Heading mb={4} size="xl">Latest News</Heading>
                    <Text mb={8} fontSize="lg" color="gray.600">
                        Stay updated with the latest happenings at Amal Jyothi College of Engineering
                    </Text>

                    {isLoading ? (
                        <Center py={12}>
                            <Spinner colorScheme="brand" size="xl" />
                        </Center>
                    ) : (
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                            {newsItems.map((item: any) => (
                                <NewsCard
                                    key={item._id}
                                    id={item._id}
                                    title={item.title}
                                    excerpt={item.body ? item.body.substring(0, 150) + '...' : ''}
                                    author={item.author?.name || 'Unknown'}
                                    publishedAt={item.publishedAt}
                                    tags={item.tags}
                                />
                            ))}
                        </SimpleGrid>
                    )}
                </Container>
            </Box>
        </AppLayout>
    )
}
