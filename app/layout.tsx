import type { Metadata } from "next";
import { Helvetica_Neue } from '@/app/fonts'
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "./shared-components/header";
import Footer from "./shared-components/footer";

export const metadata: Metadata = {
  title: "The ACEL Tunnel",
  description: "The ACEL Tunnel website",
  metadataBase: new URL("https://acel.space"),
  keywords: ['ACEL', 'The ACEL Tunnel', 'TheACELTunnel','Accelerating Humanity'],
  authors: [{ name: 'ACEL' }, { name: 'ACEL', url: 'https://acel.space' }],
  openGraph: {
    siteName: 'The ACEL Tunnel',
    title: "The ACEL Tunnel",
    description: "Accelerating Humanity into Orbit",
    url: 'https://acel.space',
    type: "website",
    images: 'https://acelschool.org/img/bg-tunnel-header-thumbnail-min.png',
  },
  twitter: {
    site: "https://acel.space",
    card: "summary_large_image",
    title: "The ACEL Tunnel",
    description: "Accelerating Humanity into Orbit",
    images: "https://acel.space/img/bg-tunnel-header-thumbnail-min.png"
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'favicon-light.svg',
        href: 'favicon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'favicon-dark.svg',
        href: 'favicon-dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Helvetica_Neue.className} >
        <Header />
        <div className="content overflow-hidden position-relative">
          <div className="mx-2 mx-lg-5">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
