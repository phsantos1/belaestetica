import { motion } from 'motion/react';
import { DIFFERENTIALS } from '../data/clinicData';

function DifferentialEmblem({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <path
          d="M17 4C13.5 10.5 13.5 19.5 17 28C20.5 19.5 20.5 10.5 17 4Z"
          stroke="#A90070"
          strokeWidth="1.4"
        />
        <path
          d="M17 28C10.5 23.5 6.5 17.5 5 11.5C10.5 13.5 14.5 19.5 17 28Z"
          stroke="#FFFFFF"
          strokeOpacity="0.65"
          strokeWidth="1.2"
        />
        <path
          d="M17 28C23.5 23.5 27.5 17.5 29 11.5C23.5 13.5 19.5 19.5 17 28Z"
          stroke="#12C5BE"
          strokeWidth="1.2"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <path
          d="M4 17C7.8 11 12.2 8 17 8C21.8 8 26.2 11 30 17C26.2 23 21.8 26 17 26C12.2 26 7.8 23 4 17Z"
          stroke="#12C5BE"
          strokeWidth="1.35"
        />
        <circle cx="17" cy="17" r="4.5" stroke="#A90070" strokeWidth="1.4" />
        <circle cx="17" cy="17" r="1.4" fill="#FFFFFF" />
      </svg>
    );
  }

  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <circle cx="17" cy="17" r="11.5" stroke="#A90070" strokeWidth="1.35" />
      <circle cx="17" cy="17" r="6.5" stroke="#12C5BE" strokeOpacity="0.85" strokeWidth="1.15" />
      <path d="M17 2.5V6M17 28V31.5M2.5 17H6M28 17H31.5" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.1" />
    </svg>
  );
}

export function DifferentialsSection() {
  return (
    <section
      aria-label="Experiência e diferenciais"
      className="bg-[#050505] py-20 sm:py-24 border-b border-white/10"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs sm:text-sm font-medium text-[#A90070] mb-3">
              Experiência Clínica Bela
            </p>
            <h2 className="font-display text-[clamp(1.85rem,3vw,2.65rem)] font-medium leading-[1.15] tracking-tight text-white [text-wrap:balance]">
              Uma jornada pensada para o seu bem-estar.
            </h2>
          </div>
          <span className="hidden md:block h-px flex-1 max-w-[200px] bg-gradient-to-r from-[#A90070]/60 to-[#12C5BE]/40 mb-3" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.38,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between rounded-sm border border-white/10 bg-[#111111] p-7 sm:p-8 transition-colors duration-200 hover:border-[#A90070]/60"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <DifferentialEmblem index={index} />
                  <span className="text-xs tabular-nums text-[#A6A6A6]">
                    0{index + 1}.
                  </span>
                </div>

                <h3 className="font-display text-2xl font-medium text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#A6A6A6]">
                  {item.description}
                </p>
              </div>

              <div
                aria-hidden="true"
                className={`mt-7 h-px w-12 transition-all duration-300 group-hover:w-20 ${
                  item.accent === 'turquoise' ? 'bg-[#12C5BE]' : 'bg-[#A90070]'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
