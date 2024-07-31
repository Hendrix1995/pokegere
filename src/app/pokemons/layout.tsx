import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PokéGere",
  description: "PokéRogue Tool",
};

export default function PokemonsLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        포켓몬 리스트 레이아웃
        {children}
        {modal}
      </body>
    </html>
  );
}
