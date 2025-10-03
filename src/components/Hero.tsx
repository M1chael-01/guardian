"use client";

import { Button } from "../ui/button";
import globe from "@/images/globe.png";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface SquareStyle {
  opacity: string;
  animationDelay: string;
}

export default function Hero() {
  const t = useTranslations('Home');
  const [squareStyles, setSquareStyles] = useState<SquareStyle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const styles = Array.from({ length: 96 }).map(() => ({
      opacity: `${Math.random() * 0.2 + 0.05}`,
      animationDelay: `${Math.random() * 2}s`
    }));
    setSquareStyles(styles);
  }, []);

  if (!isClient) {
    return (
      <section className="relative flex items-start justify-center bg-[#0a0f1c] text-white px-4 sm:px-6 min-h-screen overflow-hidden">
        <div className="w-full relative z-10 max-w-6xl mx-auto text-center pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 mt-[5vh] sm:mb-6">
            {t('title.part1')}{" "}
            <span className="bg-gradient-to-r from-white to-[#00E5CF] bg-clip-text text-transparent">
              {t('title.guardian')}
            </span>{" "}
            {t('title.part2')}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 text-white">
            {t('subtitle')}
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white/80 hover:text-white transition font-normal py-2 mb-10">
            {t("description.line1")} <br />
            {t("description.line2")}
          </p>
          <div className="flex justify-center">
            <Button className="bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold text-[20px] px-12 py-5 rounded-lg shadow-lg transition-all hover:scale-105">
              {t('cta')}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex items-start justify-center bg-[#0a0f1c] text-white px-4 sm:px-6 min-h-screen overflow-hidden">

      <div className="absolute inset-0 z-0">
        <div className="w-full h-full grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 gap-0">
          {squareStyles.map((style, i) => (
            <div
              key={i}
              className="border border-white/5 rounded-none min-h-[30px] hover:border-white/20 transition-all duration-500"
              style={style}
            />
          ))}
        </div>
      </div>

      <div className="w-full relative z-10 max-w-6xl mx-auto text-center pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 mt-[5vh] sm:mb-6">
          {t('title.part1')}{" "}
          <span className="bg-gradient-to-r from-white to-[#00E5CF] bg-clip-text text-transparent">
            {t('title.guardian')}
          </span>{" "}
          {t('title.part2')}
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 text-white">
          {t('subtitle')}
        </h2>

        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white/80 hover:text-white transition font-normal py-2 mb-10">
          {t("description.line1")} <br />
          {t("description.line2")}
        </p>

        <div className="flex justify-center">
          <Button className="bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold text-[20px] px-12 py-5 rounded-lg shadow-lg transition-all hover:scale-105">
            {t('cta')}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-3/5 sm:h-2/3 md:h-3/4 z-0 pointer-events-none">
        <Image
          src={globe}
          alt={t('globeAlt')}
          fill
          className="object-cover object-top opacity-80"
          priority
        />
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-green-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#0a0f1c]/15 to-[#0a0f1c]" />
    </section>
  );
}