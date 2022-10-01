import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "600": "#47585B",
      "400": "#999999",
      "100": "#DADADA",
      "50": "#F5F8FA",
    },
    grayAlpha: {
      "500": "rgba(153, 153, 153, 0.5)"
    },
    yellow: {
      "400": "#FFBA08",
      "500": "rgba(255, 186, 8, 0.5)"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      }
    }
  }
});