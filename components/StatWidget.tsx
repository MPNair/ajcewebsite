import { Box, Card, CardBody, Heading, Text, HStack, Icon, Stack } from '@chakra-ui/react'
import { TrendingUp } from 'lucide-react'

interface StatWidgetProps {
  label: string
  value: string | number
  trend?: {
    direction: 'up' | 'down'
    percentage: number
  }
  icon?: React.ReactNode
  color?: string
}

export default function StatWidget({ label, value, trend, icon, color = 'brand' }: StatWidgetProps) {
  return (
    <Card>
      <CardBody>
        <Stack spacing={2}>
          <HStack justify="space-between">
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              {label}
            </Text>
            {icon && <Box>{icon}</Box>}
          </HStack>
          <Heading size="lg">{value}</Heading>
          {trend && (
            <HStack spacing={1} fontSize="sm">
              <Icon
                as={TrendingUp}
                w={4}
                h={4}
                color={trend.direction === 'up' ? 'green.500' : 'red.500'}
                transform={trend.direction === 'down' ? 'rotate(180deg)' : 'none'}
              />
              <Text color={trend.direction === 'up' ? 'green.600' : 'red.600'}>
                {trend.percentage}% {trend.direction === 'up' ? 'increase' : 'decrease'}
              </Text>
            </HStack>
          )}
        </Stack>
      </CardBody>
    </Card>
  )
}
