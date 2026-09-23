import Script from "next/script";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-EVVERWKPT0";

/**
 * Loads gtag.js and initializes GA4 with send_page_view disabled — pageviews
 * are sent manually by GoogleAnalyticsPageview so client-side route changes
 * (next/link navigations between "/", "/poll", "/privacy", "/terms") are
 * tracked correctly instead of only the first full page load.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
