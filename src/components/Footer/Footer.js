// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-52">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección 1: Logo y descripción */}
          <div>
            <h2 className="text-xl font-bold mb-4">MiApp</h2>
            <p className="text-gray-400">
              Una aplicación increíble para gestionar tus tareas y proyectos.
            </p>
          </div>

          {/* Sección 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección 3: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-400">Email: info@miapp.com</p>
            <p className="text-gray-400">Teléfono: +123 456 789</p>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MiApp. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
