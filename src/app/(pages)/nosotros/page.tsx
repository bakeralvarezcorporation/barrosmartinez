// app/nosotros/page.tsx - Martinez Barros
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import * as motion from "motion/react-client";
import HeroSection from '../../ui/components/HeroSection';
import AnimatedButton from '../../ui/motion/AnimatedButton';

export const metadata: Metadata = {
  title: 'Nosotros | Abogados Asociados Martínez Barros - Excelencia Jurídica con Tradición y Visión',
  description: 'Bufete con más de tres años de experiencia ofreciendo soluciones legales integrales. Combinamos la tradición jurídica con enfoques innovadores para clientes nacionales e internacionales.',
  keywords: ["Nosotros", "Acerca de nosotros", "Quienes somos", "Nuestra historia"]
};

export default function Nosotros() {
  return (
    <>
      <motion.div>
        <HeroSection pageTitle="Nosotros"/>
        
        {/* Historia Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="hidden md:block lg:w-1/2">
                <div className="relative h-96 w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://bakerandalvarez.site/abogadosasociadosmartinezbarros/wp-content/uploads/sites/3/2025/09/nosotros-scaled.jpg"
                    alt="Historia de Martínez Barros"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-[#010101] mb-6">Excelencia Jurídica</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Abogados Asociados Martínez Barros es una firma especializada en derecho comercial, servicios fiduciarios y asesoría de inversiones. Nuestra trayectoria nos ha permitido desarrollar expertise en la creación y gestión de empresas offshore en Panamá y otros territorios de prestigio internacional, así como en la constitución de fundaciones de interés privado para clientes que buscan optimizar su estructura patrimonial. Combinamos el conocimiento profundo de las legislaciones locales e internacionales con un enfoque personalizado que atiende las necesidades específicas de cada cliente.
                </p>
                <p className="text-lg text-gray-700">
                  Combinamos la sabiduría de la tradición jurídica con enfoques innovadores, manteniéndonos a la 
                  vanguardia de los cambios legislativos y las necesidades del mercado global.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-[#010101]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Nuestros Pilares Fundamentales</h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Los valores que han guiado nuestra práctica jurídica por varios años
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Experiencia */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#c8a971]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#c8a971]">Experiencia Comprobada</h3>
                <p className="text-white">
                  Tres décadas resolviendo casos complejos nos otorgan una perspectiva única y profundo conocimiento jurídico.
                </p>
              </div>

              {/* Rigor */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#c8a971]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#c8a971]">Rigor Jurídico</h3>
                <p className="text-white">
                  Analizamos cada caso con meticulosidad, asegurando que cada estrategia esté fundamentada en derecho sólido.
                </p>
              </div>

              {/* Tradición */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#c8a971]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#c8a971]">Tradición con Visión</h3>
                <p className="text-white">
                  Respetamos los principios tradicionales del derecho mientras adoptamos enfoques modernos e innovadores.
                </p>
              </div>

              {/* Compromiso */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#c8a971]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#c8a971]">Compromiso Social</h3>
                <p className="text-white">
                  Contribuimos activamente a nuestra comunidad a través de trabajo pro bono y apoyo a iniciativas de justicia social.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#f5f2eb]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#010101]">Expertos en Soluciones Jurídicas Integrales</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-[#010101]">
              Nuestra firma combina el conocimiento profundo del derecho con un enfoque estratégico para ofrecer 
              soluciones que protegen sus intereses y promueven su crecimiento empresarial o patrimonial.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedButton>
                <Link 
                  href="/contacto"
                  className="bg-[#010101] text-white px-8 py-3 rounded-md font-medium"
                >
                  Programar una Consulta
                </Link>
              </AnimatedButton>
              <AnimatedButton>
                <Link 
                  href="/servicios"
                  className="border border-[#010101] text-[#010101] px-8 py-3 rounded-md font-medium"
                >
                  Conozca Nuestros Servicios
                </Link>
              </AnimatedButton>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}