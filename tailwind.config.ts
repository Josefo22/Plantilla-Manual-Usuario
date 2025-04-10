import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: 'var(--font-sans)',
				display: 'var(--font-display)'
			},
			animation: {
				'background-shine': 'background-shine 2s linear infinite',
				'fade-in': 'fade-in 0.6s ease-in',
				'fade-out': 'fade-out 0.6s ease-out',
				'slide-in-top': 'slide-in-top 0.6s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.6s ease-out',
				'slide-out-top': 'slide-out-top 0.6s ease-out',
				'slide-out-bottom': 'slide-out-bottom 0.6s ease-out',
				'zoom-in': 'zoom-in 0.6s ease-out',
				'zoom-out': 'zoom-out 0.6s ease-out',
				'rotate-90': 'rotate-90 1s ease-in-out',
				'rotate-180': 'rotate-180 1s ease-in-out',
				'rotate-360': 'rotate-360 1s linear',
				'flip-horizontal': 'flip-horizontal 1s ease-in-out',
				'flip-vertical': 'flip-vertical 1s ease-in-out',
				bounce: 'bounce 1s ease-in-out',
				swing: 'swing 1s ease-in-out',
				wobble: 'wobble 1s ease-in-out',
				pulse: 'pulse 1s ease-in-out',
				shake: 'shake 0.5s ease-in-out',
				tada: 'tada 1s ease-in-out',
				jump: 'jump 1s ease-in-out',
				hang: 'hang 1s ease-in-out',
				'roll-in': 'roll-in 1s ease-in-out',
				'roll-out': 'roll-out 1s ease-in-out',
				float: 'float 1s ease-in-out',
				sink: 'sink 1s ease-in-out',
				flash: 'flash 1s ease-in-out',
				jiggle: 'jiggle 0.5s ease-in-out',
				'rubber-band': 'rubber-band 1s ease-in-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'slide-out-left': 'slide-out-left 0.6s ease-out',
				'slide-out-right': 'slide-out-right 0.6s ease-out',
				'spin-clockwise': 'spin-clockwise 0.6s linear',
				'spin-counter-clockwise': 'spin-counter-clockwise 0.6s linear',
				'flip-x': 'flip-x 0.6s ease-out',
				'flip-y': 'flip-y 0.6s ease-out',
				blink: 'blink 0.5s',
				pop: 'pop 0.6s ease-out',
				'expand-horizontally': 'expand-horizontally 0.6s ease-out',
				'contract-horizontally': 'contract-horizontally 0.6s ease-out',
				'expand-vertically': 'expand-vertically 0.6s ease-out',
				'contract-vertically': 'contract-vertically 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-in-out',
				'fade-in-down': 'fade-in-down 0.6s ease-in-out',
				'fade-in-left': 'fade-in-left 0.6s ease-in-out',
				'fade-in-right': 'fade-in-right 0.6s ease-in-out',
				'fade-out-up': 'fade-out-up 0.6s ease-out',
				'fade-out-down': 'fade-out-down 0.6s ease-out',
				'fade-out-left': 'fade-out-left 0.6s ease-out',
				'fade-out-right': 'fade-out-right 0.6s ease-out',
				sway: 'sway 0.6s ease-out',
				'flip-in-x': 'flip-in-x 0.6s ease-out',
				'flip-in-y': 'flip-in-y 0.6s ease-out',
				'flip-out-x': 'flip-out-x 0.6s ease-out',
				'flip-out-y': 'flip-out-y 0.6s ease-out',
				'rotate-in': 'rotate-in 0.6s ease-out',
				'rotate-out': 'rotate-out 0.6s ease-out',
				'slide-rotate-in': 'slide-rotate-in 0.6s ease-out',
				'slide-rotate-out': 'slide-rotate-out 0.6s ease-out',
				heartbeat: 'heartbeat 0.6s ease-out',
				'blurred-fade-in': 'blurred-fade-in 0.9s ease-in-out',
				'horizontal-vibration':
					'horizontal-vibration 0.3s linear infinite',
				'rotational-wave': 'rotational-wave 2s ease-in-out infinite',
				skew: 'skew 0.5s ease-in-out',
				'vertical-bounce': 'vertical-bounce 0.6s ease-in-out',
				'horizontal-bounce': 'horizontal-bounce 0.6s ease-in-out',
				tilt: 'tilt 0.6s ease-in-out',
				squeeze: 'squeeze 0.6s ease-in-out',
				'slide-up-fade': 'slide-up-fade 0.6s ease-out',
				'bounce-fade-in': 'bounce-fade-in 0.6s ease-out',
				'swing-drop-in': 'swing-drop-in 0.6s ease-out',
				'pulse-fade-in': 'pulse-fade-in 0.6s ease-out',
				'banner-loop': 'banner-loop 15s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			keyframes: {
				'background-shine': {
					from: {
						backgroundPosition: '0 0'
					},
					to: {
						backgroundPosition: '-200% 0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1'
					},
					'100%': {
						opacity: '0'
					}
				},
				'slide-in-top': {
					'0%': {
						transform: 'translateY(-20px)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				},
				'slide-in-bottom': {
					'0%': {
						transform: 'translateY(20px)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				},
				'slide-out-top': {
					'0%': {
						transform: 'translateY(0)'
					},
					'100%': {
						transform: 'translateY(-20px)'
					}
				},
				'slide-out-bottom': {
					'0%': {
						transform: 'translateY(0)'
					},
					'100%': {
						transform: 'translateY(20px)'
					}
				},
				'zoom-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(.5)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'zoom-out': {
					'0%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'100%': {
						opacity: '0',
						transform: 'scale(.5)'
					}
				},
				'rotate-90': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(90deg)'
					}
				},
				'rotate-180': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(180deg)'
					}
				},
				'rotate-360': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'flip-horizontal': {
					'0%': {
						transform: 'rotateY(0deg)'
					},
					'100%': {
						transform: 'rotateY(180deg)'
					}
				},
				'flip-vertical': {
					'0%': {
						transform: 'rotateX(0deg)'
					},
					'100%': {
						transform: 'rotateX(180deg)'
					}
				},
				bounce: {
					'0%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				},
				swing: {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'50%': {
						transform: 'rotate(15deg)'
					},
					'100%': {
						transform: 'rotate(0deg)'
					}
				},
				wobble: {
					'0%': {
						transform: 'translateX(0)'
					},
					'15%': {
						transform: 'translateX(-20px)'
					},
					'30%': {
						transform: 'translateX(20%)'
					},
					'45%': {
						transform: 'translateX(-15%)'
					},
					'60%': {
						transform: 'translateX(20px)'
					},
					'75%': {
						transform: 'translateX(-5%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				pulse: {
					'0%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.1)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				shake: {
					'0%': {
						transform: 'translateX(0)'
					},
					'25%': {
						transform: 'translateX(-10px)'
					},
					'50%': {
						transform: 'translateX(10px)'
					},
					'75%': {
						transform: 'translateX(-10px)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				tada: {
					'0%': {
						transform: 'scale(1)'
					},
					'10%': {
						transform: 'scale(0.9) rotate(-3deg)'
					},
					'20%': {
						transform: 'scale(0.9) rotate(-3deg)'
					},
					'30%': {
						transform: 'scale(1.1) rotate(3deg)'
					},
					'40%': {
						transform: 'scale(1.1) rotate(-3deg)'
					},
					'50%': {
						transform: 'scale(1.1) rotate(3deg)'
					},
					'60%': {
						transform: 'scale(1.1) rotate(-3deg)'
					},
					'70%': {
						transform: 'scale(1.1) rotate(3deg)'
					},
					'80%': {
						transform: 'scale(1.1) rotate(-3deg)'
					},
					'90%': {
						transform: 'scale(1.1) rotate(3deg)'
					},
					'100%': {
						transform: 'scale(1) rotate(0)'
					}
				},
				jump: {
					'0%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				},
				hang: {
					'0%': {
						transform: 'translateY(-20px)'
					},
					'50%': {
						transform: 'translateY(0)'
					},
					'100%': {
						transform: 'translateY(-20px)'
					}
				},
				'roll-in': {
					'0%': {
						transform: 'translateX(-20px) rotate(-120deg)'
					},
					'100%': {
						transform: 'translateX(0) rotate(0)'
					}
				},
				'roll-out': {
					'0%': {
						transform: 'translateX(0) rotate(0)'
					},
					'100%': {
						transform: 'translateX(20px) rotate(120deg)'
					}
				},
				float: {
					'0%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				},
				sink: {
					'0%': {
						transform: 'translateY(-10px)'
					},
					'50%': {
						transform: 'translateY(0)'
					},
					'100%': {
						transform: 'translateY(-10px)'
					}
				},
				flash: {
					'0%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				jiggle: {
					'0%': {
						transform: 'rotate(-3deg)'
					},
					'50%': {
						transform: 'rotate(3deg)'
					},
					'100%': {
						transform: 'rotate(-3deg)'
					}
				},
				'rubber-band': {
					'0%': {
						transform: 'scale(1)'
					},
					'30%': {
						transform: 'scale(1.25)'
					},
					'40%': {
						transform: 'scale(0.75)'
					},
					'50%': {
						transform: 'scale(1.15)'
					},
					'65%': {
						transform: 'scale(0.95)'
					},
					'75%': {
						transform: 'scale(1.05)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-20px)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(20px)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'slide-out-left': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-20px)'
					}
				},
				'slide-out-right': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(20px)'
					}
				},
				'spin-clockwise': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'spin-counter-clockwise': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(-360deg)'
					}
				},
				'flip-x': {
					'0%': {
						transform: 'scaleX(1)'
					},
					'50%': {
						transform: 'scaleX(-1)'
					},
					'100%': {
						transform: 'scaleX(1)'
					}
				},
				'flip-y': {
					'0%': {
						transform: 'scaleY(1)'
					},
					'50%': {
						transform: 'scaleY(-1)'
					},
					'100%': {
						transform: 'scaleY(1)'
					}
				},
				blink: {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				pop: {
					'0%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.1)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'expand-horizontally': {
					'0%': {
						transform: 'scaleX(0)'
					},
					'100%': {
						transform: 'scaleX(1)'
					}
				},
				'contract-horizontally': {
					'0%': {
						transform: 'scaleX(1)'
					},
					'100%': {
						transform: 'scaleX(0)'
					}
				},
				'expand-vertically': {
					'0%': {
						transform: 'scaleY(0)'
					},
					'100%': {
						transform: 'scaleY(1)'
					}
				},
				'contract-vertically': {
					'0%': {
						transform: 'scaleY(1)'
					},
					'100%': {
						transform: 'scaleY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-out-up': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(-20px)'
					}
				},
				'fade-out-down': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(20px)'
					}
				},
				'fade-out-left': {
					'0%': {
						opacity: '1',
						transform: 'translateX(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					}
				},
				'fade-out-right': {
					'0%': {
						opacity: '1',
						transform: 'translateX(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(20px)'
					}
				},
				sway: {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'50%': {
						transform: 'rotate(15deg)'
					},
					'100%': {
						transform: 'rotate(0deg)'
					}
				},
				'flip-in-x': {
					'0%': {
						opacity: '0',
						transform: 'rotateY(90deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'rotateY(0deg)'
					}
				},
				'flip-in-y': {
					'0%': {
						opacity: '0',
						transform: 'rotateX(90deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'rotateX(0deg)'
					}
				},
				'flip-out-x': {
					'0%': {
						opacity: '1',
						transform: 'rotateY(0deg)'
					},
					'100%': {
						opacity: '0',
						transform: 'rotateY(90deg)'
					}
				},
				'flip-out-y': {
					'0%': {
						opacity: '1',
						transform: 'rotateX(0deg)'
					},
					'100%': {
						opacity: '0',
						transform: 'rotateX(90deg)'
					}
				},
				'rotate-in': {
					'0%': {
						opacity: '0',
						transform: 'rotate(-90deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'rotate(0deg)'
					}
				},
				'rotate-out': {
					'0%': {
						opacity: '1',
						transform: 'rotate(0deg)'
					},
					'100%': {
						opacity: '0',
						transform: 'rotate(90deg)'
					}
				},
				'slide-rotate-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px) rotate(-90deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) rotate(0deg)'
					}
				},
				'slide-rotate-out': {
					'0%': {
						opacity: '1',
						transform: 'translateX(0) rotate(0deg)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(20px) rotate(90deg)'
					}
				},
				heartbeat: {
					'0%': {
						transform: 'scale(1)'
					},
					'25%': {
						transform: 'scale(1.1)'
					},
					'50%': {
						transform: 'scale(1)'
					},
					'75%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'blurred-fade-in': {
					'0%': {
						filter: 'blur(5px)',
						opacity: '0'
					},
					'100%': {
						filter: 'blur(0)',
						opacity: '1'
					}
				},
				'horizontal-vibration': {
					'0%': {
						transform: 'translateX(0)'
					},
					'25%': {
						transform: 'translateX(5px)'
					},
					'50%': {
						transform: 'translateX(-5px)'
					},
					'75%': {
						transform: 'translateX(5px)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'rotational-wave': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(10deg)'
					},
					'50%': {
						transform: 'rotate(-10deg)'
					},
					'75%': {
						transform: 'rotate(10deg)'
					},
					'100%': {
						transform: 'rotate(0deg)'
					}
				},
				skew: {
					'0%': {
						transform: 'skew(0deg)'
					},
					'100%': {
						transform: 'skew(20deg)'
					}
				},
				'vertical-bounce': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'horizontal-bounce': {
					'0%, 100%': {
						transform: 'translateX(0)'
					},
					'50%': {
						transform: 'translateX(20px)'
					}
				},
				tilt: {
					'0%': {
						transform: 'rotateY(0deg)'
					},
					'50%': {
						transform: 'rotateY(20deg)'
					},
					'100%': {
						transform: 'rotateY(0deg)'
					}
				},
				squeeze: {
					'0%, 100%': {
						transform: 'scale(1, 1)'
					},
					'50%': {
						transform: 'scale(1.1, 0.9)'
					}
				},
				'slide-up-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'bounce-fade-in': {
					'0%': {
						transform: 'scale(0.5)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'swing-drop-in': {
					'0%': {
						transform: 'rotate(-30deg) translateY(-50px)',
						opacity: '0'
					},
					'100%': {
						transform: 'rotate(0deg) translateY(0)',
						opacity: '1'
					}
				},
				'pulse-fade-in': {
					'0%': {
						transform: 'scale(0.9)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '0.5'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'banner-loop': {
					'0%': {
						transform: 'translateX(90%)'
					},
					'100%': {
						transform: 'translateX(-90%)'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
} satisfies Config
