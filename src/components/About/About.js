export default function About() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Sobre Mí</h2>
          <p className="text-lg text-gray-200 mb-8">
            ¡Hola! Soy un apasionado desarrollador web en constante aprendizaje.
            Actualmente, estoy creando proyectos para afianzar mis conocimientos
            y mejorar mis habilidades en tecnologías como React, Next.js,
            Tailwind CSS y más. Mi objetivo es convertirme en un desarrollador
            full-stack altamente capacitado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                Proyectos Recientes
              </h3>
              <ul className="text-gray-700">
                <li className="mb-2">
                  • To-Do List con Next.js y Tailwind CSS
                </li>
                <li className="mb-2">• Blog Personal con Markdown</li>
                <li className="mb-2">• E-commerce con React y Firebase</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-4">
                Habilidades
              </h3>
              <ul className="text-gray-700">
                <li className="mb-2">• HTML, CSS, JavaScript</li>
                <li className="mb-2">• React, Next.js</li>
                <li className="mb-2">• Tailwind CSS, Bootstrap</li>
                <li className="mb-2">• Git y Control de Versiones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
