import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globalTheme.css";

const ibm_plex_sans_kr = IBM_Plex_Sans_KR({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokéGere",
  description: "PokéRogue Tool",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={ibm_plex_sans_kr.className}>
        {children}
        {modal}
      </body>
    </html>
  );
}
