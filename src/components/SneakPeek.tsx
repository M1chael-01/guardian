"use client";

import Image from "next/image";
import { Button } from "@/ui/button";
import { useTranslations } from 'next-intl';

import mini from "@/images/mini.png"

export default function SneakPeek() {
  const t = useTranslations('SneakPeek');

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
          {/* Guardian Mini */}
          <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#131b2e] shadow-lg overflow-hidden transition-all duration-300 hover:border-[#00E5CF]/30 hover:shadow-[0_0_20px_#00E5CF20] sm:hover:shadow-[0_0_30px_#00E5CF20] hover:scale-[1.01] sm:hover:scale-[1.02]">
            <div className="bg-[radial-gradient(circle_at_center,_#00e5cf33,_#0a0f1c_80%)] rounded-t-xl sm:rounded-t-2xl p-4 sm:p-6 md:p-8 border-b-2 border-[#1A2233] min-h-[250px] sm:min-h-[300px] md:min-h-[350px] flex items-center justify-center transition-all duration-300 hover:bg-[radial-gradient(circle_at_center,_#00e5cf50,_#0a0f1c_80%)]">
              <Image
                src={mini}
                alt={t('mini.alt')}
                width={400}
                height={350}
                className="object-contain w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] max-h-[180px] sm:max-h-[220px] md:max-h-[260px] lg:max-h-[300px] transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                <h3 className="text-lg sm:text-xl md:text-[23px] font-exo2 font-medium leading-[120%] tracking-[-2%] text-left">
                  {t('mini.title')} <span className="font-bold"> {t('mini.subtitle')}</span>
                </h3>

                <div className="bg-white/10 text-white text-xs sm:text-sm md:text-[14px] font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transition-all duration-300 hover:bg-white/20 w-full sm:w-auto text-center">
                  {t('mini.badge')}
                </div>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-white/60 text-left transition-colors duration-300 hover:text-white/80">
                {t('mini.specs')} • <span className="text-[#00E5CF] font-medium">{t('mini.price')}</span>
              </p>

              <Button className="w-full bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all hover:scale-105">
                {t('button')}
              </Button>
            </div>
          </div>

          {/* Guardian Max */}
          <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#131b2e] shadow-lg overflow-hidden transition-all duration-300 hover:border-[#00E5CF]/30 hover:shadow-[0_0_20px_#00E5CF20] sm:hover:shadow-[0_0_30px_#00E5CF20] hover:scale-[1.01] sm:hover:scale-[1.02]">
            <div className="bg-[radial-gradient(circle_at_center,_#00e5cf33,_#0a0f1c_80%)] rounded-t-xl sm:rounded-t-2xl p-4 sm:p-6 md:p-8 border-b-2 border-[#1A2233] min-h-[250px] sm:min-h-[300px] md:min-h-[350px] flex items-center justify-center transition-all duration-300 hover:bg-[radial-gradient(circle_at_center,_#00e5cf50,_#0a0f1c_80%)]">
              <Image
                src={mini}
                alt={t('max.alt')}
                width={500}
                height={400}
                className="object-contain w-auto h-auto max-w-[220px] sm:max-w-[270px] md:max-w-[320px] lg:max-w-[380px] max-h-[200px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[350px] transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                <h3 className="text-lg sm:text-xl md:text-[23px] font-exo2 font-medium leading-[120%] tracking-[-2%] text-left">
                  {t('max.title')} <span className="font-bold"> {t('max.subtitle')}</span>
                </h3>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-[#BA96DD] text-xs sm:text-sm md:text-[14px] font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full border border-purple-500/30 transition-all duration-300 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/50 w-full sm:w-auto text-center">
                  {t('max.badge')}
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-white/60 text-left transition-colors duration-300 hover:text-white/80">
                {t('max.specs')} • <span className="text-[#00E5CF] font-medium">{t('max.price')}</span>
              </p>

              <Button className="w-full bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all hover:scale-105">
                {t('button')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}