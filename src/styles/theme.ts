import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181b23",
            "800": "#1f2029",
            "700": "#353646",
            "600": "#484D63",
            "500": "#616480",
            "400": "#797D9a",
            "300": "#9699BB",
            "200": "#b3b5c6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        }
    },

    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },

    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})