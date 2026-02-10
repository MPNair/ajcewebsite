import { HStack, Button, Text, Box, Icon } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  isLoading?: boolean
}

export default function Pagination({ currentPage, totalPages, onPageChange, isLoading = false }: PaginationProps) {
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('...')

      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i)
      }

      if (currentPage < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <HStack spacing={2} justify="center" my={6} wrap="wrap">
      <Button
        isDisabled={currentPage === 1 || isLoading}
        onClick={() => onPageChange(currentPage - 1)}
        leftIcon={<Icon as={ChevronLeft} w={4} h={4} />}
        variant="outline"
        size="sm"
      >
        Previous
      </Button>

      {getPageNumbers().map((page, idx) => (
        <Box key={idx}>
          {page === '...' ? (
            <Text px={2} py={1}>
              ...
            </Text>
          ) : (
            <Button
              onClick={() => onPageChange(page as number)}
              variant={currentPage === page ? 'solid' : 'outline'}
              colorScheme={currentPage === page ? 'brand' : 'gray'}
              size="sm"
              isDisabled={isLoading}
            >
              {page}
            </Button>
          )}
        </Box>
      ))}

      <Button
        isDisabled={currentPage === totalPages || isLoading}
        onClick={() => onPageChange(currentPage + 1)}
        rightIcon={<Icon as={ChevronRight} w={4} h={4} />}
        variant="outline"
        size="sm"
      >
        Next
      </Button>
    </HStack>
  )
}
