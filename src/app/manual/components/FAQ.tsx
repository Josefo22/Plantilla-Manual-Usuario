'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={cn(
            'h-5 w-5 transform transition-transform duration-200',
            isOpen ? 'rotate-180' : ''
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="faq-answer">
          {answer}
        </div>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: '¿Cómo puedo anular una venta ya finalizada?',
    answer: 'Para anular una venta, acceda al módulo "Ventas", busque la venta que desea anular, selecciónela y haga clic en "Anular". Deberá ingresar el motivo de la anulación y contar con los permisos adecuados para realizar esta operación.'
  },
  {
    question: '¿Qué debo hacer si cometo un error al registrar una compra?',
    answer: 'Si aún no ha finalizado la compra, puede corregir los datos directamente. Si ya finalizó la compra, debe anularla y registrarla nuevamente. Para anular, vaya al módulo "Compras", busque la compra, selecciónela y haga clic en "Anular".'
  },
  {
    question: '¿Cómo puedo modificar el precio de un producto?',
    answer: 'Acceda al módulo "Productos", busque el producto, selecciónelo, haga clic en "Editar", modifique el precio y guarde los cambios.'
  },
  {
    question: '¿Es posible realizar una venta si no hay suficiente stock?',
    answer: 'Por defecto, el sistema alerta cuando intenta vender más unidades de las disponibles en stock. Sin embargo, según la configuración del sistema, puede permitir ventas con stock negativo si cuenta con los permisos adecuados.'
  },
  {
    question: '¿Cómo registro la devolución de un producto por parte de un cliente?',
    answer: 'Acceda al módulo "Ventas", busque la venta original, selecciónela, haga clic en "Devolución", seleccione los productos a devolver y complete el proceso según las instrucciones en pantalla.'
  },
  {
    question: '¿Puedo tener múltiples cajas abiertas simultáneamente?',
    answer: 'Sí, el sistema permite la operación de múltiples cajas simultáneas, cada una asignada a un usuario diferente, si cuenta con los permisos y la configuración adecuada.'
  },
  {
    question: '¿Cómo puedo ver el historial de cambios de precios de un producto?',
    answer: 'En el módulo "Productos", seleccione el producto deseado, haga clic en "Ver Detalles" y luego en la pestaña "Historial de Precios".'
  }
]

export default function FAQ() {
  return (
    <section className="faq-section">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  )
} 