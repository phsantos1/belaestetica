import { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  eager?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Clínica Bela',
  eager = false,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#111111] via-[#1a0915] to-[#050505] border border-white/10 text-center p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          width="36"
          height="24"
          viewBox="0 0 36 24"
          fill="none"
          aria-hidden="true"
          className="mb-3 opacity-80"
        >
          <path
            d="M18 2C15 7 15 14 18 20C21 14 21 7 18 2Z"
            stroke="#A90070"
            strokeWidth="1.25"
          />
          <path
            d="M18 20C12 16 8 11 7 6C12 8 16 13 18 20Z"
            stroke="#A90070"
            strokeWidth="1.25"
          />
          <path
            d="M18 20C24 16 28 11 29 6C24 8 20 13 18 20Z"
            stroke="#12C5BE"
            strokeWidth="1.25"
          />
        </svg>
        <span className="font-display text-lg text-white/90">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
