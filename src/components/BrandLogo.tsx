import { useState } from 'react';

interface BrandLogoProps {
  size?: 'header' | 'footer';
}

/**
 * Displays the official Clínica Bela logo image (/assets/aistudio/bela_logo_8187645b.png)
 * preserving the original lotus drawing, colors, typography, and exact proportions.
 */
export function BrandLogo({ size = 'header' }: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);

  const sizeClass =
    size === 'header' ? 'h-11 sm:h-12 w-auto' : 'h-[72px] sm:h-20 w-auto';

  if (hasError) {
    return (
      <span className="font-display text-2xl font-normal tracking-tight text-white whitespace-nowrap shrink-0">
        Clínica Bela
      </span>
    );
  }

  return (
    <img
      src="/assets/aistudio/bela_logo_8187645b.png"
      alt="Clínica Bela Estética"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`${sizeClass} object-contain shrink-0 select-none mix-blend-lighten`}
    />
  );
}
