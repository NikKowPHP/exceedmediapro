import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#fff',
        action: '#5371ff',

        text: {
          title: '#fff',
          subtitle: '#ffffffcc',
          primary: '#fff',
          tertiary: '#999999',
          black: '#000000',
          cta: '#fff'
        },
        borderColor: {
          primary: '#ffffff1a',
          secondary: '#000',
          cta: '#0000001a'
        }
      },
      fontFamily: {
        sans: ['Outfit' ],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'cta': '15px',
        'base': '16px',
        'lg': '18px',
        'logo': '20px',
        'xl': '50px',
        '2xl': '24px',
        '3xl': '30px',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      borderRadius: {
        'primary': '10px',
        'primary-sm': '8px',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.scrollbar-w-0': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ],
}

export default config;
