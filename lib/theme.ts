import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const colors = {
  brand: {
    50: '#ebf2ff',
    100: '#cfe0ff',
    200: '#9fbeff',
    500: '#0B5FFF',
    600: '#0a4de6',
    700: '#0940cc'
  },
  accent: {
    50: '#e0fefb',
    100: '#b3fcf7',
    500: '#00BFA6',
    600: '#00a690',
    700: '#00927a'
  },
  neutral: {
    50: '#F8FAFC',
    100: '#f1f5f9',
    400: '#cbd5e1',
    700: '#475569',
    900: '#0F1724'
  }
}

const fonts = {
  body: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  heading: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
}

const styles = {
  global: {
    body: {
      bg: 'neutral.50',
      color: 'neutral.900'
    },
    'html, body': {
      fontSize: '14px'
    },
    a: {
      color: 'brand.500',
      _hover: { textDecoration: 'underline' }
    }
  }
}

const components = {
  Button: {
    baseStyle: {
      fontWeight: 600,
      borderRadius: '10px'
    },
    sizes: {
      lg: {
        h: '48px',
        px: '20px'
      }
    },
    variants: {
      primary: {
        bg: 'brand.500',
        color: 'white',
        _hover: { bg: 'brand.600' },
        _active: { bg: 'brand.700' }
      },
      outline: {
        borderWidth: '2px',
        borderColor: 'rgba(11, 95, 255, 0.12)',
        color: 'brand.500',
        _hover: { bg: 'rgba(11, 95, 255, 0.04)' }
      }
    },
    defaultProps: {
      variant: 'primary'
    }
  },
  Card: {
    baseStyle: {
      borderRadius: 'md',
      boxShadow: '0 6px 18px rgba(12, 20, 44, 0.08)',
      bg: 'white'
    }
  },
  Heading: {
    baseStyle: {
      fontWeight: 700,
      fontFamily: 'heading'
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
