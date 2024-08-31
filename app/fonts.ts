import localFont from 'next/font/local';

export const Helvetica_Neue = localFont({
  src: [
    // Ultra Light
    {
      path: '../public/fonts/helveticaneueultralight-webfont.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/helveticaneueultralightitalic-webfont.woff2',
      weight: '100',
      style: 'italic',
    },
    // Thin
    {
      path: '../public/fonts/helveticaneuethin-webfont.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/helveticaneuethinitalic-webfont.woff2',
      weight: '200',
      style: 'italic',
    },
    // Light
    {
      path: '../public/fonts/helveticaneuelight-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/helveticaneuelightitalic-webfont.woff2',
      weight: '300',
      style: 'italic',
    },
    // Regular (Roman)
    {
      path: '../public/fonts/helveticaneueroman-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/helveticaneueitalic-webfont.woff2',
      weight: '400',
      style: 'italic',
    },
    // Medium
    {
      path: '../public/fonts/helveticaneuemedium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/helveticaneuemediumitalic-webfont.woff2',
      weight: '500',
      style: 'italic',
    },
    // Bold
    {
      path: '../public/fonts/helveticaneuebold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/helveticaneuebolditalic-webfont.woff2',
      weight: '700',
      style: 'italic',
    },
    // Heavy
    {
      path: '../public/fonts/helveticaneueheavy-webfont.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/helveticaneueheavyitalic-webfont.woff2',
      weight: '800',
      style: 'italic',
    },
    // Black
    {
      path: '../public/fonts/helveticaneueblack-webfont.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/helveticaneueblackitalic-webfont.woff2',
      weight: '900',
      style: 'italic',
    }
  ],
  variable: '--font-Helvetica', 
});


export const GoodTimes = localFont({
  src: [
    {
      path: '../public/fonts/goodtimesrg.woff',
      weight: 'normal',
      style: 'normal',
    },
  ],
  variable: '--font-GoodTimes',
});
