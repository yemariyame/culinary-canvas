import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react';

const OFFERS = [
  {
    id: 1,
    title: "Weekend Brunch Special",
    description: "Enjoy 20% off our brunch menu every Saturday and Sunday from 10 AM to 2 PM.",
    code: "BRUNCH20",
    bg: "bg-orange-600"
  },
  {
    id: 2,
    title: "Wine & Dine Tuesdays",
    description: "Complementary bottle of house wine with every dinner reservation for two.",
    code: "WINELOVE",
    bg: "bg-stone-900"
  },
  {
    id: 3,
    title: "Chef's Tasting Menu",
    description: "Experience our 7-course seasonal tasting menu at a special price this month.",
    code: "TASTE24",
    bg: "bg-amber-800"
  }
];

const SpecialOffers = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % OFFERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % OFFERS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + OFFERS.length) % OFFERS.length);

  return (
    <div className="py-12 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`${OFFERS[current].bg} p-12 md:p-16 text-white min-h-[300px] flex items-center`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={20} className="text-orange-400" />
                    <span className="uppercase tracking-widest text-sm font-bold">Limited Time Offer</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">{OFFERS[current].title}</h3>
                  <p className="text-white/80 text-lg mb-8">{OFFERS[current].description}</p>
                  <div className="flex items-center gap-4">
                    <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 font-mono text-xl">
                      {OFFERS[current].code}
                    </span>
                    <button className="bg-white text-stone-900 px-6 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors">
                      Claim Now
                    </button>
                  </div>
                </div>
                <div className="hidden md:flex justify-end">
                  <div className="w-64 h-64 border-4 border-white/10 rounded-full flex items-center justify-center animate-pulse">
                     <span className="text-6xl font-serif italic text-orange-400">Save!</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {OFFERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-white w-8' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;