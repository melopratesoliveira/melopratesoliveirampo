import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { FiliaisCallToAction } from "@/components/common/filiais-cta";
import { Footer } from "@/components/common/footer";
import Sidebar from "@/components/common/sidebar";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { HeaderMobile } from "@/components/common/header-mobile";
import { HeaderWrapper } from "@/components/common/header/wrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Melo Prates e Oliveira",
  description: "Advocacia",
  author: "",
  icons: {
    icon: "/logo-melopratesoliveira.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Sidebar />
        <HeaderMobile />
        <HeaderWrapper />
        <main>{children}</main>
        <FiliaisCallToAction />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
