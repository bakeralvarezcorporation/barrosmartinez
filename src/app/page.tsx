// pages/index.tsx
import Link from 'next/link';
import * as motion from 'motion/react-client';
import AnimatedButton from './ui/motion/AnimatedButton';

const Home: React.FC = () => {
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { ease: 'linear' },
          layout: { duration: 0.3 },
        }}
      >
        {/* Hero */}
        <section className="px-16 py-24 ">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Abogados Asociados Martínez Barros
            </h1>
            <p className="text-[#010101] text-xl mb-8 max-w-3xl mx-auto">
              Firma especializada en derecho comercial, servicios fiduciarios,
              asesoría de inversiones y estructuras internacionales. Expertos en
              Empresas Offshore y Fundaciones de Interés Privado en Panamá y
              otras jurisdicciones.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-4">
              <AnimatedButton>
                <Link
                  href="/servicios"
                  className="text-[#010101] bg-white border border-[#010101] font-semibold px-6 py-3 rounded-lg"
                >
                  Nuestros Servicios
                </Link>
              </AnimatedButton>
              <AnimatedButton>
                <Link
                  href="/contacto"
                  className="bg-[#010101] text-white border font-semibold px-6 py-3 rounded-lg hover:text-primary-700 transition-colors"
                >
                  Consultoría Gratuita
                </Link>
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-24 bg-[#010101]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary-50 p-6 rounded-lg text-center shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#BE9A42]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">
                  Confidencialidad Absoluta
                </h3>
                <p className="text-text-secondary">
                  Su información y patrimonio siempre protegidos bajo estrictos
                  protocolos de seguridad.
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg text-center shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#BE9A42]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">
                  Offshore & Fundaciones
                </h3>
                <p className="text-text-secondary">
                  Creación de sociedades offshore y fundaciones de interés
                  privado en Panamá y en jurisdicciones estratégicas.
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg text-center shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#BE9A42]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">
                  Fideicomisos & Asesoría
                </h3>
                <p className="text-text-secondary">
                  Diseñamos fideicomisos y estructuras internacionales para la
                  protección de activos e inversiones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-gradient-to-r from-gray-200 to-gray-100 text-primary-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#010101]">
              Proteja su patrimonio con expertos legales
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700 ">
              Más de 10 años de experiencia brindando soluciones jurídicas y
              fiduciarias en Panamá y a nivel internacional.
            </p>
            <AnimatedButton>
              <Link
                href="/contacto"
                className="inline-block bg-[#010101] text-white border font-semibold px-8 py-3 rounded-lg hover:text-gray-400"
              >
                Solicitar Asesoría Personalizada
              </Link>
            </AnimatedButton>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
