import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { EditorialImage } from './EditorialImage';
import { WHATSAPP_URL } from '../data/clinicData';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[560px] sm:min-h-[640px] lg:min-h-[680px] items-center justify-center overflow-hidden bg-[#050505] border-b border-white/10"
    >
      {/* Background editorial photography */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <EditorialImage
          src="/src/assets/images/hero_beauty_editorial_1795015034207.jpg"
          alt="Editorial de estética e beleza Clínica Bela com iluminação suave e pele radiante"
          fallbackTitle="Clínica Bela Estética"
          eager
          className="h-full w-full object-cover object-center"
        />
        {/* Measured scrim for crisp legibility over photography */}
        <div className="absolute inset-0 bg-[#050505]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/75 via-[#050505]/45 to-[#050505]/90" />
      </div>

      {/* Subtle lotus-inspired geometric accent arcs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full border border-[#A90070]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full border border-[#12C5BE]/10"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* Unboxed metadata line */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-[#A6A6A6] mb-5">
            <span className="text-[#12C5BE] font-medium">Clínica Bela Estética</span>
            <span aria-hidden="true">·</span>
            <span>Formiga, Minas Gerais</span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,4.8vw,4.35rem)] font-medium leading-[1.06] tracking-tight text-white [text-wrap:balance] mb-6">
            Realce sua beleza.{' '}
            <span className="italic font-normal text-white/95">
              Valorize seu melhor momento.
            </span>
          </h1>

          <p className="mx-auto max-w-[54ch] text-base sm:text-lg leading-relaxed text-[#E2E2E2] mb-9">
            Na Clínica Bela, cada detalhe é pensado para proporcionar uma experiência de cuidado, beleza e autoestima.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-sm bg-[#A90070] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#C40082] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12C5BE]"
            >
              <span>Agendar pelo WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#servicos"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-sm border border-[#12C5BE]/55 bg-[#111111]/85 backdrop-blur-sm px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:border-[#12C5BE] hover:bg-[#12C5BE]/15 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12C5BE]"
            >
              <span>Conhecer serviços</span>
              <ChevronDown className="h-4 w-4 text-[#12C5BE]" aria-hidden="true" />
            </a>
          </div>

          {/* Subtle editorial separator */}
          <div className="mt-10 pt-6 border-t border-white/15 w-full max-w-xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#CCCCCC]">
            <span>Atendimento personalizado</span>
            <span aria-hidden="true" className="text-[#A90070]">·</span>
            <span>Centro de Formiga/MG</span>
            <span aria-hidden="true" className="text-[#12C5BE]">·</span>
            <span>Agendamento direto pelo WhatsApp</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
