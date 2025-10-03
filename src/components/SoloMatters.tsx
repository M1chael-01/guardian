"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

import centralizationThreat from "@/images/centralizationThreat.png";
import shiftBalance from "@/images/balance.png";
import plugAndHash from "@/images/plugHash.png";

export default function SoloMatters() {
  const t = useTranslations("SoloMatters");

  const renderTitle = (title: string) => {
    const parts = title.split("|");

    if (parts.length === 1) {
      return (
        <span className="text-white font-inter font-bold">
          {title}
        </span>
      );
    }

    return (
      <>
        <span className="text-white font-inter font-medium">
          {parts[0]}{" "}
        </span>
        <span className="bg-gradient-to-r from-[#F5F5F5] to-[#FFBF00] bg-clip-text text-transparent font-inter font-bold">
          {parts[1]}
        </span>
      </>
    );
  };

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 text-white px-4 sm:px-6 lg:px-8 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[53px] font-exo2 font-bold leading-[120%] tracking-[-2%] mb-4 text-[#F5F5F5]">
          {t("title")}
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-white/80 hover:text-white transition font-normal py-2 mb-8 sm:mb-10 max-w-3xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <Button className="bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            {t("downloadButton")}
          </Button>
          <Button className="border border-white bg-transparent hover:bg-white/10 text-white font-medium text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto">
            {t("joinButton")}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
          <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-2">
            <article className="relative rounded-2xl overflow-hidden h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] shadow-lg border border-white/10 hover:border-white/25 hover:shadow-[0_0_30px_#00E5CF20] transition-all duration-300">
              <Image
                src={centralizationThreat}
                alt={t("cards.centralization.alt")}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-start bg-gradient-to-b from-[#0d1425]/70 to-transparent">
                <h3 className="font-inter font-bold text-2xl sm:text-3xl md:text-[35px] leading-[140%] sm:leading-[150%] tracking-[-2%] mb-2 sm:mb-3 text-left">
                  {renderTitle(t("cards.centralization.title"))}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 w-full sm:w-[70%] md:w-[60%] lg:w-[52%] hover:text-white transition font-normal py-1 sm:py-2 font-inter">
                  {t("cards.centralization.description")}
                </p>
              </div>
            </article>

            <article className="relative rounded-2xl overflow-hidden h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] shadow-lg border border-white/10 hover:border-white/25 hover:shadow-[0_0_30px_#00E5CF20] transition-all duration-300">
              <Image
                src={shiftBalance}
                alt={t("cards.balance.alt")}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-start bg-gradient-to-b from-[#0d1425]/70 to-transparent">
                <h3 className="font-inter font-bold text-2xl sm:text-3xl md:text-[35px] leading-[140%] sm:leading-[150%] tracking-[-2%] mb-2 sm:mb-3 text-left">
                  {renderTitle(t("cards.balance.title"))}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 w-full sm:w-[70%] md:w-[60%] lg:w-[52%] hover:text-white transition font-normal py-1 sm:py-2 font-inter">
                  {t("cards.balance.description")}
                </p>
              </div>
            </article>
          </div>

          <article className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-full shadow-lg border border-white/10 hover:border-white/25 hover:shadow-[0_0_30px_#00E5CF20] transition-all duration-300">
            <Image
              src={plugAndHash}
              alt={t("cards.plug.alt")}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-[#0d1425]/80 to-transparent">
              <h3 className="font-inter font-bold text-2xl sm:text-3xl md:text-[35px] leading-[140%] sm:leading-[150%] tracking-[-2%] mb-2 sm:mb-3 text-left">
                {renderTitle(t("cards.plug.title"))}
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 w-full sm:w-[90%] md:w-[80%] hover:text-white transition font-normal py-1 sm:py-2 font-inter">
                {t("cards.plug.description")}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}