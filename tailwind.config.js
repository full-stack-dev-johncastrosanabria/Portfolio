/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#38bdf8',
          600: '#0ea5e9',
          700: '#0284c7',
        },
        accent: {
          500: '#22c55e',
          600: '#16a34a',
        },
        dark: {
          50: '#f8fafc',
          900: '#07111f',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '24px',
      },
      boxShadow: {
        'glow': '0 20px 45px rgba(2, 6, 23, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
