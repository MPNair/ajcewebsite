import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const colors = {
  // Restored blue-teal palette (original)
  brand: {
    50: '#e6f7ff',
    100: '#ccefff',
    200: '#99e0ff',
    light: '#e6f0ff',
    primary: '#0ea5e9',
    500: '#0ea5e9',
    600: '#0686c8',
    700: '#046a9a'
  },
  accent: {
    50: '#e6fff9',
    100: '#ccfff3',
    500: '#14b8a6',
    600: '#0ea58f',
    700: '#0b8f76'
  },
  neutral: {
    50: '#ffffff',
    100: '#f7fafc',
    200: '#edf2f7',
    400: '#cfe8ef',
    700: '#2b3942',
    900: '#071328'
  }
}

const fonts = {
  body: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  heading: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
}

const styles = {
  global: {
    '@keyframes gradientShift': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' }
    },
    '.card-kinetic': {
      backgroundSize: '200% 200%',
      animation: 'gradientShift 6s ease infinite',
      transition: 'transform 220ms ease, box-shadow 220ms ease'
    },
    body: {
      bg: 'neutral.50',
      color: 'neutral.900'
    },
    'html, body': {
      fontSize: '14px'
    },
    a: {
      color: 'brand.500',
      _hover: { textDecoration: 'underline', color: 'brand.600' }
    }
  }
}

const components = {
  Button: {
    baseStyle: {
      fontWeight: 700,
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
        borderColor: 'rgba(0,184,148,0.12)',
        color: 'brand.500',
        _hover: { bg: 'rgba(0,184,148,0.04)' }
      }
    },
    defaultProps: {
      variant: 'primary'
    }
  },
  Card: {
    baseStyle: {
      borderRadius: 'md',
      boxShadow: '0 8px 24px rgba(2,168,125,0.08)',
      bgGradient: 'linear(to-r, brand.500, accent.500)',
      color: 'white',
      backgroundSize: '200% 200%',
      _hover: { transform: 'translateY(-6px)', boxShadow: '0 12px 36px rgba(2,168,125,0.12)' },
      className: 'card-kinetic'
    }
  },
  Heading: {
    baseStyle: {
      fontWeight: 800,
      fontFamily: 'heading',
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
