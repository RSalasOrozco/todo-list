"use cliente";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              MiTDL
            </Link>
          </div>

          {/* Enlaces de navegación */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Inicio
            </Link>
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Acerca de
            </Link>
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Contacto
            </Link>
          </div>

          {/* Botón de acción */}
          <div>
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
