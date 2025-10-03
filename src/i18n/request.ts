import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Get cookies from the request
  const cookieStore = cookies();
  const languageCookie = cookieStore.get('language')?.value;
  
  // Determine locale: use cookie value if valid, otherwise default to 'en'
  const locale = (languageCookie === 'cs' || languageCookie === 'en') 
    ? languageCookie 
    : 'en';

  return {
    locale, // Current language ('en' or 'cs')
    messages: (await import(`../../messages/${locale}.json`)).default 
  };
});