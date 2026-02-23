'use client'

import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Spinner,
    Center,
    Input,
    InputGroup,
    InputRightElement,
    Button,
} from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import AppLayout from '@/components/layouts/AppLayout'
import NewsCard from '@/components/NewsCard'
import EventCard from '@/components/EventCard'
import CourseCard from '@/components/CourseCard'
import { apiClient } from '@/lib/api'
import { SearchIcon } from '@chakra-ui/icons'

function SearchResults() {
    const searchParams = useSearchParams()
    const initialQuery = searchParams.get('q') || ''
    const [query, setQuery] = useState(initialQuery)
    const [results, setResults] = useState<any>({ news: [], events: [], courses: [] })
    const [isLoading, setIsLoading] = useState(false)

    const performSearch = async (searchQuery: string) => {
        if (!searchQuery.trim()) return
        setIsLoading(true)
        try {
            // In a real app, there would be a search endpoint. 
            // Here we simulate by fetching all and filtering.
            const [newsRes, eventsRes, coursesRes] = await Promise.all([
                apiClient.getNews({ page: 1, limit: 10 }),
                apiClient.getEvents(),
                apiClient.getCourses(),
            ])

            const filterFn = (item: any) =>
                (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (item.body && item.body.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (item.code && item.code.toLowerCase().includes(searchQuery.toLowerCase()))

            setResults({
                news: (newsRes.data || []).filter(filterFn),
                events: (eventsRes.data || []).filter(filterFn),
                courses: (coursesRes.data || []).filter(filterFn),
            })
        } catch (error) {
            console.error('Search failed:', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (initialQuery) {
            performSearch(initialQuery)
        }
    }, [initialQuery])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        performSearch(query)
    }

    const hasResults = results.news.length > 0 || results.events.length > 0 || results.courses.length > 0

    return (
        <Container maxW="1200px" py={12}>
            <VStack spacing={10} align="stretch">
                <Box>
                    <Heading size="xl" mb={6}>Search Results</Heading>
                    <form onSubmit={handleSearch}>
                        <InputGroup size="lg">
                            <Input
                                placeholder="Search for courses, news, events..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                bg="white"
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleSearch} colorScheme="brand">
                                    <SearchIcon />
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </form>
                </Box>

                {isLoading ? (
                    <Center py={20}>
                        <Spinner size="xl" color="brand.500" />
                    </Center>
                ) : (
                    <VStack spacing={12} align="stretch">
                        {initialQuery && !hasResults && !isLoading && (
                            <Center py={10}>
                                <VStack>
                                    <Text fontSize="lg" color="gray.500">No results found for "{initialQuery}"</Text>
                                    <Text color="gray.400">Try different keywords or check your spelling.</Text>
                                </VStack>
                            </Center>
                        )}

                        {results.courses.length > 0 && (
                            <Box>
                                <Heading size="md" mb={6} color="brand.500">Courses ({results.courses.length})</Heading>
                                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                                    {results.courses.map((item: any) => (
                                        <CourseCard key={item._id} {...item} department={item.department?.name} />
                                    ))}
                                </SimpleGrid>
                            </Box>
                        )}

                        {results.news.length > 0 && (
                            <Box>
                                <Heading size="md" mb={6} color="brand.500">News & Articles ({results.news.length})</Heading>
                                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                                    {results.news.map((item: any) => (
                                        <NewsCard
                                            key={item._id}
                                            id={item._id}
                                            title={item.title}
                                            excerpt={item.body.substring(0, 100)}
                                            author={item.author?.name}
                                            publishedAt={item.publishedAt}
                                            tags={item.tags}
                                        />
                                    ))}
                                </SimpleGrid>
                            </Box>
                        )}

                        {results.events.length > 0 && (
                            <Box>
                                <Heading size="md" mb={6} color="brand.500">Events ({results.events.length})</Heading>
                                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                                    {results.events.map((item: any) => (
                                        <EventCard key={item._id} {...item} />
                                    ))}
                                </SimpleGrid>
                            </Box>
                        )}
                    </VStack>
                )}
            </VStack>
        </Container>
    )
}

export default function SearchPage() {
    return (
        <AppLayout>
            <Suspense fallback={
                <Center py={20}><Spinner size="xl" /></Center>
            }>
                <SearchResults />
            </Suspense>
        </AppLayout>
    )
}
