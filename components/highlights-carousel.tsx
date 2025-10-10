'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export function HighlightsCarousel() {
  const t = useTranslations();
  const highlights = t.raw('highlights') as string[];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [highlights.length]);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`transition-all duration-500 ${
          isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
        }`}
      >
        <p className="text-base md:text-xl font-medium leading-relaxed">
          {highlights[currentIndex]}
        </p>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        {highlights.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsAnimating(false);
              }, 500);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-green-600'
                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Ver destaque ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
