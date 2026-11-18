import { ArrowUpRight, ExternalLink, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import {
  CLINIC_INFO,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_LINK,
  WHATSAPP_URL,
} from '../data/clinicData';

export function ContactSection() {
  return (
    <section id="contato" className="bg-[#050505] py-20 sm:py-24 lg:py-28 border-b border-white/10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left: Address, Phone/WhatsApp, Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between rounded-sm border border-white/10 bg-[#111111] p-7 sm:p-9"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#12C5BE] mb-3">
                Contato e Agendamento
              </p>

              <h2 className="font-display text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-tight text-white [text-wrap:balance] mb-5">
                Seu próximo momento de autocuidado começa aqui.
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#A6A6A6] mb-8">
                Entre em contato diretamente pelo WhatsApp para tirar dúvidas sobre os serviços e
                consultar a disponibilidade de horários.
              </p>

              <div className="space-y-6 border-t border-white/10 pt-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-[#050505] text-[#A90070]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#A6A6A6] mb-1">Endereço</span>
                    <p className="text-sm sm:text-base font-medium text-white leading-snug">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-[#050505] text-[#12C5BE]">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#A6A6A6] mb-1">Telefone e WhatsApp</span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-medium tabular-nums text-white transition-colors hover:text-[#12C5BE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12C5BE]"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9 pt-7 border-t border-white/10 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm bg-[#A90070] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#C40082] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12C5BE]"
              >
                <span>Agendar meu atendimento</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-sm border border-[#12C5BE]/40 bg-[#050505]/70 px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition-colors duration-200 hover:border-[#12C5BE] hover:bg-[#12C5BE]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12C5BE]"
              >
                <span>Abrir localização no Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#12C5BE]" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right: Location Map */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col overflow-hidden rounded-sm border border-white/10 bg-[#111111]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                <MapPin className="h-4 w-4 text-[#A90070]" aria-hidden="true" />
                <span className="font-medium">Localização — Centro, Formiga/MG</span>
              </div>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#12C5BE] transition-colors hover:text-white whitespace-nowrap shrink-0"
              >
                Ver rota
              </a>
            </div>

            <div className="relative flex-1 min-h-[340px] sm:min-h-[420px] bg-[#050505]">
              <iframe
                title="Mapa da localização da Clínica Bela Estética — Rua José Francisco de Paula, 85, Centro, Formiga/MG"
                src={GOOGLE_MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full min-h-[340px] sm:min-h-[420px] border-0 grayscale-[35%] contrast-[1.05] invert-[90%] hue-rotate-180"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
