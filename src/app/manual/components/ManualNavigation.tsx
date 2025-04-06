import Link from 'next/link'
import { cn } from '@/lib/utils'

const sections = [
  { id: 'introduccion', title: 'Introducción' },
  { id: 'requisitos', title: 'Requisitos del Sistema' },
  { id: 'acceso', title: 'Acceso al Sistema' },
  { id: 'interfaz', title: 'Descripción General de la Interfaz' },
  { id: 'ventas', title: 'Módulo de Nueva Venta' },
  { id: 'clientes', title: 'Módulo de Clientes' },
  { id: 'historial-ventas', title: 'Módulo de Ventas' },
  { id: 'caja', title: 'Módulo de Caja' },
  { id: 'compras', title: 'Módulo de Compras' },
  { id: 'proveedores', title: 'Módulo de Proveedores' },
  { id: 'productos', title: 'Módulo de Productos' },
  { id: 'usuarios', title: 'Módulo de Usuarios' },
  { id: 'faq', title: 'Preguntas Frecuentes' }
]

export default function ManualNavigation() {
  return (
    <nav className="w-64 h-screen fixed left-0 top-0 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Manual de Usuario</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className={cn(
                'block px-4 py-2 rounded hover:bg-gray-200 transition-colors',
                'text-gray-700 hover:text-gray-900'
              )}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
} 