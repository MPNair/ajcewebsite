import { ReactNode } from 'react'
import { Box, Container, Grid } from '@chakra-ui/react'
import Header from '../Header'
import Footer from '../Footer'

interface AppLayoutProps {
  children: ReactNode
  showSidebar?: boolean
  sidebar?: ReactNode
}

export default function AppLayout({ children, showSidebar = false, sidebar }: AppLayoutProps) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="neutral.50">
      <Header />
      
      {showSidebar ? (
        <Grid templateColumns="280px 1fr" flex="1">
          <Box bg="white" borderRight="1px solid" borderColor="neutral.100" p={6}>
            {sidebar}
          </Box>
          <Box as="main" p={6}>
            <Container maxW="1200px" centerContent>
              {children}
            </Container>
          </Box>
        </Grid>
      ) : (
        <Box as="main" flex="1">
          <Container maxW="1200px" py={8}>
            {children}
          </Container>
        </Box>
      )}

      <Footer />
    </Box>
  )
}
