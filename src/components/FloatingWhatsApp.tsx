import { WHATSAPP_URL } from '../data/clinicData';

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar atendimento pelo WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group inline-flex h-11 w-11 sm:h-12 sm:w-auto sm:px-4 items-center justify-center gap-2.5 rounded-full border border-[#A90070]/80 bg-[#111111]/95 text-white shadow-lg shadow-black/60 backdrop-blur-md transition-all duration-200 hover:border-[#12C5BE] hover:bg-[#A90070] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12C5BE]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0 text-[#12C5BE] transition-colors group-hover:text-white"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      <span className="hidden sm:inline text-xs font-semibold tracking-wide whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
}
