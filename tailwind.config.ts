
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Bitcoin theme colors
				btc: {
					'deep-blue': '#0B1A34',
					'blue': '#1E3A8A',
					'light-blue': '#3B82F6',
					'electric-blue': '#00A3FF',
					'gold': '#F7931A',
					'light-gold': '#FFCA28',
					'dark-gray': '#121212',
					'mid-gray': '#292929',
					'light-gray': '#E5E7EB',
					'neon-green': '#00FF9D',
					'neon-pink': '#FF00E5',
					'neon-blue': '#00F0FF',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)' },
					'50%': { boxShadow: '0 0 30px rgba(0, 240, 255, 0.8)' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' },
				},
				'scale-up': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'scale-up': 'scale-up 0.5s ease-out forwards',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gold-gradient': 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
				'blue-gradient': 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
				'neon-gradient': 'linear-gradient(135deg, #00F0FF 0%, #0070F3 50%, #00FF9D 100%)',
				'dark-gradient': 'linear-gradient(135deg, #0B1A34 0%, #1E3A8A 100%)',
			},
			boxShadow: {
				'glass': '0 4px 16px 0 rgba(31, 38, 135, 0.15)',
				'neon': '0 0 15px 2px rgba(0, 240, 255, 0.5)',
				'neon-soft': '0 0 10px rgba(0, 240, 255, 0.3)',
				'neon-strong': '0 0 30px rgba(0, 240, 255, 0.8), 0 0 60px rgba(0, 240, 255, 0.4)',
				'gold': '0 4px 20px rgba(255, 193, 7, 0.5)',
			},
			backdropFilter: {
				'glass': 'blur(16px) saturate(180%)',
			},
			transitionTimingFunction: {
				'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'spring': 'cubic-bezier(0.37, 0, 0.63, 1)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
