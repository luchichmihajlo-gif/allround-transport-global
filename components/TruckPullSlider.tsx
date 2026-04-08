
import React, { useState, useRef, useEffect } from 'react';
import { Truck, ChevronRight } from 'lucide-react';

interface TruckPullSliderProps {
  onComplete: () => void;
  lang: 'EN' | 'NL';
}

const TruckPullSlider: React.FC<TruckPullSliderProps> = ({ onComplete, lang }) => {
  const [position, setPosition] = useState(0); // 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (position < 95) {
      // Smoothly snap back if not completed
      setPosition(0);
    }
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || hasTriggered || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const handleWidth = 64; // Smaller width now that logo is gone
    const padding = 8; // Internal padding of container
    const availableWidth = rect.width - handleWidth - (padding * 2);
    
    let x = clientX - rect.left - padding - (handleWidth / 2);
    let newPos = (x / availableWidth) * 100;

    newPos = Math.max(0, Math.min(100, newPos));
    setPosition(newPos);

    if (newPos > 99) {
      setHasTriggered(true);
      setPosition(100);
      setTimeout(onComplete, 200);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    const handleGlobalUp = () => handleEnd();
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [position, isDragging]);

  return (
    <section className="py-24 bg-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-navy/40 uppercase tracking-[0.3em] mb-4">
            {lang === 'EN' ? 'Direct Dispatch' : 'Directe Verzending'}
          </h2>
          <h3 className="text-3xl font-black text-navy">
            {lang === 'EN' ? 'Slide to Request a Quote' : 'Schuif voor een Offerte'}
          </h3>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          className="relative h-24 bg-slate-50 rounded-2xl border border-slate-100 flex items-center px-2 cursor-grab active:cursor-grabbing group transition-colors hover:bg-slate-100/50"
        >
          {/* Subtle Track Line */}
          <div className="absolute left-10 right-10 h-0.5 bg-slate-200 top-1/2 -translate-y-1/2"></div>
          
          {/* The Draggable Truck Handle */}
          <div 
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            style={{ 
              left: `calc(${position}% * (1 - 64/1000) + 8px)`, // Account for handle width and padding
              transition: isDragging ? 'none' : 'left 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
              transform: `translateX(0)`
            }}
            className={`absolute z-20 flex items-center justify-center`}
          >
            <div className={`relative flex items-center bg-white p-3 rounded-xl shadow-xl border border-slate-100 gap-3 transition-transform duration-200 ${isDragging ? 'scale-110 shadow-2xl' : 'scale-100'}`}>
               <div className="bg-navy p-2.5 rounded-lg text-white">
                  <Truck className="w-6 h-6" />
               </div>
               
               {/* Drag Handle Dots */}
               <div className="flex flex-col gap-1 opacity-20 pr-1">
                  <div className="w-1 h-1 bg-navy rounded-full"></div>
                  <div className="w-1 h-1 bg-navy rounded-full"></div>
                  <div className="w-1 h-1 bg-navy rounded-full"></div>
               </div>
            </div>
          </div>

          {/* Destination Goal */}
          <div className="absolute right-2 h-20 w-20 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-inner">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${position > 95 ? 'bg-eu-yellow scale-110 shadow-lg shadow-eu-yellow/20' : 'bg-slate-50'}`}>
              <ChevronRight className={`w-6 h-6 transition-colors ${position > 95 ? 'text-navy' : 'text-slate-300'}`} />
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center items-center gap-2 text-slate-400 text-xs font-bold tracking-widest uppercase">
          <div className="w-8 h-px bg-slate-200"></div>
          {lang === 'EN' ? 'Interactive Logistics' : 'Interactieve Logistiek'}
          <div className="w-8 h-px bg-slate-200"></div>
        </div>
      </div>
    </section>
  );
};

export default TruckPullSlider;
