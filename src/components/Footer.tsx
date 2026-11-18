import { BrandLogo } from './BrandLogo';
import { CLINIC_INFO, NAV_LINKS, WHATSAPP_URL } from '../data/clinicData';

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-14 pb-10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Logo */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <a
              href="#inicio"
              aria-label="Voltar ao topo — Clínica Bela"
              className="inline-flex rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12C5BE]"
            >
              <BrandLogo size="footer" />
            </a>
            <p className="text-sm leading-relaxed text-[#A6A6A6] max-w-xs">
              Cuidado, beleza e autoestima em um espaço dedicado ao seu bem-estar em Formiga/MG.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A6A6A6]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-0.5 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-[#12C5BE]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & WhatsApp */}
          <div className="md:col-span-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Atendimento
            </h3>
            <div className="space-y-3 text-sm text-[#A6A6A6]">
              <p className="leading-relaxed">{CLINIC_INFO.address}</p>
              <p>
                WhatsApp:{' '}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium tabular-nums text-white transition-colors hover:text-[#12C5BE]"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Demo Identification */}
        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#A6A6A6]">
          <p>{CLINIC_INFO.name} · Formiga, Minas Gerais</p>
          <p className="text-[#A6A6A6]/80">Demonstração visual — site não oficial</p>
        </div>
      </div>
    </footer>
  );
}
