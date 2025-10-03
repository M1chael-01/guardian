"use client";
import Image from "next/image";
import { Button } from "@/ui/button";
import { useTranslations } from 'next-intl';

import block from "@/images/icons/block.svg";
import cpu from "@/images/icons/cpu.svg";
import hashing from "@/images/icons/hashing.svg";
import plan from "@/images/icons/plan.svg";
import solo from "@/images/icons/solo.svg";
import usb from "@/images/icons/usb.svg";

export default function GuideContent() {
  const t = useTranslations('GuideContent');

  const features = [
    {
      title: t('features.0.title'),
      description: t('features.0.description'),
      icon: block,
    },
    {
      title: t('features.1.title'),
      description: t('features.1.description'),
      icon: cpu,
    },
    {
      title: t('features.2.title'),
      description: t('features.2.description'),
      icon: hashing,
    },
    {
      title: t('features.3.title'),
      description: t('features.3.description'),
      icon: plan,
    },
    {
      title: t('features.4.title'),
      description: t('features.4.description'),
      icon: solo,
    },
    {
      title: t('features.5.title'),
      description: t('features.5.description'),
      icon: usb,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 text-white w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              {t('title')}{" "}
              {t('free')}
              {" "}
              {t('guide')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl sm:max-w-2xl mx-auto px-4">
              {t('description')}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[radial-gradient(circle_at_center,_#00e5cf33,_#0a0f1c_80%)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-[#1A2233] hover:border-[#00E5CF]/30 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-[#00E5CF]/20 min-h-[280px] sm:min-h-[320px] md:min-h-[340px] w-full mx-auto"
                >
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 p-[2px] sm:p-[3px] rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#00E5CF] to-[#FFD600] shadow-[0_0_10px_#00E5CF60] sm:shadow-[0_0_15px_#00E5CF80] mb-8 sm:mb-10 md:mb-14">
                      <div className="bg-[#121523] w-full h-full rounded-[14px] sm:rounded-[18px] flex items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={32}
                          height={32}
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#BABABA] text-sm sm:text-base md:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-[#00E5CF] to-[#FFD600] text-black font-semibold text-base sm:text-lg px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-4 md:py-5 shadow-lg sm:shadow-xl hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform w-full sm:w-auto">
              {t('downloadButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}