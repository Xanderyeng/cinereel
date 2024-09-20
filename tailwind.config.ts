import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		screens: {
			...defaultTheme.screens,
			'2xl': '1536px',
			'3xl': '2048px',
		},
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			ubuntu: ['Ubuntu', 'sans-serif'],
			raleway: ['Raleway', 'sans-serif'],
			lato: ['Lato', 'sans-serif'],
			zilla_slab: ['Zilla Slab', 'serif'],
			nunito: ['Nunito', 'sans-serif'],
		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		  animation: {
			grid: "grid 15s linear infinite",
			ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
		  },
		  keyframes: {
			grid: {
				"0%": { transform: "translateY(-50%)" },
				"100%": { transform: "translateY(0)" },
			  },
			ripple: {
			  "0%, 100%": {
				transform: "translate(-50%, -50%) scale(1)",
			  },
			  "50%": {
				transform: "translate(-50%, -50%) scale(0.9)",
			  },
			},
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
