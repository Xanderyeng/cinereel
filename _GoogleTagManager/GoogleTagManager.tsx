import Script from "next/script";

interface GoogleTagManagerProps {
  containderId: string;
}

const GoogleTagManager = ({ containderId }: GoogleTagManagerProps) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}   
 `}
        strategy="afterInteractive"
      ></Script>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var 
 f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'dataLayer':l;j.async=true;j.src=   

            'https://www.googletagmanager.com/gtm.js?id='+l;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${containderId}');
          `,
        }}
      ></Script>
    </>
  );
};

export default GoogleTagManager;
