'use client'

import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    SimpleGrid,
    useToast,
    Checkbox,
    Stack,
} from '@chakra-ui/react'
import { useState } from 'react'
import AppLayout from '@/components/layouts/AppLayout'

export default function ApplyPage() {
    const toast = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            toast({
                title: "Application Submitted Successfully",
                description: "Your application has been received. Our admissions team will contact you shortly.",
                status: "success",
                duration: 8000,
                isClosable: true,
            })
            e.target.reset()
        }, 1500)
    }

    return (
        <AppLayout>
            <Box py={16} bg="gray.50">
                <Container maxW="800px">
                    <VStack spacing={8} align="stretch" bg="white" p={{ base: 6, md: 10 }} borderRadius="2xl" shadow="xl">
                        <Box textAlign="center" mb={4}>
                            <Heading as="h1" size="xl" mb={2} color="brand.500">
                                Application for Admission
                            </Heading>
                            <Text color="gray.600">
                                Start your journey at Amal Jyothi College of Engineering. Please fill out the form below.
                            </Text>
                        </Box>

                        <form onSubmit={handleSubmit}>
                            <VStack spacing={6} align="stretch">
                                <Heading size="md" borderBottom="2px solid" borderColor="brand.500" pb={2} mb={2}>Personal Details</Heading>

                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                    <FormControl isRequired>
                                        <FormLabel>Full Name</FormLabel>
                                        <Input placeholder="As per 10th certificate" />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Email Address</FormLabel>
                                        <Input type="email" placeholder="example@mail.com" />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Phone Number</FormLabel>
                                        <Input placeholder="+91 XXXXX XXXXX" />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Date of Birth</FormLabel>
                                        <Input type="date" />
                                    </FormControl>
                                </SimpleGrid>

                                <Heading size="md" borderBottom="2px solid" borderColor="brand.500" pb={2} mt={6} mb={2}>Academic Interest</Heading>

                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                    <FormControl isRequired>
                                        <FormLabel>Programme</FormLabel>
                                        <Select placeholder="Select Programme">
                                            <option value="btech">B.Tech</option>
                                            <option value="mtech">M.Tech</option>
                                            <option value="mca">MCA</option>
                                            <option value="bca">BCA</option>
                                        </Select>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Preferred Branch</FormLabel>
                                        <Select placeholder="Select Branch">
                                            <option value="cse">Computer Science & Engineering</option>
                                            <option value="it">AI & Information Technology</option>
                                            <option value="ece">Electronics & Communication</option>
                                            <option value="me">Mechanical Engineering</option>
                                            <option value="ce">Civil Engineering</option>
                                            <option value="ch">Chemical Engineering</option>
                                            <option value="mt">Metallurgical & Materials</option>
                                        </Select>
                                    </FormControl>
                                </SimpleGrid>

                                <FormControl mt={4}>
                                    <Checkbox colorScheme="brand">
                                        I hereby declare that the information provided is true to the best of my knowledge.
                                    </Checkbox>
                                </FormControl>

                                <Button
                                    type="submit"
                                    colorScheme="brand"
                                    size="lg"
                                    fontSize="md"
                                    bg="brand.500"
                                    color="white"
                                    isLoading={isSubmitting}
                                    loadingText="Submitting..."
                                    mt={8}
                                    _hover={{ bg: 'brand.600' }}
                                >
                                    Submit Application
                                </Button>
                            </VStack>
                        </form>
                    </VStack>
                </Container>
            </Box>
        </AppLayout>
    )
}
