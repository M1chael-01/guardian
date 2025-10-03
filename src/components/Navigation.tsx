"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

import logo from "@/images/icons/logo.svg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    document.cookie = `language=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
<header className="fixed top-0 left-0 w-[90%] z-50 bg-[#0a0f1c]/90 backdrop-blur-md py-3 sm:py-4 md:py-6 ml-[5%]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <Link href={`/${locale}`} className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
            <Image
              src={logo}
              alt="Guardians Logo"
              width={40}
              height={40}
              className="h-7 sm:h-8 md:h-10 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider uppercase">
                {t('brand.main')}
              </span>
              <span className="text-white/70 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider hidden xs:block">
                {t('brand.sub')}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 text-white/80 text-sm lg:text-base xl:text-lg mx-4">
            <Link href="#products" className="hover:text-white transition font-medium whitespace-nowrap">
              {t('products')}
            </Link>
            <Link href="#resources" className="hover:text-white transition font-medium whitespace-nowrap">
              {t('resources')}
            </Link>
            <Link href="#pricing" className="hover:text-white transition font-medium whitespace-nowrap">
              {t('pricing')}
            </Link>
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 flex-shrink-0">
            <div className="hidden sm:flex items-center space-x-1 lg:space-x-2 xl:space-x-3 text-sm lg:text-base xl:text-lg">
              <button
                onClick={() => switchLanguage('cs')}
                className={`transition font-medium whitespace-nowrap ${
                  locale === 'cs' ? "text-cyan-400" : "text-white/70 hover:text-cyan-400"
                }`}
              >
                CZ
              </button>
              <span className="text-white/30 text-sm lg:text-base xl:text-lg">|</span>
              <button
                onClick={() => switchLanguage('en')}
                className={`transition font-medium whitespace-nowrap ${
                  locale === 'en' ? "text-cyan-400" : "text-white/70 hover:text-cyan-400"
                }`}
              >
                EN
              </button>
            </div>

            <Button className="hidden sm:flex border-2 border-white/40 bg-transparent text-white text-sm lg:text-base xl:text-lg font-semibold hover:bg-white/10 px-3 lg:px-4 xl:px-6 py-1.5 lg:py-2 xl:py-3 rounded-lg whitespace-nowrap">
              {t('download')}
            </Button>

            <button
              className="md:hidden flex flex-col justify-center items-center w-6 h-6 sm:w-7 sm:h-7 space-y-1.5 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 sm:w-7 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 sm:w-7 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block w-6 sm:w-7 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="bg-[#0a0f1c] border-t border-white/10 px-4 sm:px-6 py-4 sm:py-6 flex flex-col space-y-4 sm:space-y-5">
          <Link
            href="#products"
            className="text-white/80 hover:text-white transition text-base sm:text-lg font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('products')}
          </Link>
          <Link
            href="#resources"
            className="text-white/80 hover:text-white transition text-base sm:text-lg font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('resources')}
          </Link>
          <Link
            href="#pricing"
            className="text-white/80 hover:text-white transition text-base sm:text-lg font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('pricing')}
          </Link>

          <div className="flex space-x-6 pt-4 border-t border-white/10">
            <button
              onClick={() => switchLanguage('cs')}
              className={`transition text-base sm:text-lg font-medium py-2 ${
                locale === 'cs' ? "text-cyan-400" : "text-white/70 hover:text-cyan-400"
              }`}
            >
              CZ
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={`transition text-base sm:text-lg font-medium py-2 ${
                locale === 'en' ? "text-cyan-400" : "text-white/70 hover:text-cyan-400"
              }`}
            >
              EN
            </button>
          </div>

          <Button className="mt-4 border-2 border-white/40 bg-transparent text-white hover:bg-white/10 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold">
            {t('download')}
          </Button>
        </nav>
      </div>
    </header>
  );
}