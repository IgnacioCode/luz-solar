'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ProductGalleryProps = {
  images: string[];
  name: string;
  badge?: string;
};

export default function ProductGallery({ images, name, badge }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChangingImage, setIsChangingImage] = useState(false);
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeImage = images[activeIndex] ?? images[0];
  const hasMultipleImages = images.length > 1;

  useEffect(() => () => {
    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
    }
  }, []);

  const changeImage = (nextIndex: number) => {
    if (nextIndex === activeIndex || isChangingImage) {
      return;
    }

    setIsChangingImage(true);
    transitionTimeout.current = setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsChangingImage(false);
    }, 180);
  };

  const showPrevious = () => changeImage((activeIndex - 1 + images.length) % images.length);
  const showNext = () => changeImage((activeIndex + 1) % images.length);

  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-square bg-slate-100 p-5 sm:p-10">
          {badge ? <span className="absolute left-5 top-5 z-10 rounded-full bg-[#006CB5] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{badge}</span> : null}
          <img src={activeImage} alt={`${name} - imagen ${activeIndex + 1}`} className={`h-full w-full object-contain transition-opacity duration-200 ease-in-out ${isChangingImage ? 'opacity-0' : 'opacity-100'}`} referrerPolicy="no-referrer" />

          {hasMultipleImages ? (
            <>
              <button type="button" onClick={showPrevious} className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#006CB5] shadow-md transition hover:bg-white" aria-label="Ver imagen anterior">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={showNext} className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#006CB5] shadow-md transition hover:bg-white" aria-label="Ver imagen siguiente">
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="absolute bottom-4 right-4 rounded-full bg-slate-900/75 px-3 py-1 text-xs font-bold text-white">{activeIndex + 1} / {images.length}</span>
            </>
          ) : null}
        </div>
      </div>

      {hasMultipleImages ? (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button key={image} type="button" onClick={() => changeImage(index)} className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 bg-white p-1 transition ${index === activeIndex ? 'border-[#006CB5]' : 'border-transparent hover:border-slate-300'}`} aria-label={`Ver imagen ${index + 1}`} aria-pressed={index === activeIndex}>
              <img src={image} alt="" className="h-full w-full object-contain" referrerPolicy="no-referrer" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
