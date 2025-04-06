import { ReactNode } from 'react'

interface ManualSectionProps {
  id: string
  title: string
  children: ReactNode
}

export default function ManualSection({ id, title, children }: ManualSectionProps) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="prose max-w-none">
        {children}
      </div>
    </section>
  )
} 