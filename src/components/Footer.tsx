"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useTranslations } from 'next-intl';
import logo from "@/images/icons/logo.svg";

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[#0a0f1c] text-white/70 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 w-full">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-4 sm:pb-5 md:pb-6 gap-4 sm:gap-5 md:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
            <span className="text-white text-lg sm:text-xl font-semibold tracking-wide uppercase">
              {t('brand')}
            </span>
          </div>

          <div className="flex gap-2 sm:gap-3 md:gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-[12px] sm:rounded-[16px] bg-[#223047] hover:bg-[#2d4366] transition duration-300 shadow-[0_0_10px_#2C99D6]/40 sm:shadow-[0_0_15px_#2C99D6]/40"
            >
              <FaLinkedin size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#2C99D6]" />
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-[12px] sm:rounded-[16px] bg-[#1b2336] hover:bg-[#2c2c2c] transition duration-300 shadow-[0_0_10px_white]/10 sm:shadow-[0_0_15px_white]/10"
            >
              <FaGithub size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-[12px] sm:rounded-[16px] bg-[#1b2336] hover:bg-[#25304a] transition duration-300 shadow-[0_0_10px_#1DA1F2]/20 sm:shadow-[0_0_15px_#1DA1F2]/20"
            >
              <FaXTwitter size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between text-xs sm:text-sm text-white/60 gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">
          <div className="text-sm sm:text-[16px] w-full lg:w-auto text-center lg:text-left order-2 lg:order-1">
            &copy; {t('copyright')} <span className="uppercase">{t('brand')}</span>
          </div>

          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 w-full lg:w-auto order-1 lg:order-2">
            <li>
              <Link
                href="#terms"
                className="text-white/80 hover:text-white transition text-sm sm:text-base md:text-lg font-normal py-1 sm:py-2"
              >
                {t('terms')}
              </Link>
            </li>
            <li>
              <Link
                href="#privacy"
                className="text-white/80 hover:text-white transition text-sm sm:text-base md:text-lg font-normal py-1 sm:py-2"
              >
                {t('privacy')}
              </Link>
            </li>
            <li>
              <Link
                href="#legal"
                className="text-white/80 hover:text-white transition text-sm sm:text-base md:text-lg font-normal py-1 sm:py-2"
              >
                {t('legal')}
              </Link>
            </li>
          </ul>

          <div className="text-sm sm:text-[16px] w-full lg:w-auto text-center lg:text-right order-3">
            {t('designedBy')} <span className="uppercase text-white">{t('designer')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}