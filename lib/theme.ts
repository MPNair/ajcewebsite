import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const colors = {
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    light: '#f0f7ff',
    primary: '#0ea5e9',
    500: '#0284c7', // Darker blue for better contrast
    600: '#0369a1',
    700: '#075985'
  },
  accent: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    500: '#0d9488',
    600: '#0f766e',
    700: '#115e59'
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    400: '#94a3b8',
    700: '#334155',
    900: '#0f172a' // Solid dark navy
  }
}

const fonts = {
  body: 'var(--font-inter), system-ui, sans-serif',
  heading: 'var(--font-outfit), system-ui, sans-serif'
}

const styles = {
  global: {
    body: {
      bg: 'neutral.50',
      color: 'neutral.900'
    },
    a: {
      color: 'brand.500',
      _hover: { textDecoration: 'none', color: 'brand.600' }
    }
  }
}

const components = {
  Button: {
    baseStyle: {
      fontWeight: 600,
      borderRadius: '8px',
      transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)'
    },
    variants: {
      primary: {
        bg: 'brand.500',
        color: 'white',
        _hover: { bg: 'brand.600', transform: 'translateY(-1px)' },
        _active: { bg: 'brand.700', transform: 'translateY(0)' }
      },
      outline: {
        borderWidth: '2px',
        borderColor: 'brand.500',
        color: 'brand.500',
        _hover: { bg: 'brand.50', transform: 'translateY(-1px)' },
        _active: { bg: 'brand.100', transform: 'translateY(0)' }
      },
      ghost: {
        color: 'white',
        _hover: { bg: 'whiteAlpha.200' }
      }
    }
  },
  Card: {
    baseStyle: {
      borderRadius: 'xl',
      border: '1px solid',
      borderColor: 'neutral.200',
      boxShadow: 'sm',
      bg: 'white',
      _hover: { boxShadow: 'md' }
    }
  },
  Heading: {
    baseStyle: {
      fontWeight: 700,
      color: 'neutral.900'
    }
  }
}

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components
})

export default theme
