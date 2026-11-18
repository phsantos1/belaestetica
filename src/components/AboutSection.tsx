import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { EditorialImage } from './EditorialImage';
import { CLINIC_INFO, WHATSAPP_URL } from '../data/clinicData';

export function AboutSection() {
  return (
    <section id="sobre" className="bg-[#050505] py-20 sm:py-24 lg:py-28 border-b border-white/10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left: Conceptual Visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[380px] sm:min-h-[460px] overflow-hidden rounded-sm border border-white/10 bg-[#111111]">
              <EditorialImage
                src="/src/assets/images/about_conceptual_space_1795015037619.jpg"
                alt="Composição conceitual de estética com flor de lótus em vidro fumê e pedra escura"
                fallbackTitle="Clínica Bela"
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/65 via-transparent to-transparent"
              />
            </div>
          </motion.div>

          {/* Right: Institutional Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-xs sm:text-sm font-medium text-[#12C5BE] mb-3">
              Sobre a Clínica
            </p>

            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.12] tracking-tight text-white [text-wrap:balance] mb-6">
              Um espaço dedicado a você.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-[#A6A6A6] max-w-[62ch]">
              <p>
                A <strong className="font-medium text-white">{CLINIC_INFO.name}</strong> nasce do
                propósito de oferecer um ambiente acolhedor, sereno e pensado para quem valoriza o
                autocuidado em cada momento.
              </p>
              <p>
                Localizada no centro de Formiga, em Minas Gerais, a clínica reúne cuidados voltados
                para o rosto, olhar e corpo em uma atmosfera tranquila, onde o atendimento é
                conduzido com delicadeza, respeito e atenção às preferências de cada cliente.
              </p>
              <p>
                Mais do que procedimentos estéticos, acreditamos em uma pausa especial na rotina —
                um momento reservado para realçar sua beleza natural e fortalecer sua autoestima.
              </p>
            </div>

            {/* Subtle architectural lotus divider + action */}
            <div className="mt-9 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="text-sm text-[#A6A6A6]">
                <span className="block text-white font-medium">Centro, Formiga/MG</span>
                <span>{CLINIC_INFO.address}</span>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm bg-[#A90070] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#C40082] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12C5BE]"
              >
                <span>Conversar pelo WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
