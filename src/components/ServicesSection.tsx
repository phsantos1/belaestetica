import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { EditorialImage } from './EditorialImage';
import { SERVICES, WHATSAPP_URL } from '../data/clinicData';

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-[#050505] py-20 sm:py-24 lg:py-28 border-b border-white/10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#12C5BE] mb-3">
              Nossos Serviços
            </p>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.12] tracking-tight text-white [text-wrap:balance]">
              Beleza e cuidado em cada detalhe.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
            Conheça os cuidados disponíveis na Clínica Bela e consulte nossa equipe pelo WhatsApp para informações e horários.
          </p>
        </div>

        {/* 5 Service Cards in balanced 6-column editorial layout (3 on top row, 2 on bottom row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {SERVICES.map((service, index) => {
            const isBottomFeatured = index >= 3;
            const spanClass = isBottomFeatured ? 'lg:col-span-3' : 'lg:col-span-2';

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group flex flex-col overflow-hidden rounded-sm border border-white/10 bg-[#111111] transition-colors duration-200 hover:border-[#A90070]/70 ${spanClass}`}
              >
                {/* Illustrative Photography */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#050505]">
                  <EditorialImage
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fallbackTitle={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#A90070]/0 via-[#A90070]/80 to-[#12C5BE]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-xs font-medium tabular-nums text-[#A6A6A6]">
                        {service.number}.
                      </span>
                      <span className="h-px w-6 bg-[#A90070]/60" aria-hidden="true" />
                    </div>

                    <h3 className="font-display text-2xl sm:text-[26px] font-medium leading-snug text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#A6A6A6] mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] w-full items-center justify-between rounded-sm border border-[#A90070]/45 bg-[#050505]/60 px-4 py-2.5 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:border-[#A90070] hover:bg-[#A90070] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12C5BE]"
                    >
                      <span>Consultar pelo WhatsApp</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#12C5BE] transition-colors group-hover:text-white" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
