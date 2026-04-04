/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        jarvis: {
          black: '#000000',
          dark: '#0a0a0a',
          card: 'rgba(255,255,255,0.04)',
          border: 'rgba(255,255,255,0.08)',
          cyan: '#00f5ff',
          white: '#ffffff',
          gray: {
            100: 'rgba(255,255,255,0.9)',
            200: 'rgba(255,255,255,0.7)',
            300: 'rgba(255,255,255,0.5)',
            400: 'rgba(255,255,255,0.3)',
            500: 'rgba(255,255,255,0.15)',
            600: 'rgba(255,255,255,0.08)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 14s linear infinite',
        'spin-reverse': 'spin-reverse 10s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'typewriter': 'typewriter 0.5s steps(1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'slide-in-right': 'slide-in-right 0.4s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(0,245,255,0.6))' },
          '50%': { opacity: '0.6', filter: 'drop-shadow(0 0 20px rgba(0,245,255,0.9))' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0,245,255,0.3)',
        'glow': '0 0 20px rgba(0,245,255,0.4)',
        'glow-lg': '0 0 40px rgba(0,245,255,0.5)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'white-glow': '0 0 20px rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [],
}
