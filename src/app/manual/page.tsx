import { Metadata } from 'next'
import ManualNavigation from './components/ManualNavigation'
import ManualSection from './components/ManualSection'
import InfoCard from './components/InfoCard'
import FAQ from './components/FAQ'
import './manual.css'

export const metadata: Metadata = {
  title: 'Manual de Usuario - Sistema POS',
  description: 'Manual completo del Sistema POS de Gestión de Ventas'
}

export default function ManualPage() {
  return (
    <div className="flex min-h-screen">
      <ManualNavigation />
      <main className="flex-1 ml-64 p-8 manual-content">
        <ManualSection id="introduccion" title="Introducción">
          <p className="text-gray-700 mb-4">
            El Sistema POS de Gestión de Ventas ha sido diseñado para facilitar la administración eficiente de ventas, 
            inventario, clientes, proveedores y operaciones de caja en pequeñas y medianas empresas. Esta aplicación 
            robusta permite realizar un seguimiento preciso de las operaciones comerciales diarias, optimizando procesos 
            y mejorando la experiencia tanto para el personal como para los clientes.
          </p>
        </ManualSection>

        <ManualSection id="requisitos" title="Requisitos del Sistema">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="Hardware">
              <ul className="list-disc pl-4 space-y-2">
                <li>Procesador: Intel Core i3 o equivalente (2.4 GHz o superior)</li>
                <li>Memoria RAM: 4 GB mínimo (8 GB recomendado)</li>
                <li>Disco Duro: 500 MB de espacio libre para la instalación</li>
                <li>Resolución de pantalla: 1366 x 768 o superior</li>
              </ul>
            </InfoCard>
            <InfoCard title="Software">
              <ul className="list-disc pl-4 space-y-2">
                <li>Sistema Operativo: Windows 10/11, macOS 10.14 o superior, distribuciones Linux actualizadas</li>
                <li>Navegador (para versión web): Chrome 88+, Firefox 85+, Edge 88+, Safari 14+</li>
                <li>Conexión a Internet (para actualizaciones y algunas funcionalidades)</li>
              </ul>
            </InfoCard>
          </div>
          
          <InfoCard title="Periféricos Opcionales" className="mt-6">
            <ul className="list-disc pl-4 space-y-2">
              <li>Impresora térmica para recibos</li>
              <li>Lector de código de barras</li>
              <li>Cajón de dinero</li>
              <li>Pantalla táctil</li>
            </ul>
          </InfoCard>
        </ManualSection>

        <ManualSection id="acceso" title="Acceso al Sistema">
          <InfoCard title="Proceso de Inicio de Sesión">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Inicie la aplicación desde el acceso directo en el escritorio o desde el menú de inicio</li>
              <li>En la pantalla de inicio de sesión, ingrese sus credenciales:
                <ul className="list-disc pl-4 mt-2">
                  <li>Usuario (proporcionado por el administrador)</li>
                  <li>Contraseña (proporcionada por el administrador)</li>
                </ul>
              </li>
              <li>Haga clic en el botón "Ingresar"</li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Recuperación de Contraseña" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Haga clic en "¿Olvidó su contraseña?"</li>
              <li>Introduzca su correo electrónico registrado</li>
              <li>Espere el correo de confirmación y siga las instrucciones</li>
              <li>Una vez completado el proceso, regrese al login para ingresar al sistema</li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Recomendaciones de Seguridad" className="mt-6">
            <ul className="list-disc pl-4 space-y-2">
              <li>No comparta sus credenciales con otros usuarios</li>
              <li>Cambie su contraseña periódicamente</li>
              <li>Cierre sesión al finalizar su jornada laboral</li>
              <li>No deje el sistema desatendido mientras su sesión está activa</li>
            </ul>
          </InfoCard>
        </ManualSection>

        <ManualSection id="interfaz" title="Descripción General de la Interfaz">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="Barra de Menú Superior">
              <ul className="list-disc pl-4 space-y-2">
                <li>Nombre del usuario activo</li>
                <li>Perfil</li>
                <li>Opciones de configuración</li>
                <li>Opción de cierre de sesión</li>
              </ul>
            </InfoCard>
            <InfoCard title="Menú Lateral Izquierdo">
              <ul className="list-disc pl-4 space-y-2">
                <li>Nueva Venta</li>
                <li>Clientes</li>
                <li>Ventas</li>
                <li>Caja</li>
                <li>Compras</li>
                <li>Proveedores</li>
                <li>Productos</li>
                <li>Configuración (solo para administradores)</li>
              </ul>
            </InfoCard>
          </div>
          
          <InfoCard title="Área de Trabajo Principal" className="mt-6">
            <p>Es donde se visualiza y trabaja con el módulo seleccionado.</p>
          </InfoCard>
          
          <InfoCard title="Barra de Estado Inferior" className="mt-6">
            <ul className="list-disc pl-4 space-y-2">
              <li>Versión del sistema</li>
              <li>Acceso rápido a ayuda</li>
              <li>Política de privacidad y Términos & Condiciones</li>
            </ul>
          </InfoCard>
        </ManualSection>

        <ManualSection id="ventas" title="Módulo de Nueva Venta">
          <InfoCard title="Elementos Principales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Búsqueda de productos:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Por código</li>
                  <li>Por nombre</li>
                  <li>Por categoría</li>
                  <li>Mediante lector de código de barras</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Información del cliente:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Cliente por defecto (Consumidor final)</li>
                  <li>Opción para seleccionar cliente existente</li>
                  <li>Opción para crear nuevo cliente</li>
                </ul>
              </div>
            </div>
          </InfoCard>
          
          <InfoCard title="Tabla de Productos Seleccionados" className="mt-6">
            <ul className="list-disc pl-4 space-y-1">
              <li>Código</li>
              <li>Descripción</li>
              <li>Cantidad</li>
              <li>Precio Unitario</li>
              <li>Subtotal</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Resumen de Venta" className="mt-6">
            <ul className="list-disc pl-4 space-y-1">
              <li>Subtotal</li>
              <li>Descuentos</li>
              <li>Impuestos</li>
              <li>Total a pagar</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Proceso para Realizar una Nueva Venta" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>
                <strong>Seleccionar cliente:</strong>
                <ul className="list-disc pl-4 mt-1">
                  <li>Haga clic en "Buscar Cliente" e ingrese el nombre (el sistema ofrece autocompletado)</li>
                  <li>Si el cliente no existe, puede crearlo haciendo clic en "Clientes"</li>
                </ul>
              </li>
              <li>
                <strong>Agregar productos:</strong>
                <ul className="list-disc pl-4 mt-1">
                  <li>Escanee el código de barras con el lector (si dispone de uno)</li>
                  <li>Busque manualmente por código o nombre en el campo de búsqueda</li>
                  <li>Seleccione el producto de la lista de resultados</li>
                  <li>Indique la cantidad deseada</li>
                  <li>Presione Enter</li>
                </ul>
              </li>
              <li>
                <strong>Modificar cantidad:</strong>
                <ul className="list-disc pl-4 mt-1">
                  <li>Haga clic sobre el producto en la tabla</li>
                  <li>Modifique la cantidad</li>
                </ul>
              </li>
              <li>
                <strong>Eliminar un producto:</strong>
                <ul className="list-disc pl-4 mt-1">
                  <li>Seleccione el producto en la tabla</li>
                  <li>Haga clic en el botón en la tabla de acciones</li>
                </ul>
              </li>
              <li>
                <strong>Finalizar venta:</strong>
                <ul className="list-disc pl-4 mt-1">
                  <li>Verifique los productos y cantidades</li>
                  <li>Haga clic en "Generar venta"</li>
                  <li>Confirme la operación</li>
                </ul>
              </li>
              <li>
                <strong>Impresión de comprobante:</strong>
                <ul className="list-disc pl-4 mt-1">
                  <li>Una vez finalizada la venta, se generará automáticamente un comprobante</li>
                  <li>Seleccione si desea imprimir el comprobante</li>
                  <li>Para imprimir, haga clic en "Imprimir"</li>
                  <li>Si desea ver la venta, diríjase a "Ventas"</li>
                </ul>
              </li>
            </ol>
          </InfoCard>
        </ManualSection>

        <ManualSection id="clientes" title="Módulo de Clientes">
          <InfoCard title="Elementos Principales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Barra de búsqueda:</h4>
                <p>Permite buscar clientes por nombre, identificación o código</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tabla de clientes:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Código</li>
                  <li>Nombre completo</li>
                  <li>Identificación fiscal</li>
                  <li>Teléfono</li>
                  <li>Dirección</li>
                  <li>Estado (Activo/Inactivo)</li>
                </ul>
              </div>
            </div>
          </InfoCard>
          
          <InfoCard title="Opciones de Gestión" className="mt-6">
            <ul className="list-disc pl-4 space-y-1">
              <li>Nuevo cliente</li>
              <li>Editar cliente</li>
              <li>Ver detalles</li>
              <li>Desactivar/Activar cliente</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Proceso para Registrar un Nuevo Cliente" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Haga clic en el botón "Nuevo Cliente"</li>
              <li>Complete el formulario con la información requerida:
                <ul className="list-disc pl-4 mt-1">
                  <li>Nombre y apellidos (obligatorio)</li>
                  <li>Número de identificación (obligatorio)</li>
                  <li>Dirección</li>
                  <li>Teléfono</li>
                </ul>
              </li>
              <li>Haga clic en "Guardar"</li>
              <li>El sistema confirmará el registro exitoso</li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Proceso para Editar un Cliente" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Busque el cliente en la lista o mediante la barra de búsqueda</li>
              <li>Seleccione el cliente</li>
              <li>Haga clic en "Editar"</li>
              <li>Modifique los campos necesarios</li>
              <li>Haga clic en "Guardar" para confirmar los cambios</li>
            </ol>
          </InfoCard>
        </ManualSection>

        <ManualSection id="historial-ventas" title="Módulo de Ventas">
          <InfoCard title="Elementos Principales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Filtros de búsqueda:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Por fecha (desde - hasta)</li>
                  <li>Por cliente</li>
                  <li>Por usuario/vendedor</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tabla de ventas:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Número de factura</li>
                  <li>Fecha y hora</li>
                  <li>Cliente</li>
                  <li>Vendedor</li>
                  <li>Total</li>
                </ul>
              </div>
            </div>
          </InfoCard>
          
          <InfoCard title="Opciones Disponibles" className="mt-6">
            <ul className="list-disc pl-4 space-y-1">
              <li>Ver detalle de venta</li>
              <li>Reimprimir comprobante</li>
              <li>Anular venta (con permisos adecuados)</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Proceso para Consultar una Venta Específica" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Aplique los filtros necesarios para localizar la venta</li>
              <li>Haga clic en el botón "Buscar"</li>
              <li>Localice la venta en la tabla de resultados</li>
              <li>Haga clic en "Ver Detalle"</li>
              <li>Se mostrará una ventana con la información completa de la venta:
                <ul className="list-disc pl-4 mt-1">
                  <li>Datos del cliente</li>
                  <li>Productos vendidos (cantidad, precio, descuentos)</li>
                  <li>Subtotal, impuestos y total</li>
                  <li>Método de pago utilizado</li>
                  <li>Usuario que realizó la venta</li>
                </ul>
              </li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Proceso para Anular una Venta" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Localice la venta en la tabla</li>
              <li>Haga clic en "eliminar"</li>
              <li>Confirme la operación (requiere permisos de administrador o supervisor)</li>
              <li>El sistema actualizará el inventario y los registros contables</li>
            </ol>
          </InfoCard>
        </ManualSection>

        <ManualSection id="caja" title="Módulo de Caja">
          <InfoCard title="Elementos Principales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Estado de caja:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Muestra el usuario responsable de la caja actual</li>
                  <li>Fecha y hora de apertura</li>
                  <li>Saldo actual</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Operaciones disponibles:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Apertura de caja</li>
                  <li>Cierre de caja</li>
                  <li>Entrada de dinero</li>
                  <li>Salida de dinero</li>
                  <li>Consulta de movimientos</li>
                </ul>
              </div>
            </div>
          </InfoCard>
          
          <InfoCard title="Historial de Operaciones" className="mt-6">
            <p>Tabla con todas las operaciones realizadas en la caja actual</p>
          </InfoCard>
          
          <InfoCard title="Reportes de Compras y Ventas" className="mt-6">
            <ul className="list-disc pl-4 space-y-1">
              <li>Cartas con información tanto de compras como de ventas</li>
              <li>Productos más vendidos y las compras hechas en el día</li>
              <li>Tabla de ventas en el día con valores y detalles</li>
              <li>Tabla de compras en el día con valores y detalles</li>
            </ul>
          </InfoCard>
        </ManualSection>

        <ManualSection id="compras" title="Módulo de Compras">
          <InfoCard title="Elementos Principales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Opciones disponibles:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Nueva compra</li>
                  <li>Consulta de compras</li>
                  <li>Informes de compras</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Listado de compras recientes:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Muestra las últimas compras realizadas</li>
                  <li>Incluye proveedor, fecha, monto y estado</li>
                </ul>
              </div>
            </div>
          </InfoCard>
          
          <InfoCard title="Proceso para Registrar una Nueva Compra" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Haga clic en "Nueva Compra"</li>
              <li>Seleccione el proveedor de la lista o regístrelo si es nuevo</li>
              <li>Ingrese los datos de la factura del proveedor:
                <ul className="list-disc pl-4 mt-1">
                  <li>Número de factura</li>
                  <li>Fecha de emisión</li>
                  <li>Fecha de recepción</li>
                </ul>
              </li>
              <li>Agregue los productos:
                <ul className="list-disc pl-4 mt-1">
                  <li>Busque el producto por código o nombre</li>
                  <li>Ingrese la cantidad</li>
                  <li>Ingrese el precio de compra</li>
                  <li>Verifique el subtotal</li>
                  <li>Haga clic en "Agregar"</li>
                </ul>
              </li>
              <li>Repita el paso 4 para cada producto</li>
              <li>Verifique el resumen de la compra:
                <ul className="list-disc pl-4 mt-1">
                  <li>Subtotal</li>
                  <li>Impuestos</li>
                  <li>Descuentos (si aplica)</li>
                  <li>Total</li>
                </ul>
              </li>
              <li>Haga clic en "Finalizar Compra"</li>
              <li>El sistema actualizará automáticamente el inventario</li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Proceso para Consultar Compras" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>En la sección "Consulta de Compras", aplique filtros:
                <ul className="list-disc pl-4 mt-1">
                  <li>Por fecha</li>
                  <li>Por proveedor</li>
                </ul>
              </li>
              <li>Haga clic en "Buscar"</li>
              <li>Se mostrará la lista de compras que cumplen con los criterios</li>
              <li>Para ver detalles de una compra, haga clic en "Ver Detalle"</li>
            </ol>
          </InfoCard>
        </ManualSection>

        <ManualSection id="proveedores" title="Módulo de Proveedores">
          <InfoCard title="Elementos Principales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Barra de búsqueda:</h4>
                <p>Permite buscar proveedores por nombre o código</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tabla de proveedores:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Código</li>
                  <li>Nombre/Razón social</li>
                  <li>Teléfono</li>
                  <li>Dirección</li>
                </ul>
              </div>
            </div>
          </InfoCard>
          
          <InfoCard title="Opciones Disponibles" className="mt-6">
            <ul className="list-disc pl-4 space-y-1">
              <li>Nuevo proveedor</li>
              <li>Editar proveedor</li>
              <li>Ver detalles</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Proceso para Registrar un Nuevo Proveedor" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Haga clic en "Nuevo Proveedor"</li>
              <li>Complete el formulario con la información requerida:
                <ul className="list-disc pl-4 mt-1">
                  <li>Nombre o razón social (obligatorio)</li>
                  <li>Dirección</li>
                  <li>Teléfono principal</li>
                </ul>
              </li>
              <li>Haga clic en "Guardar"</li>
              <li>El sistema confirmará el registro exitoso</li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Proceso para Editar un Proveedor" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Busque el proveedor en la lista o mediante la barra de búsqueda</li>
              <li>Seleccione el proveedor</li>
              <li>Haga clic en "Editar"</li>
              <li>Modifique los campos necesarios</li>
              <li>Haga clic en "Guardar" para confirmar los cambios</li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Consulta de Historial de Compras por Proveedor" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Busque y seleccione el proveedor</li>
              <li>Haga clic en "Historial de Compras"</li>
              <li>Se mostrará una pantalla con todas las compras realizadas al proveedor</li>
              <li>Puede filtrar por rango de fechas o monto</li>
              <li>Para ver detalles de una compra específica, haga clic sobre ella</li>
            </ol>
          </InfoCard>
        </ManualSection>

        <ManualSection id="productos" title="Módulo de Productos">
          <InfoCard title="Elementos Principales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Barra de búsqueda:</h4>
                <p>Permite buscar productos por código, nombre o categoría</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tabla de productos:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Código</li>
                  <li>Nombre</li>
                  <li>Precio</li>
                  <li>Stock actual</li>
                  <li>Estado</li>
                </ul>
              </div>
            </div>
          </InfoCard>
          
          <InfoCard title="Opciones Disponibles" className="mt-6">
            <ul className="list-disc pl-4 space-y-1">
              <li>Nuevo producto</li>
              <li>Editar producto</li>
              <li>Ver detalles</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Proceso para Registrar un Nuevo Producto" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Haga clic en "Nuevo Producto"</li>
              <li>Complete el formulario con la información requerida:
                <ul className="list-disc pl-4 mt-1">
                  <li>Código (manual o generado automáticamente)</li>
                  <li>Código de barras (opcional)</li>
                  <li>Nombre del producto (obligatorio)</li>
                  <li>Descripción detallada</li>
                  <li>Precio</li>
                </ul>
              </li>
              <li>Haga clic en "Guardar"</li>
              <li>El sistema confirmará el registro exitoso</li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Proceso para Editar un Producto" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Busque el producto en la lista o mediante la barra de búsqueda</li>
              <li>Seleccione el producto</li>
              <li>Haga clic en "Editar"</li>
              <li>Modifique los campos necesarios</li>
              <li>Haga clic en "Guardar" para confirmar los cambios</li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Proceso para Gestionar el Stock" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Busque y seleccione el producto</li>
              <li>Haga clic en "Gestionar Stock"</li>
              <li>Se mostrará una pantalla con opciones:
                <ul className="list-disc pl-4 mt-1">
                  <li>Entrada manual de stock</li>
                  <li>Ajuste de inventario</li>
                </ul>
              </li>
              <li>Seleccione la operación deseada</li>
              <li>Complete la información requerida:
                <ul className="list-disc pl-4 mt-1">
                  <li>Cantidad</li>
                  <li>Precio</li>
                </ul>
              </li>
              <li>Haga clic en "Confirmar"</li>
              <li>El sistema actualizará el inventario</li>
            </ol>
          </InfoCard>
        </ManualSection>

        <ManualSection id="usuarios" title="Módulo de Usuarios">
          <InfoCard title="Elementos Principales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Barra de búsqueda:</h4>
                <p>Permite buscar usuarios por nombre, usuario o rol</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tabla de usuarios:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Nombre completo</li>
                  <li>Nombre de usuario</li>
                  <li>Rol asignado</li>
                  <li>Correo electrónico</li>
                  <li>Estado (Activo/Inactivo)</li>
                </ul>
              </div>
            </div>
          </InfoCard>
          
          <InfoCard title="Opciones Disponibles" className="mt-6">
            <ul className="list-disc pl-4 space-y-1">
              <li>Nuevo usuario</li>
              <li>Editar usuario</li>
              <li>Desactivar/Activar usuario</li>
              <li>Restablecer contraseña</li>
              <li>Configurar permisos</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Roles Predefinidos en el Sistema" className="mt-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Administrador:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Acceso completo a todos los módulos y funcionalidades</li>
                  <li>Puede crear y gestionar usuarios</li>
                  <li>Puede configurar parámetros del sistema</li>
                  <li>Acceso a informes completos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Supervisor:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Acceso a la mayoría de los módulos</li>
                  <li>Puede anular ventas y compras</li>
                  <li>Acceso a informes principales</li>
                  <li>No puede modificar configuraciones críticas del sistema</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Vendedor:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Acceso a módulos de ventas, clientes y productos</li>
                  <li>Puede realizar ventas y consultar inventario</li>
                  <li>Acceso limitado a informes básicos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Cajero:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Acceso a módulos de ventas y caja</li>
                  <li>Puede realizar operaciones de caja (apertura, cierre, entradas, salidas)</li>
                  <li>Puede realizar ventas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Almacén:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Acceso a módulos de productos, compras y proveedores</li>
                  <li>Puede gestionar inventario y recibir compras</li>
                  <li>No puede realizar ventas ni operaciones de caja</li>
                </ul>
              </div>
            </div>
          </InfoCard>
          
          <InfoCard title="Proceso para Crear un Nuevo Usuario" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Haga clic en "Nuevo Usuario"</li>
              <li>Complete el formulario con la información requerida:
                <ul className="list-disc pl-4 mt-1">
                  <li>Nombre completo (obligatorio)</li>
                  <li>Nombre de usuario (obligatorio)</li>
                  <li>Correo electrónico (obligatorio)</li>
                  <li>Rol principal (obligatorio)</li>
                  <li>Contraseña temporal (se generará automáticamente)</li>
                </ul>
              </li>
              <li>Haga clic en "Guardar"</li>
              <li>El sistema confirmará el registro exitoso y enviará un correo al nuevo usuario con sus credenciales</li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Proceso para Editar un Usuario" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Busque el usuario en la lista o mediante la barra de búsqueda</li>
              <li>Seleccione el usuario</li>
              <li>Haga clic en "Editar"</li>
              <li>Modifique los campos necesarios</li>
              <li>Haga clic en "Guardar" para confirmar los cambios</li>
            </ol>
          </InfoCard>
          
          <InfoCard title="Proceso para Configurar Permisos Específicos" className="mt-6">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Busque y seleccione el usuario</li>
              <li>Haga clic en "Configurar Permisos"</li>
              <li>Se mostrará una pantalla con todos los permisos organizados por módulos</li>
              <li>Marque o desmarque los permisos según sea necesario</li>
              <li>Haga clic en "Guardar Permisos"</li>
            </ol>
          </InfoCard>
        </ManualSection>

        <ManualSection id="faq" title="Preguntas Frecuentes">
          <FAQ />
        </ManualSection>
      </main>
    </div>
  )
}