import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 'Manual de Usuario - Sistema POS de Gestión de Ventas',
		template: '%s | Sistema POS'
	},
	description: 'Manual completo del Sistema POS de Gestión de Ventas. Guía detallada para el uso eficiente del sistema de punto de venta, inventario y administración.',
	keywords: 'sistema pos, punto de venta, manual de usuario, gestión de ventas, inventario, facturación, comercio, software pos',
	authors: [{ name: 'SENA', url: 'https://www.sena.edu.co' }],
	creator: 'SENA',
	publisher: 'SENA',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://sistema-pos.com'),
	openGraph: {
		title: 'Manual de Usuario - Sistema POS de Gestión de Ventas',
		description: 'Manual completo del Sistema POS de Gestión de Ventas. Guía detallada para el uso eficiente del sistema de punto de venta, inventario y administración.',
		url: 'https://sistema-pos.com',
		siteName: 'Sistema POS',
		locale: 'es_CO',
		type: 'website',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Sistema POS de Gestión de Ventas'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Manual de Usuario - Sistema POS',
		description: 'Manual completo del Sistema POS de Gestión de Ventas',
		images: ['/twitter-image.jpg'],
		creator: '@SENA',
		site: '@SistemaPOS'
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	manifest: '/manifest.json',
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png'
	},
	viewport: {
		width: 'device-width',
		initialScale: 1
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="es" dir="ltr">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
