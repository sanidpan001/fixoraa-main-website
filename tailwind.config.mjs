/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        cream: '#FAFAF8',
        brand: {
          coral: '#FF5A5F',
          pink: '#F43F8E',
          purple: '#9333EA',
          blue: '#2E6BFF',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob-drift': 'blob-drift 18s ease-in-out infinite alternate',
        'blob-drift-2': 'blob-drift-2 22s ease-in-out infinite alternate',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
      keyframes: {
        'blob-drift': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(60px, 40px) scale(1.15)' },
        },
        'blob-drift-2': {
          '0%': { transform: 'translate(0, 0) scale(1.1)' },
          '100%': { transform: 'translate(-70px, -30px) scale(0.95)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
