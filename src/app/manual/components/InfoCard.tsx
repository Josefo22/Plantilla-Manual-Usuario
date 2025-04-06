import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface InfoCardProps {
  title: string
  children: ReactNode
  className?: string
}

export default function InfoCard({ title, children, className }: InfoCardProps) {
  return (
    <div className={cn('bg-white p-6 rounded-lg shadow', className)}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  )
} 