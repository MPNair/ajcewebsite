'use client'

import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Icon,
    Button,
    Image,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react'
import { CheckCircle2, Download, FileText } from 'lucide-react'
import AppLayout from '@/components/layouts/AppLayout'

export default function BrochurePage() {
    const highlights = [
        "NAAC 'A' Accredited Engineering College",
        "NBA Accredited Departments",
        "16.5 Lakh sq.ft Built-up Area",
        "Technology Business Incubator (TBI) with Bio-TBI",
        "Industry Collaboration (Volvo-Eicher, Bosch, Yamaha)",
        "Guinness World Record for 500m Skywalk",
        "95%+ Excellent Placement Record",
        "65-acre Lush Green Wifi Campus"
    ]

    return (
        <AppLayout>
            <Box py={20} bg="brand.500" color="white">
                <Container maxW="1200px">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <VStack align="start" spacing={6}>
                            <Heading as="h1" size="2xl">
                                College Brochure 2024-25
                            </Heading>
                            <Text fontSize="xl" opacity={0.9}>
                                Discover the world-class infrastructure and academic excellence at Amal Jyothi College of Engineering.
                            </Text>
                            <Button leftIcon={<Download />} size="lg" variant="solid" color="brand.500" bg="white" _hover={{ bg: 'gray.100' }}>
                                Download Full Brochure (PDF)
                            </Button>
                        </VStack>
                        <Box position="relative">
                            <Box bg="white" p={4} borderRadius="xl" shadow="2xl" transform="rotate(2deg)">
                                <FileText size={120} color="#0B5FFF" />
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            <Box py={20}>
                <Container maxW="1000px">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
                        <Box>
                            <Heading size="lg" mb={8}>Why Amal Jyothi?</Heading>
                            <List spacing={4}>
                                {highlights.map((item, idx) => (
                                    <ListItem key={idx} fontSize="lg" display="flex" alignItems="center">
                                        <ListIcon as={CheckCircle2} color="brand.500" />
                                        {item}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <VStack align="stretch" spacing={6} p={8} bg="gray.50" borderRadius="2xl">
                            <Heading size="md">Admissions Quick Info</Heading>
                            <Text>B.Tech Eligibility: 45% marks in PCM in Plus Two</Text>
                            <Text>Entrance Required: KEAM / JEE</Text>
                            <Divider />
                            <Button as="a" href="/apply" colorScheme="brand" size="lg">Apply for 2024-25</Button>
                            <Button as="a" href="/contact" variant="outline" size="lg">Request Callback</Button>
                        </VStack>
                    </SimpleGrid>
                </Container>
            </Box>
        </AppLayout>
    )
}

function Divider() {
    return <Box h="1px" bg="gray.200" my={2} w="full" />
}
