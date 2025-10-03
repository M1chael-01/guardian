"use client";

import { Button } from "../ui/button";
import { useTranslations } from 'next-intl';

export default function Cta() {
  const t = useTranslations('Cta');

  return (
    <section className="relative mt-12 sm:mt-16 md:mt-20 mb-20 sm:mb-32 md:mb-40 py-8 sm:py-12 md:py-16 lg:py-25 px-4 sm:px-6 text-white bg-[#0a0f1c] rounded-lg sm:rounded-xl overflow-hidden w-[90%] sm:w-[85%] md:w-[80%] mx-auto border border-[#00E5CF]/20">
      <div className="absolute inset-0 z-0 rounded-lg sm:rounded-xl bg-[radial-gradient(ellipse_at_center,_#00e5cf40_0%,_#0a0f1c_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[53px] font-exo2 font-bold leading-[120%] tracking-[-2%] mb-6 sm:mb-8 md:mb-10 text-[#F5F5F5] px-2">
          {t('title')}
        </h2>
        <Button className="bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 lg:px-11 py-3 sm:py-4 md:py-5 rounded-full shadow-lg hover:opacity-90 hover:scale-105 hover:shadow-xl transition-all duration-300 transform w-full sm:w-auto">
          {t('button')}
        </Button>
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#00E5CF] rounded-full blur-xl sm:blur-2xl lg:blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#FFD600] rounded-full blur-lg sm:blur-xl lg:blur-2xl opacity-15" />
    </section>
  );
}