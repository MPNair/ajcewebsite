'use client'

import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Icon,
    HStack,
    Link,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    useToast,
} from '@chakra-ui/react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import AppLayout from '@/components/layouts/AppLayout'

export default function ContactPage() {
    const toast = useToast()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        toast({
            title: "Message Sent",
            description: "We've received your message and will get back to you soon.",
            status: "success",
            duration: 5000,
            isClosable: true,
        })
    }

    return (
        <AppLayout>
            <Box pt={16} pb={24}>
                <Container maxW="1200px">
                    <VStack spacing={12} align="stretch">
                        <Box textAlign="center">
                            <Heading as="h1" size="2xl" mb={4} color="brand.500">
                                Contact Us
                            </Heading>
                            <Text fontSize="xl" color="gray.600">
                                Have questions? We're here to help.
                            </Text>
                        </Box>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
                            {/* Contact Info */}
                            <VStack align="start" spacing={8}>
                                <Heading size="lg">Reach us</Heading>

                                <VStack align="start" spacing={6} w="full">
                                    <HStack spacing={4} align="start">
                                        <Icon as={MapPin} w={6} h={6} color="brand.500" mt={1} />
                                        <Box>
                                            <Heading size="sm" mb={1}>Postal Address</Heading>
                                            <Text color="gray.600">
                                                Amal Jyothi College of Engineering<br />
                                                Kanjirappally, Koovappally P.O.<br />
                                                Kottayam Dt., Kerala 686518, India
                                            </Text>
                                        </Box>
                                    </HStack>

                                    <HStack spacing={4} align="start">
                                        <Icon as={Phone} w={6} h={6} color="brand.500" mt={1} />
                                        <Box>
                                            <Heading size="sm" mb={1}>Phone</Heading>
                                            <Text color="gray.600">+91 907 26 61 610 (Reception)</Text>
                                            <Text color="gray.600">+91 949 60 94 661 (Office)</Text>
                                        </Box>
                                    </HStack>

                                    <HStack spacing={4} align="start">
                                        <Icon as={Mail} w={6} h={6} color="brand.500" mt={1} />
                                        <Box>
                                            <Heading size="sm" mb={1}>Email</Heading>
                                            <Link href="mailto:info@ajce.in" color="brand.500">info@ajce.in</Link><br />
                                            <Link href="mailto:info@amaljyothi.ac.in" color="brand.500">info@amaljyothi.ac.in</Link>
                                        </Box>
                                    </HStack>

                                    <HStack spacing={4} align="start">
                                        <Icon as={Clock} w={6} h={6} color="brand.500" mt={1} />
                                        <Box>
                                            <Heading size="sm" mb={1}>Office Hours</Heading>
                                            <Text color="gray.600">Monday - Friday: 9:00 AM - 5:00 PM</Text>
                                            <Text color="gray.600">Saturday: 9:00 AM - 1:00 PM</Text>
                                        </Box>
                                    </HStack>
                                </VStack>
                            </VStack>

                            {/* Contact Form */}
                            <Box bg="white" p={8} borderRadius="xl" shadow="lg">
                                <form onSubmit={handleSubmit}>
                                    <VStack spacing={5}>
                                        <FormControl isRequired>
                                            <FormLabel>Full Name</FormLabel>
                                            <Input placeholder="Enter your name" />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Email Address</FormLabel>
                                            <Input type="email" placeholder="Enter your email" />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Message</FormLabel>
                                            <Textarea placeholder="How can we help you?" rows={6} />
                                        </FormControl>
                                        <Button type="submit" colorScheme="brand" size="lg" w="full" bg="brand.500" color="white" _hover={{ bg: 'brand.600' }}>
                                            Send Message
                                        </Button>
                                    </VStack>
                                </form>
                            </Box>
                        </SimpleGrid>

                        {/* Google Map */}
                        <Box h="450px" bg="gray.100" borderRadius="2xl" overflow="hidden" shadow="inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.347587189151!2d76.8202534147905!3d9.507421993190867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b064976722247fb%3A0x66f65057053e144a!2sAmal%20Jyothi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </AppLayout>
    )
}

function Center({ children, ...props }: any) {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" {...props}>
            {children}
        </Box>
    )
}
